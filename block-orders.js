function Order(product) {
    return bp.Event("ORD_"+product);
}

function OutOfStock(product) {
    return bp.Event("OOS_"+product);
}

function RefillDone(product){
    return bp.Event("RFL_"+product);
}

function blockOrdersWhenOutOf( p ) {
    return function(){
        while(true) {
            bp.sync({waitFor: OutOfStock(p)});
            bp.sync({
                waitFor: RefillDone(p),
                block: Order(p)
            });
        };
    };
}

function orderer(product, count) {
    return function(){
        while ( count>0 ) {
            count = count-1;
            bp.sync({request:Order(product)});
        }
    };
}

function limiter(product, count) {
    return function(){
        while ( true ) {
            var stock = count;
            while ( stock>0 ) {
                bp.sync({waitFor:Order(product)});
                stock--;
            }
            bp.sync({request:OutOfStock(product), block:Order(product)});
            bp.sync({request:RefillDone(product)});
        }
    };
}

bp.registerBThread( blockOrdersWhenOutOf("dukes")  );
bp.registerBThread( blockOrdersWhenOutOf("coffee") );
bp.registerBThread( limiter("dukes", 4)            );
bp.registerBThread( limiter("coffee", 2)           );
bp.registerBThread( orderer("dukes",5)             );
bp.registerBThread( orderer("coffee",5)            );
bp.registerBThread( orderer("waffle",5)           );