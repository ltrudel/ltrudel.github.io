function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    
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