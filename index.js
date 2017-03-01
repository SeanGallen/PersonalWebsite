var startIt = function() {
  var pageHolder = document.getElementById('pageHolder');
  var screen = window.screen;
  var pageWidth = pageHolder.width = screen.width;
  var pageHeight = pageHolder.height = screen.height;
  var pageArray = Array(256).join(1).split('');
  var context = pageHolder.getContext('2d');

  setInterval(function(){
    context.fillStyle='rgba(0,0,0,0.05)';
    context.fillRect(0,0,pageWidth,pageHeight);
    context.fillStyle='rgba(0,255,0,1)';
    pageArray = pageArray.map(function(v,i) {
      randomNum = Math.random();
      context.fillText(String.fromCharCode(Math.floor(2720+randomNum*33)),i*10,v);
      v+=10;
      return v>768+randomNum*1e4?0:v
    }) },33)
}
