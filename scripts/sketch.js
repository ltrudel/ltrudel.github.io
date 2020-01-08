/// <reference path="./p5.global-mode.d.ts" />

function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){

    background(200);
    /*
    strokeWeight(0);
    stroke(255)
    fill(0, 0, 100);
    rect(00,00,windowWidth/2,windowHeight/2);

    fill(0, 0, 100);
    rect(windowWidth/2,windowHeight/2, windowWidth, windowHeight);

    strokeWeight(200);
    stroke(200 ,40, 40);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    line(0, windowHeight/2, windowWidth, windowHeight/2);
    line(0, 0, windowWidth, windowHeight);
    line(windowWidth, 0, 0, windowHeight);

    strokeWeight(0);
    fill(255);
    beginShape();
    vertex(windowWidth/2, windowHeight/2-windowHeight/4);
    vertex(windowWidth/2+windowWidth/4, windowHeight/2);
    vertex(windowWidth/2, windowHeight/2+windowHeight/4);
    vertex(windowWidth/2-windowWidth/4, windowHeight/2);
    endShape(CLOSE);

    fill(200, 40, 40);
    ellipse(windowWidth/2, windowHeight/2, 300, 300);
    */

    var size = 100;

    for (let i = -2; i < windowWidth/size; i++) {
        for (let j = -2; j < windowHeight/size; j++) {
            drawGeometry(i,j, size)
        }
        
    }
}

function drawGeometry(rownum, colnum, size)
{
    var med = size * 2;
    var medh = size * 3;
    var large = size * 4;

    var row = size * 2 * rownum;
    var col = size * 2 * colnum;

    if(colnum % 2 == 0){ row += size}

    fill(255)
    beginShape();
    vertex(medh + row,size + col);
    vertex(large + row,med + col);
    vertex(medh + row,medh + col);
    vertex(med + row,med + col);
    endShape(CLOSE)
    fill(50)
    beginShape();
    vertex(large + row,med + col);
    vertex(large + row,medh + col);
    vertex(medh + row,large + col);
    vertex(medh + row,medh + col);
    endShape(CLOSE)
    fill(0)
    beginShape();
    vertex(med + row,med + col);
    vertex(medh + row,medh + col);
    vertex(medh + row,large + col);
    vertex(med + row,medh + col);
    endShape(CLOSE)
}