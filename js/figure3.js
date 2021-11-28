var bridge3 = document.getElementById("figure3"),
bridgeCanvas3 = bridge3.getContext('2d'),
brushRadius3 = (bridge3.width / 100) * 5,
img3 = new Image();

if (brushRadius3 < 50) { brushRadius3 = 50 }

img3.onload = function(){
	bridgeCanvas3.drawImage(img3, 0, 0, bridge3.width, bridge3.height);
}
img3.loc = 'pics/';
img3.filename = 'AS1.jpg';
img3.src = img3.loc + img3.filename;

function detectLeftButton3(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos3(xRef, yRef) {
	var bridgeRect3 = bridge3.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect3.left)/(bridgeRect3.right-bridgeRect3.left)*bridge3.width),
	  y: Math.floor((yRef-bridgeRect3.top)/(bridgeRect3.bottom-bridgeRect3.top)*bridge3.height)
    };
}

function drawDot3(mouseX,mouseY){
	bridgeCanvas3.beginPath();
    bridgeCanvas3.arc(mouseX, mouseY, brushRadius3, 0, 2*Math.PI, true);
    bridgeCanvas3.fillStyle = '#000';
    bridgeCanvas3.globalCompositeOperation = "destination-out";
    bridgeCanvas3.fill();
}

bridge3.addEventListener("mousemove", function(e) {
	var brushPos3 = getBrushPos3(e.clientX, e.clientY);
  var leftBut3 = detectLeftButton3(e);
  if (leftBut3 == 1) {
		drawDot3(brushPos3.x, brushPos3.y);
  }
}, false);

bridge3.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch3 = e.targetTouches[0];
    if (touch3) {
    var brushPos3 = getBrushPos3(touch3.pageX, touch3.pageY);
        drawDot3(brushPos3.x, brushPos3.y);
    }
}, false);
