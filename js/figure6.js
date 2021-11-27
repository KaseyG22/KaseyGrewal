var bridge6 = document.getElementById("figure6"),
bridgeCanvas6 = bridge6.getContext('2d'),
brushRadius6 = (bridge6.width / 100) * 5,
img6 = new Image();

if (brushRadius6 < 50) { brushRadius6 = 50 }

img6.onload = function(){
	bridgeCanvas6.drawImage(img6, 0, 0, bridge6.width, bridge6.height);
}
img6.loc = 'pics/';
img6.filename = 'VC1.jpg';
img6.src = img6.loc + img6.filename;

function detectLeftButton6(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos6(xRef, yRef) {
	var bridgeRect6 = bridge6.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect6.left)/(bridgeRect6.right-bridgeRect6.left)*bridge6.width),
	  y: Math.floor((yRef-bridgeRect6.top)/(bridgeRect6.bottom-bridgeRect6.top)*bridge6.height)
    };
}

function drawDot6(mouseX,mouseY){
	bridgeCanvas6.beginPath();
    bridgeCanvas6.arc(mouseX, mouseY, brushRadius6, 0, 2*Math.PI, true);
    bridgeCanvas6.fillStyle = '#000';
    bridgeCanvas6.globalCompositeOperation = "destination-out";
    bridgeCanvas6.fill();
}

bridge6.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos6(e.clientX, e.clientY);
  var leftBut = detectLeftButton6(e);
  if (leftBut == 1) {
		drawDot6(brushPos.x, brushPos.y);
  }
}, false);

bridge6.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos6(touch.pageX, touch.pageY);
        drawDot6(brushPos.x, brushPos.y);
    }
}, false);
