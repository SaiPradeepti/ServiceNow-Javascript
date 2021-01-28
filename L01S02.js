//
// L01S02 - example server side script
//
var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while(gr.next()){
    gr.info(gr.getValue('number'));
}
