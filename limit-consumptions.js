var AnyUsageStart = bp.EventSet("START_USE", function(e){
    return e.getName().startsWith("START_");
});
var AnyUsageEnd = bp.EventSet("END_USE", function(e){
    return e.getName().startsWith("END_");
});
var LIMIT = 2;

var sampleEvt = bp.Event("END_");
bp.log.info("sampleEvt in usage end: " + AnyUsageEnd.contains(sampleEvt));
bp.log.info("sampleEvt in usage start: " + AnyUsageStart.contains(sampleEvt));

bp.registerBThread("limitConsumption", function(){
    var count = 0;
    while (true) {
        var evt = bp.sync({waitFor:[AnyUsageStart, AnyUsageEnd]});
        if ( AnyUsageStart.contains(evt) ) {
            count++;
        } else if ( AnyUsageEnd.contains(evt) ) {
            count--;
        }
        if ( count === LIMIT ) {
            bp.log.info("limiting...")
            bp.registerBThread("tempBlock", function(){
                bp.sync({
                    waitFor:AnyUsageEnd,
                    block:AnyUsageStart
                });
            });
        }
    }
});

bp.registerBThread("limit-verify", function(){
    var count = 0;
    while (true) {
        var evt = bp.sync({waitFor:[AnyUsageStart, AnyUsageEnd]});
        if ( AnyUsageStart.contains(evt) ) {
            count++;
        } else if ( AnyUsageEnd.contains(evt) ) {
            count--;
        }
        bp.ASSERT( count<=LIMIT, "Usage limit exceeded: " + count + "/" + LIMIT);
    }
});


for (var i=0; i<10; i++ ) {
    (function(ii){
        bp.registerBThread("user-"+ii, function(){
        bp.sync({request:bp.Event("START_"+ii)});
        bp.log.info(" thread " + ii + " using");
        bp.sync({request:bp.Event("END_"+ii)});
     });
    })(i);
}