function drawBackground(){
    ctx2.drawImage(bg_image, 0, 0, canWidth, canHeight);
    
    ctx2.save();
    ctx2.globalAlpha = 0.7;
    ctx2.shadowBlur = 15;
    ctx2.shadowColor = "white";
	
    ctx2.restore();
    
}