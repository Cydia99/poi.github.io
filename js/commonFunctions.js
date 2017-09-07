window.requestAnimFrame = (function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();


function calLength2(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}


function randomColor() {
	var col = [0, 1, 2];
	col[0] = Math.random() * 100 + 155;
	col[0] = col[0].toFixed();
	col[1] = Math.random() * 100 + 155;
	col[1] = col[1].toFixed();
	col[2] = Math.random() * 100 + 155;
	col[2] = col[2].toFixed();
	var num = Math.floor(Math.random() * 3);
	col[num] = 0;
	return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
}


function lerpAngle(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}

function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;

}

function lerpDistance_1(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta;

}
var ran_x = 0;
var ran_y = 0;
var pre = 0;
var eatfood = 1;
/*function setRandom(a){
	setTimeout(function(){
		pre=mx;
	},10);
	
	 var c=0;
		 var d=0;
	setTimeout(function(){
		c=Math.random()*can1.width+80;
		d=Math.random()*(can1.height-200);
	},1000);
    function getbl_Length(){
		this.length=calLength2(baby.x, baby.y, luren.x, luren.y);
		return this.length;
	}	
	function getmb_Length(){
		return this.length=calLength2(mom.x, mom.y, baby.x, baby.y);
	}
	
	     if((mx>baby.x&&(mx-pre)>0)||(mx<baby&&(mx-pre)<0||mx-pre==0))
		{
			eatfood=1;
			console.log("true");
		}
	else{
		eatfood=0;
		console.log("false");
	}
		if(eatfood==0||l<l2||)	
		{
		 c=-c;
		 d=-d;
		}
	console.log(eatfood);
   
	function check(){
		
		if(getbl_Length()<getmb_Length()&&getmb_Length()>10000)
			{   
			c=baby.x;
			d=baby.y;
				
			}
		else{
			
		}
		
		
		console.log(this.top_0);
		return this.top_0;
		
	}
	check();
	if(a=='x'){
		return c;
	}
	else if(a=='y'){
		
		return d;
	}
}*/
var flag = 1;
var flag2 = 1;
var flag_1 = 1;
var flag_2 = 1;
var c1 = 0,
	di = 0;
var c = 0,
	d = 0;

function setRandom(a) {
	this.time = 0;
	this.time = setTimeout(function () {
		if (flag == 1) {
			if (play) {
				do {
					c = Math.random() * can1.width + 80;

				}
				while (c > (baby.x + 40) && c < (baby.x - 40));
				do {
					d = Math.random() * (can1.height - 200);
				}
				while (d > baby.y + 20 && d < baby.y - 20);

				flag = 0;
			}

			setTimeout(function () {
				flag = 1;
			}, 1000);
		}

	}, 1000);
	if (a == 'x') {
		return c;
	}
	if (a == 'y') {
		return d;
	}

}
var jincheng = 1;
setInterval(function () {


	ran_x = setRandom('x');
	ran_y = setRandom('y');
	linkAI();

}, 30);


function linkAI() {
	function baby_luren_Length() {
		if (play) {
			this.length = calLength2(baby.x, baby.y, luren.x, luren.y);

			return this.length;
		}

	}

	function baby_mom_Length() {
		if (play) {
			this.length = calLength2(mom.x, mom.y, baby.x, baby.y);

			return this.length;
		}

	}

	function mom_luren_Length() {
		if (play) {
			this.length = calLength2(mom.x, mom.y, luren.x, luren.y);

			return this.length;
		}

	}
	if (baby_mom_Length() > 20000) {

		ran_x = baby.x;
		ran_y = baby.y;

	} else {

		if (mom_luren_Length() < 20000) {
			if (flag2 == 1) {
				flag2 = 0;
				if (luren.x < baby.x) {
					clearTimeout(setRandom.time);
					ran_x = baby.x - Math.random() * 3000;
					ran_y = baby.y - Math.random() * 3000;
				} else {
					clearTimeout(setRandom.time);
					ran_x = baby.x + Math.random() * 3000;
					ran_y = baby.y + Math.random() * 3000;
				}
			}

			setTimeout(function () {
				flag2 = 1;
			}, 500);
		}
	}
	if (mom_luren_Length() < 2000) {
		if (luren.x < baby.x) {
			ran_x = baby.x - Math.random() * 3000;
			ran_y = baby.y - Math.random() * 3000;
		} else {
			ran_x = baby.x + Math.random() * 3000;
			ran_y = baby.y + Math.random() * 3000;
		}

	}


}

function lurenmove() {
	if (beat) {
		luren.x = 0;
		luren.y = 0;
	} else {
		if (luren_point_x > ran_x) {
			luren_point_x -= 5;
		}
		if (luren_point_x < ran_x) {
			luren_point_x += 5;
		}
		if (luren_point_y > ran_y) {
			luren_point_y -= 5;
		}
		if (luren_point_y < ran_y) {
			luren_point_y += 5;
		}
	}


}

var zd_num = 0;
var zd_first = 2;
var zd_x = [];
var zd_y = [];
var aim_x = [];
var aim_y = [];
var qw_x = [];
var qw_y = [];
var zd_tota = 5;
var time_1;
for (var i = 0; i < 10; i++) {
	zd_x[i] = -500;
	zd_y[i] = -500;
	aim_x[i] = -1000;
	aim_y[i] = -1000;
	qw_x[i] = 0;
	qw_y[i] = 0;
}
var cc = document.getElementsByClassName("all_bg").item(0);
var c1 = document.getElementsByClassName("game_1_play").item(0);
c1.addEventListener("click", startPlay, false);

play = false;

function startPlay(e) {
	clearTimeout(timer);
	changetime();
	play = true;
	$('.game_1_play').css({
		zIndex: 0
	});

	c1.removeEventListener('click', startPlay, false);
	setTimeout(function () {

		cc.addEventListener('click', momAttcak, false);
	}, 100);

}




function momAttcak() {
	if (!pause) {
		if (play) {
			if (zd_num < 5) {
				$('.xcb_zidan').children().eq(4 - zd_num).css({
					background: "rgba(0,0,0,0)"
				});
				aim_x[zd_num] = mx;
				aim_y[zd_num] = my;
				qw_x[zd_num] = mom.x - 5;
				qw_y[zd_num] = mom.y - 15;
				zd_x[zd_num] = mom.x - 5;
				zd_y[zd_num] = mom.y - 15;
			}



			if (zd_num > 4) {
				zd_num = 4;

			}

			zd_num++;

		}

	}
}
setInterval(function () {
	for (var i = 0; i < zd_num; i++) {
		zd_x[i] = zidan_1(zd_x[i], zd_y[i], aim_x[i], aim_y[i], (aim_x[i] - qw_x[i]) / 20, 'x');
		zd_y[i] = zidan_1(zd_x[i], zd_y[i], aim_x[i], aim_y[i], (aim_y[i] - qw_y[i]) / 20, 'y');

		/*	if(zd_x[i]<aim_x[i]+20&&zd_x[i]>aim_x[i]-20&&zd_y[i]>aim_y[i]-20&&zd_y[i]<aim_y[i]+20)
				{  
					zd_remove(i);
				}*/
	}

}, 17);
setInterval(function () {
	if (zd_x[i] > 2000 || zd_x[i] < 0 || zd_y[i] > 2000 || zd_y[i] < 0) {
		zd_x[i] = 0;
		zd_y[i] = 0;
	}
}, 100);
var k = 1;

function zidan_1(xx, yy, X, Y, h, a) {
	var YY = yy + h;
	var XX = xx + h;

	console.log(YY + " " + XX);
	if (a == 'x') {
		return XX;
	}
	if (a == 'y') {
		return YY;
	}
}
window.last_said = 0;
window.deadtime = 120;
window.timer = 0;

function changetime() {


	timer = setTimeout(function () {
		if (data.gameOver || pause) {

		} else {
			deadtime--;
		}
		var min = parseInt(deadtime / 60);
		var second = parseInt(deadtime % 60);
		$('.xcb_time').text("剩余时间:" + min + ":" + second);
		if (deadtime == 0) {
			data.gameOver = true;
			last_said = 1;
		} else {
			changetime();
		}

	}, 1000);

}

function inOboundary(arrX, arrY, l, r, t, b) { //在l r t b范围内的检测
	return arrX > l && arrX < r && arrY > t && arrY < b;
}
var time_1;
var flag_4 = 1;



function rgbColor(r, g, b) {
	r = Math.round(r * 256);
	g = Math.round(g * 256);
	b = Math.round(b * 256);
	return "rgba(" + r + "," + g + "," + b + ",1)";
}

function rgbNum(r, g, b) {
	r = Math.round(r * 256);
	g = Math.round(g * 256);
	b = Math.round(b * 256);
	return "rgba(" + r + "," + g + "," + b;
}

function rnd(m) {
	var n = m || 1;
	return Math.random() * n;
}

function rateRandom(m, n) {
	var sum = 0;
	for (var i = 1; i < (n - m); i++) {
		sum += i;

	}

	var ran = Math.random() * sum;

	for (var i = 1; i < (n - m); i++) {
		ran -= i;
		if (ran < 0) {
			return i - 1 + m;
		}
	}
}

function distance(x1, y1, x2, y2, l) {
	var x = Math.abs(x1 - x2);
	var y = Math.abs(y1 - y2);
	if (x < l && y < l) {
		return true;
	}
	return false;
}

function AABBbox(object1, w1, h1, object2, w2, h2, overlap) {
	A1 = object1.x + overlap;
	B1 = object1.x + w1 - overlap;
	C1 = object1.y + overlap;
	D1 = object1.y + h1 - overlap;

	A2 = object2.x + overlap;
	B2 = object2.x + w2 - overlap;
	C2 = object2.y + overlap;
	D2 = object2.y + h2 - overlap;

	if (A1 > B2 || B1 < A2 || C1 > D2 || D1 < C2) return false;
	else return true;
}


function dis2(x, y, x0, y0) {
	var dx = x - x0;
	var dy = y - y0;
	return dx * dx + dy * dy;
}

function rndi2(m, n) {
	var a = Math.random() * (n - m) + m;
	return Math.floor(a);
}