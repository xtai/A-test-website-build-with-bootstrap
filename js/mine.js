
//Written by Xiaoyu Tai 2013.3.19
//Only use for this website?

//back to top function
$(document).ready(function(){
  $('#backt').hide();
  $(function () {
    $(window).scroll(function(){
      if ($(window).scrollTop()>300){
        $('#backt').css({'bottom':'3px'});
        $('#backt').fadeIn(150);
      }else{
        $('#backt').fadeOut(150);
      }
    });
  });
});