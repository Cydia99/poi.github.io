// JavaScript Document
/*$(document).ready(function(){
	$('.xcb_qipao').css({opacity:"0"});
	$('.xcb_qipao').hover(function(){
		$(this).css({opacity:"1"});
	},function(){
		$(this).css({opacity:"0"});
	})
});*/
   $(document).ready(function(){
		   $('.czh_point').hover(function(){
			   $(this).parents().children('.czh_word_left').css('opacity','0.6');
			   $(this).css('transform','scale(3,3)');
			   $(this).parents().children('.czh_word_right').css('left','166px');
			   //$(this).parents().children('.czh_word_right').css('font-size','43px');
		   },function(){
			   $(this).parents().children('.czh_word_left').css('opacity','0');
			   $(this).css('transform','scale(1,1)');
			   $(this).parents().children('.czh_word_right').css('left','156px');
			  // $(this).parents().children('.czh_word_right').css('font-size','16px');
		   });
	   });