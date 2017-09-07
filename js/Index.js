$(document).ready(function(e) {


	
	
$('.xcb_mask').hide();	
$('.czh_header_right_box').children('a').hover(function(){
		$(this).parent('.czh_header_right_box').css('background','-webkit-gradient(linear, 0% 0%, 0% 100%,from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0)))');
	},function(){
		$(this).parent('.czh_header_right_box').css('background','-webkit-gradient(linear, 0% 0%, 0% 100%,from(rgba(0,0,0,0.0)), to(rgba(0,0,0,0)))');
	});
    start();
});


function start() {
    window.roll_way = 0;
    window.pause = 0;
    window.pos = 0;
	window.lock_t=1;
	window.xc_flag=0;
	window.ship_lock=1;
    setInterval(czh_roll,1000);
}

	function xcb_f1(){
				$('.xcb_img_box').css({left:"-2%"});
			$('xcb_left').show();
		$('.xcb_right').show();
	
		$('.czh_header').css({opacity:0.6,background:'-webkit-gradient(linear, 0% 0%, 0% 100%,from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0)))'});
		$('.czh_header_right_box a').css({color:"#000"});
			$('.login').css({color:"rgba(0,0,0,1.00)"});
			
		}
	function xcb_f2(){
		$('.czh_header').css({opacity:1,background:'-webkit-gradient(linear, 0% 0%, 0% 100%,from(rgba(0,0,0,0.0)), to(rgba(0,0,0,0)))'});
		$('.czh_header_right_box a').css({color:"rgba(0,0,0,1.00)"});
		$('.login').css({color:"#fff"});
	}
function ship_stop(){

		 $('.xcb_ship').css('animationPlayState','paused');
	ship_flag=0;
	
	 }
	
	
function czh_roll() { 
	
	if(lock_t==1){
		
	
    if (pause == 0) {
        pause = 1;
		 setTimeout(xcb_stop,1000);
      
        if (roll_way > 0) {
			$('.czh_body_big').css({transition:'top 1s' });
            pos--;
			if(pos==0)
				{
					xcb_f2();
				}
            if (pos == -1) {
                pos = 0;
            }
            var qwe = pos * -100 + 'vh';
            $('.czh_body_big').css('top', qwe);
			
        } else if (roll_way < 0) {
		 pos++;
	     xc_time_flag=0;
		$('.xcb_font_1_box').remove();
		
				
           
			if(pos==1){
				xcb_f1();
			
	
				
			}  
            if (pos == 4) {
				$('.xcb_mask').show(500);
		     setTimeout(function(){
				  
				 	$('.xcb_mask').hide(1000);
				 
			 },1000)
                pos = 3;
            }
			
			if(pos==ship_lock){
				$('.czh_body_big').css({transition:'top 3s' });
				$('.xcb_ship').css({animationPlayState:'running'});
			    ship_flag=1;
			setTimeout(ship_stop,2000);
			   
				ship_lock++;
			}
			else{
				$('.czh_body_big').css({transition:'top 1s' });
			}
			
            var qwe = pos * -100 + 'vh';
            $('.czh_body_big').css('top', qwe);
        }
		
       
    }
	}
	
	
		
	    $('.xcb_shipleft').css({transition:"all "+pos+2+"s"})
		$('.xcb_'+(pos+1)).addClass('xcb_shipleft');
    //setTimeout("czh_roll()", 1200);
}
function xcb_stop(){
  pause = 0;
roll_way = 0;
}
var scrollFunc = function(e) {
    e = e || window.event;
    if (e.wheelDelta) {
        roll_way = e.wheelDelta;
    } else if (e.detail) {
        roll_way = e.detail;
        alert(roll_way);
    }
}
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome 

//roll_way_滚动界面

$(document).ready(function(e) {
    $('.czh_button_1_fudong').children('span').eq(0).hover(function(){
		$('.czh_button_1_fudong').css({transform:'perspective(400px) rotateY(20deg)'});	
		$(this).css('font-weight','bold');
	},function(){
		$('.czh_button_1_fudong').css({transform:'perspective(0px) rotateY(0deg)'});	
		$('.czh_button_1_fudong').children('span').css('font-weight','100');
	});
	$('.czh_button_1_fudong').children('span').eq(1).hover(function(){
		$('.czh_button_1_fudong').css({transform:'perspective(400px) rotateY(-20deg)'});		
		$(this).css('font-weight','bold');
	},function(){
		$('.czh_button_1_fudong').css({transform:'perspective(0px) rotateY(0deg)'});
		$('.czh_button_1_fudong').children('span').css('font-weight','100');
	});
	
	$('.czh_button_jiantou_xia').click(function(e) {
		$(this).hide();
		setTimeout(function(){$('.czh_button_jiantou_xia').show();},500);
        //pos++;
		pause = 0;
		roll_way=-120;
		czh_roll();
    });
	$('.czh_button_jiantou_shang').click(function(e) {
				$(this).hide();
		setTimeout(function(){$('.czh_button_jiantou_shang').show();},500);
        //pos++;
		pause = 0;
		roll_way=120;
		czh_roll();
    });
	
	    var c = 2;
    $('.xcb_img_box').eq(2).css({
        opacity: "1"
    }).siblings().css({
        opacity: "0.6"
    });
	 $('li').eq(0).siblings().children().hide();
    $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});
    $('.xcb_img_box').eq(c).css({
        opacity: "1",
        boxShadow: "10px 10px 5px #888888"
    }).siblings().css({
        opacity: "0.6",
        boxShadow: "0px 0px 0px #fff"
    });
	 $('li').click(function() {
        c = $(this).index();
        $('.xcb_box').css({
            left: ( - 10 - 44
			 * (c - 1)) + "%"
        });
        $('.xcb_img_box').eq(c).css({
            opacity: "1",
            boxShadow: "10px 10px 5px #888888"
        }).siblings().css({
            opacity: "0.6",
            boxShadow: "0px 0px 0px #fff"
        }); 
		
        $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});

    });
    $('.xcb_img_box').click(function() {
        var t = $(this).index();
if(t-c==1){
			lock_t=0;
			$('.czh_body1').css({left:"0px",opacity:"1"});
	$('.czh_body').css({opacity:"0"});
	clearInterval("t");
		}
        if (t - c == 2) {
            c++;
            $('.xcb_box').css({
                left: ( - 10 - 44 * (c - 1)) + "%"
            });

            $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});
            $('.xcb_img_box').eq(c).css({
                opacity: "1",
                boxShadow: "10px 10px 5px #888888"
            }).siblings().css({
                opacity: "0.6",
                boxShadow: "0px 0px 0px #fff"
            });
        }
		
        if (t == c) {
            c--;
            $('.xcb_box').css({
                left: ( - 10 - 44 * (c - 1)) + "%"
            });

           $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});
            $('.xcb_img_box').eq(c).css({
                opacity: "1",
                boxShadow: "10px 10px 5px #888888"
            }).siblings().css({
                opacity: "0.6",
                boxShadow: "0px 0px 0px #fff"
            });
        }

    });
    $('.xcb_left').click(function() {
        c = 2;
        $('.xcb_box').css({
            left: ( - 10 - 44 * (c - 1)) + "%"
        });
        $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});
        $('.xcb_img_box').eq(c).css({
            opacity: "1",
            boxShadow: "10px 10px 5px #888888"
        }).siblings().css({
            opacity: "0.6",
            boxShadow: "0px 0px 0px #fff"
        });
    });
    $('.xcb_right').click(function() {
        c = 2;
        $('.xcb_box').css({
            left: ( - 10 - 44 * (c - 1)) + "%"
        });
        $('.circle_bot').css({left: (91.5+45*(c-2))+"px"});
        $('.xcb_img_box').eq(c).css({
            opacity: "1",
            boxShadow: "10px 10px 5px #888888"
        }).siblings().css({
            opacity: "0.6",
            boxShadow: "0px 0px 0px #fff"
        });
    });
	
		var czh_c=-1;
		window.lunbo = 0;
		$('.czh_lunbo_box').eq(0).css({opacity:"1"}).siblings().css({opacity:"0.5"});
		$('.czh_right_Lunbo').css("top","26%"); 
		$('.czh_lunbo_box').click(function(){
					
			lunbo=$(this).index();
			$('.czh_lunbo_box').eq(lunbo).css({opacity:"1"}).siblings().css({opacity:"0.5"});
		
			if(lunbo==czh_c)
				{  if(czh_c==0){
					czh_c=0;
				}
					var qwe = 26-lunbo*51;
			qwe = qwe+"%";
			$('.czh_right_Lunbo').css("top",qwe); 
					czh_c--;
				
					
				}
			if(lunbo-czh_c==2)
				{
					if(czh_c!=4){
						var qwe = 26 -lunbo*51;
			qwe = qwe+"%";
			$('.czh_right_Lunbo').css("top",qwe);
					czh_c++;
				
					}
					else{
						czh_c=4;
					}
					
				}
		});
			$('xcb_left').hide();
		$('.xcb_right').hide();
		$('.xcb_img_box').css({left:"3000px"});
	   
		
		
		$('.czh_back').click(function(){
			$('.czh_body1').css({left:"100%",opacity:"0"})
			$('.czh_body').css({opacity:"1"});
			lock_t=1;
			roll_way=0;
		});
	
	
	
	
	
		
	
});
