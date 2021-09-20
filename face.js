function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    
//畫格線
    for(let i = 0; i <100; i++){
        let interval = i * 50;

        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
//格線結束
    
//畫四分之一線
    context.beginPath();
    context.moveTo(canvas.width / 2 , 0);
    context.lineTo(canvas.width / 2 ,  canvas.height);
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.strokeStyle='rgba(0,0,0,0.8)';
    context.stroke();
//四分之一線結束
    
    context.beginPath();
    context.strokeStyle='#E800FF';
    context.lineWidth=5;
    context.lineCap='round';
    for(let i = 0; i < 12; i++){
        context.moveTo(100 + (i *25), 220);
        context.lineTo(80 + (i *25), 245);
    }
    context.stroke();
    
//左上臉 底色
    context.beginPath();
    context.arc(225, 225, 200, 0, 2 * Math.PI);
    context.fillStyle='rgba(255,245,48,0.6)';
    context.fill();
    context.strokeStyle='black';
    context.lineWidth=5;
    //左瞳孔
    context.beginPath();
    context.moveTo(120, 130);
    context.lineTo(190, 170);
    context.lineTo(100, 200);
    context.stroke();
    //右瞳孔
    context.beginPath();
    context.arc(286, 164, 31, 0.875* Math.PI, 2.625 * Math.PI, false);
    context.fillStyle='black';
    context.fill();  
    //右眼眶
    context.beginPath();
    context.arc(300, 150, 50, 0, 2 * Math.PI);
    context.stroke();
    //嘴巴
    context.beginPath();    
    context.arc(225, 275, 100, 0, Math.PI);
    context.stroke();
    
//右上臉 底色
    context.beginPath();
    context.arc(675, 225, 200, 0, 2 * Math.PI);
    context.fillStyle='rgba(255,245,48,0.6)';
    context.fill();
    context.strokeStyle='blue';
    context.lineWidth=5;
    //左下眼
    context.beginPath();
    context.moveTo(650, 225);
    context.lineTo(575, 250);
    context.stroke();
    context.beginPath();
    context.moveTo(600, 190);
    context.lineTo(600, 230);
    context.stroke();
    context.beginPath();
    context.moveTo(750, 190);
    context.lineTo(750, 230);
    context.stroke();
    //右下眼
    context.beginPath();
    context.moveTo(700, 225);
    context.lineTo(775, 250);
    context.stroke();
    //左上眼
    context.beginPath();
    context.moveTo(650, 200);
    context.lineTo(550, 130);
    context.stroke();
    //右上眼
    context.beginPath();
    context.moveTo(700, 200);
    context.lineTo(800, 130);
    context.stroke();
    //嘴巴
    context.beginPath();    
    context.moveTo(575, 350);
    context.bezierCurveTo(650, 200, 700, 450, 775, 300);
    context.stroke();

//左下臉 底色
    let gradient = context.createRadialGradient(220, 643, 1, 225, 675, 45);
    gradient.addColorStop(0, '#FF6952');
    gradient.addColorStop(1, '#FAE353');    
    context.fillStyle = gradient;

    context.beginPath();
    context.arc(225, 675, 200, 0, 2 * Math.PI);
    context.strokeStyle='black';
    context.fill();
    //左瞳孔
    context.fillStyle='black';
    context.beginPath();
    context.arc(150, 580, 31, 1.375* Math.PI, 1.625 * Math.PI, true);
    context.fill();
    //右瞳孔
    context.beginPath();
    context.arc(310, 618, 31, 0.5* Math.PI,  0.25* Math.PI, false);
    context.fill();  
    //左眼框
    context.beginPath();
    context.arc(150, 600, 50, 0, 2 * Math.PI);
    context.stroke();
    //右眼眶
    context.beginPath();
    context.arc(300, 600, 50, 0, 2 * Math.PI);
    context.stroke();
    //嘴巴
    context.beginPath();    
    context.arc(225, 800, 100, 2 * Math.PI, Math.PI, true);
    context.stroke();
    //眼淚
    setInterval(drawTear , 7);
    let theClock = 0;
    function drawTear(){
        theClock++;
        let tearMoving = theClock % 150;
        context.lineWidth=2;
        context.clearRect(329, 644, 68, 130);
        context.fillStyle='#FAE353';
        context.fillRect(329, 644, 68, 130);
        
        context.beginPath();
        context.fillStyle='rgba(200,250,248)';
        context.arc(340 + tearMoving * 0.1, 655 + tearMoving / 6, 10, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.beginPath();
        context.arc(353 + tearMoving * 0.1, 680 + tearMoving / 5, 13, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.beginPath();
        context.arc(365 + tearMoving * 0.12, 710 + tearMoving / 4, 13, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

//右下臉 底色
    context.beginPath();
    context.arc(675, 675, 200, 0, 2 * Math.PI);
    context.fillStyle='rgba(255,245,48,0.6)';
    context.fill();
    //左瞳孔
    context.beginPath();
    context.arc(600, 580, 31, 1.375* Math.PI, 1.625 * Math.PI, true);
    context.fillStyle='black';
    context.fill();
    //右瞳孔
    context.beginPath();
    context.arc(750, 580, 31, 1.375* Math.PI, 1.625 * Math.PI, true);
    context.fill();  
    //左眼框
    context.beginPath();
    context.arc(600, 600, 50, 0, 2 * Math.PI);
    context.stroke();
    //右眼眶
    context.beginPath();
    context.arc(750, 600, 50, 0, 2 * Math.PI);
    context.stroke();
    //嘴巴
    context.beginPath();
    context.moveTo(550, 725);
    context.lineTo(800, 725);
    context.stroke();  
    context.beginPath();
    context.moveTo(552, 725.5);
    context.quadraticCurveTo(675, 930, 798, 725.5);
    context.stroke();
    context.beginPath();
    context.moveTo(613, 725);
    context.lineTo(613, 802);
    context.moveTo(676, 725);
    context.lineTo(676, 828);
    context.moveTo(739, 725);
    context.lineTo(739, 801);
    context.stroke();
}

window.addEventListener('load', doFirst);