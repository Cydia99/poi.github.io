$(document).ready(function(){
	$('.img_effect').mousemove(function(e){
		var x = e.pageX - $(this).offset().left;
	var y = e.pageY - $(this).offset().top;
	
	var px = x/$(this).width(), py = y/$(this).height();
	var xx = -20 + (40*px), yy = 20 - (40*py);
	console.log(yy);
    	TweenMax.to($(this), 0.5, {rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
	});
	
	$('.project-hover ').mouseleave(function(){
	
		TweenMax.to($('.img_effect'), 0.5, {rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
	$('.img_effect').css({transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"});
	});
	var cc;
	function scale(){
		cc = Math.random()*10;
	$('.img_lunbo').animate({
		width:"+="+cc+"%",
		left:"-="+cc+"%",
		height:"+="+cc+"%",
		top:"-="+cc+"%",
	},5000,function(){
		$('.img_lunbo').animate({
		width:"-="+cc+"%",
		left:"+="+cc+"%",
		height:"-="+cc+"%",
		top:"+="+cc+"%",
	},5000,function(){scale();});
	});	
	}
	//scale();
	var num = 5;
	var count = 0;
	var dir = 1;
	function lunbo(){
		setInterval(function(){
		$('.lunbo_big').css({left:(-count*100)+"%"});
			count = count+dir;
		if(count==4)
			{
				dir = -1;
			}
		if(count==0)
			{
				dir = 1;
			}
		},3000);
		
	}
	lunbo();
});