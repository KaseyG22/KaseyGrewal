var bridge7 = document.getElementById("figure7"),
bridgeCanvas7 = bridge7.getContext('2d'),
brushRadius7 = (bridge7.width / 100) * 5,
img7 = new Image();

if (brushRadius7 < 50) { brushRadius7 = 50 }

img7.onload = function(){
	bridgeCanvas7.drawImage(img7, 0, 0, bridge7.width, bridge7.height);
}
img7.loc = 'pics/';
img7.filename = 'AZ1.jpg';
img7.src = img7.loc + img7.filename;

function detectLeftButton7(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos7(xRef, yRef) {
	var bridgeRect7 = bridge7.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect7.left)/(bridgeRect7.right-bridgeRect7.left)*bridge7.width),
	  y: Math.floor((yRef-bridgeRect7.top)/(bridgeRect7.bottom-bridgeRect7.top)*bridge7.height)
    };
}

function drawDot7(mouseX,mouseY){
	bridgeCanvas7.beginPath();
    bridgeCanvas7.arc(mouseX, mouseY, brushRadius7, 0, 2*Math.PI, true);
    bridgeCanvas7.fillStyle = '#000';
    bridgeCanvas7.globalCompositeOperation = "destination-out";
    bridgeCanvas7.fill();
}

bridge7.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos7(e.clientX, e.clientY);
  var leftBut = detectLeftButton7(e);
  if (leftBut == 1) {
		drawDot7(brushPos.x, brushPos.y);
  }
}, false);

bridge7.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos7(touch.pageX, touch.pageY);
        drawDot7(brushPos.x, brushPos.y);
    }
}, false);
