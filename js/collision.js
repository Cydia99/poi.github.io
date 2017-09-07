function momFruitsCollision(){
    //var lastType = "";
    if(!data.gameOver){
        for(var i=0; i<fruit.num; i++){
            if(fruit.alive[i]){
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if(l < 900){
                    
                    data.fruitNum++; 
                    mom.bigBodyCount++;
                    
                    if(mom.bigBodyCount > 7){
                        mom.bigBodyCount = 7;
                    }  

                    if(fruit.fruitType[i] == "blue"){
                        data.double = 4;
                    }
					if(fruit.fruitType[i] == "red"){
                        baby.livetime=900;
						setTimeout(function(){
							baby.livetime=300;
						},5000);
                    }
					if(fruit.fruitType[i] == "green"){
                        mom.speed=0.93;
						setTimeout(function(){
						mom.speed=0.98;
						},5000);
                    }
				    if(fruit.fruitType[i] == "purple"){
                      zd_num--;
						if(zd_num<0)
							{
							zd_num=0;
							}
						$('.xcb_zidan').children().eq(4-zd_num).css({background:"rgba(255,255,255,0.5)"});
                    }
                    //console.log(wave);
                    wave.born(fruit.x[i], fruit.y[i]);
                    fruit.dead(i);
                }
                //lastType = fruit.fruitType[i];

            }
        }
    }    
}

//feed
function momBabyCollision(){
    if(!data.gameOver){
        if(data.fruitNum > 0){        
            var l = calLength2(mom.x, mom.y, baby.x, baby.y);
            if(l < 900){
                //console.log(data.fruitNum);
                baby.babyBodyCount = 0;
                //data -> 0
                //data.reset();
                mom.bigBodyCount = 4;
                data.addScore();
                data.reset();
                
                halo.born(baby.x, baby.y);
            }
        }
    }
    
    
}

function eatluren(){
	if(!data.gameover){
		var l = calLength2(luren.x, luren.y, baby.x, baby.y);
		if(l<900)
			{
				console.log("over");
				data.gameOver = true;
			}
		
		
		
	}
	
}
var beat=false;
function beatluren(){
	
	if(!data.gameover){
		for(var i=0;i<10;i++)
			{  
				var l = calLength2(luren.x+15, luren.y, zd_x[i], zd_y[i]);
				if(l<1600)
					{
					beat=true;
						luren_point_x=0;
						luren_point_y=0;
					for(var i=0;i<10;i++)
	{
	    zd_x[i]=-500;
		zd_y[i]=-500;
		aim_x[i]=-1000;
		aim_y[i]=-1000;

	}
						
						setTimeout(function(){
							beat=false;
						},5000);
					}
			}
		
		
		
	}
	
}


