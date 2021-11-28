var bridge4 = document.getElementById("figure4"),
bridgeCanvas4 = bridge4.getContext('2d'),
brushRadius4 = (bridge4.width / 100) * 5,
img4 = new Image();

if (brushRadius4 < 50) { brushRadius4 = 50 }

img4.onload = function(){
	bridgeCanvas4.drawImage(img4, 0, 0, bridge4.width, bridge4.height);
}
img4.loc = 'pics/';
img4.filename = 'L1.jpg';
img4.src = img4.loc + img4.filename;

function detectLeftButton4(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos4(xRef, yRef) {
	var bridgeRect4 = bridge4.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect4.left)/(bridgeRect4.right-bridgeRect4.left)*bridge4.width),
	  y: Math.floor((yRef-bridgeRect4.top)/(bridgeRect4.bottom-bridgeRect4.top)*bridge4.height)
    };
}

function drawDot4(mouseX,mouseY){
	bridgeCanvas4.beginPath();
    bridgeCanvas4.arc(mouseX, mouseY, brushRadius4, 0, 2*Math.PI, true);
    bridgeCanvas4.fillStyle = '#000';
    bridgeCanvas4.globalCompositeOperation = "destination-out";
    bridgeCanvas4.fill();
}

bridge4.addEventListener("mousemove", function(e) {
	var brushPos4 = getBrushPos4(e.clientX, e.clientY);
  var leftBut4 = detectLeftButton4(e);
  if (leftBut4 == 1) {
		drawDot4(brushPos4.x, brushPos4.y);
  }
}, false);

bridge4.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch4 = e.targetTouches[0];
    if (touch4) {
    var brushPos4 = getBrushPos4(touch4.pageX, touch4.pageY);
        drawDot4(brushPos4.x, brushPos4.y);
    }
}, false);
