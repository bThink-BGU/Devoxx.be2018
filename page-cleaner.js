var PrintPage = bp.Event("PrintPage");
var CleanInkJets = bp.Event("CleanInkJets");

bp.registerBThread("cleaner", function(){
    while ( true ) {
        bp.sync({waitFor:PrintPage});
        bp.sync({waitFor:PrintPage});
        bp.sync({waitFor:PrintPage});
        bp.sync({
            request: CleanInkJets,
              block: PrintPage
        });
    }
});

bp.registerBThread("printJob", function(){
    for ( var i=0; i<10; i++ ) {
        bp.sync({request:PrintPage});
    }
});