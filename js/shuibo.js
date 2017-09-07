	$(document).ready(function(){
		
    window.bolang_flag=1;
    var Canvas,ctx;
	var vertexes = [];
	var diffPt = [];var autoDiff = 1000;
	var verNum = 250;
	var CanvasW = window.innerWidth;
	var xcb_shadow=0;
	var addListener = function( e, str, func ) {
		if( e.addEventListener ) {
			e.addEventListener( str, func, false );
		}else if( e.attachEvent ) {
			e.attachEvent( "on" + str, func );
		}else {
			
		}
	};
	
	addListener( window, "load", init );
	
	function resize(){

			CanvasW = document.getElementsByClassName('container_1').item(0).offsetWidth+100;

			
		    
			initCanvas(CanvasW,window.innerHeight);
			var cW = Canvas.width;
			var cH = Canvas.height;
			for(var i = 0;i < verNum;i++)
				vertexes[i] = new Vertex(cW / (verNum -1) * i , cH / 2,cH/2);
			initDiffPt();
		var win_3 = window.innerWidth/3;

	}
	function init(){
		resize();
		var FPS =30;
		var interval = 1000 / FPS >> 0;
		var timer = setInterval( update, interval );
		addListener(window,"resize",resize);
		
	
	}
	

	
	function initDiffPt(){
		for(var i=0;i<verNum;i++)
		   diffPt[i]= 0;
	}
	var xx = 250;
	var dd = 15;
	
	function update(){

		ctx.clearRect(0, 0, Canvas.width, Canvas.height);
		autoDiff -= autoDiff*0.9;
		diffPt[xx] = autoDiff;

			for(var i=xx-1;i>0;i--)
				{
				    var d = xx-i;
					if(d > dd)d=dd;
					diffPt[i] -= (diffPt[i]-diffPt[i+1])*(1-0.01*d);
				}

			for(var i=xx+1;i<verNum;i++)
				{
				    var d = i-xx;
					if(d > dd)d=dd;
					diffPt[i] -= (diffPt[i]-diffPt[i-1])*(1-0.01*d);
				}

		for(var i = 0;i < vertexes.length;i++){
			vertexes[i].updateY(diffPt[i]);
		}

		draw();
		
	}
	var color1="#fff";
	var color2 = "#367aec";
	var xc_pause=0;
	var shuibo_flag=0;
	function draw(){
   if(bolang_flag==1){
	   ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color1;
		ctx.lineTo(vertexes[0].x,vertexes[0].y);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x,vertexes[i].y-300);
		}
		ctx.lineTo(Canvas.width,9000);
		ctx.lineTo(0,9000);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color2;
		ctx.lineTo(vertexes[0].x+15,vertexes[0].y+5);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x+15,vertexes[i].y-250);
		}
		ctx.lineTo(Canvas.width,window.innerHeight);
		ctx.lineTo(0,window.innerHeight);
		ctx.fill();
		
   }
		else{
			
		}
			
       
		
	}
	
	function initCanvas(width,height){
		
			Canvas = document.getElementById("Canvas");
		
		
		Canvas.width = width;
		Canvas.height = height;
		ctx = Canvas.getContext("2d");
	}
		
	function Vertex(x,y,baseY){
		this.baseY = baseY;
		this.x = x;
		this.y = y;
		this.vy = 0.2;
		this.targetY = 0.2;
		this.friction = 0.05;
		this.deceleration = 0.99;
	}
		
	Vertex.prototype.updateY = function(diffVal){
		this.targetY = diffVal + this.baseY;
		this.vy += this.targetY - this.y
		this.y += this.vy * this.friction;
		this.vy *= this.deceleration;
	}
	var blue = function(){
		color1 = "#6ca0f6";
		color2 = "#fff";
	}
	
		var flow=function(){                //水波爆炸效果
			var x=Math.random()*500;
			autoDiff = 500;
					if(x<Canvas.width-2){
						xx = 1 + Math.floor((verNum - 2) * x / Canvas.width);
						
						diffPt[xx] = autoDiff;
	}
	
	};
	setInterval(function(){
		var c=300;
		flow();
         
		
		
	},1000);
	
	
		});
