var bridge5 = document.getElementById("figure5"),
bridgeCanvas5 = bridge5.getContext('2d'),
brushRadius5 = (bridge5.width / 100) * 5,
img5 = new Image();

if (brushRadius5 < 50) { brushRadius5 = 50 }

img5.onload = function(){
	bridgeCanvas5.drawImage(img5, 0, 0, bridge5.width, bridge5.height);
}
img5.loc = 'pics/';
img5.filename = 'NL1.jpg';
img5.src = img5.loc + img5.filename;

function detectLeftButton5(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos5(xRef, yRef) {
	var bridgeRect5 = bridge5.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect5.left)/(bridgeRect5.right-bridgeRect5.left)*bridge5.width),
	  y: Math.floor((yRef-bridgeRect5.top)/(bridgeRect5.bottom-bridgeRect5.top)*bridge5.height)
    };
}

function drawDot5(mouseX,mouseY){
	bridgeCanvas5.beginPath();
    bridgeCanvas5.arc(mouseX, mouseY, brushRadius5, 0, 2*Math.PI, true);
    bridgeCanvas5.fillStyle = '#000';
    bridgeCanvas5.globalCompositeOperation = "destination-out";
    bridgeCanvas5.fill();
}

bridge5.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos5(e.clientX, e.clientY);
  var leftBut = detectLeftButton5(e);
  if (leftBut == 1) {
		drawDot5(brushPos.x, brushPos.y);
  }
}, false);

bridge5.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos5(touch.pageX, touch.pageY);
        drawDot5(brushPos.x, brushPos.y);
    }
}, false);
