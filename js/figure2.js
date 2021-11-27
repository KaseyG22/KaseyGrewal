var bridge2 = document.getElementById("figure2"),
bridgeCanvas2 = bridge2.getContext('2d'),
brushRadius2 = (bridge2.width / 100) * 5,
img2 = new Image();

if (brushRadius2 < 50) { brushRadius2 = 50 }

img2.onload = function(){
	bridgeCanvas2.drawImage(img2, 0, 0, bridge2.width, bridge2.height);
}
img2.loc = 'pics/';
img2.filename = 'AR1.jpg';
img2.src = img2.loc + img2.filename;

function detectLeftButton2(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos2(xRef, yRef) {
	var bridgeRect2 = bridge2.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect2.left)/(bridgeRect2.right-bridgeRect2.left)*bridge2.width),
	  y: Math.floor((yRef-bridgeRect2.top)/(bridgeRect2.bottom-bridgeRect2.top)*bridge2.height)
    };
}

function drawDot2(mouseX,mouseY){
	bridgeCanvas2.beginPath();
    bridgeCanvas2.arc(mouseX, mouseY, brushRadius2, 0, 2*Math.PI, true);
    bridgeCanvas2.fillStyle = '#000';
    bridgeCanvas2.globalCompositeOperation = "destination-out";
    bridgeCanvas2.fill();
}

bridge2.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos2(e.clientX, e.clientY);
  var leftBut = detectLeftButton2(e);
  if (leftBut == 1) {
		drawDot2(brushPos.x, brushPos.y);
  }
}, false);

bridge2.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos2(touch.pageX, touch.pageY);
        drawDot2(brushPos.x, brushPos.y);
    }
}, false);
