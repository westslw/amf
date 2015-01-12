$(function(){
  var $h1 = $('.feat_photos>h1');
  var oldHtml = $h1.html();
  var timeout;
  var reset = function(){ $h1.html(oldHtml).css('top',''); };
  $('.feat_photos>div').hover(
    function(){
      clearTimeout(timeout);
      $this = $(this);
      $h1.html($this.data('tip')).css('top',$this.css('top')=='0px' ? '' : '100px');
    },
    function(){ timeout = setTimeout(reset,200); }
  );
});