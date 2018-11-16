
bp.registerBThread("bt-1", function(){
  bp.sync({request:bp.Event("hello")});
});

bp.registerBThread("bt-2", function(){
  bp.sync({request:bp.Event("world")});
});

bp.registerBThread("enforce-order", function(){
  bp.sync({
    waitFor:bp.Event("hello"),
      block:bp.Event("world")
  });
});











bp.registerBThread("devoxx",
function(){
  bp.sync({waitFor:bp.Event("hello")});
  bp.sync({request:bp.Event("Devoxx"),
             block:bp.Event("world")});
});
