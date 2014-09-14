$(function () {

    // Detect if the browser is IE or not.
    // If it is not IE, we assume that the browser is NS.
    var IE = document.all ? true : false

    // If NS -- that is, !IE -- then set up for mouse capture
    if (!IE) document.captureEvents(Event.MOUSEMOVE)

    // Set-up to use getMouseXY function onMouseMove
    document.onmousemove = getMouseXY;

    // Temporary variables to hold mouse x-y pos.s
    var tempX = 0;
    var tempY = 0;

    var objectArray = new Array();

    fillObjectArray();
    positionDivs();
    var windowWidth = $(window).width();

    function fillObjectArray() {
        var bgDiv = document.getElementById("bg");
        var bgX = 0; //position div from half width of the page
        var bgY = 0;
        var bgFactor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
        var bgArray = new Array();
        var bgWidth = windowWidth;
        bgArray.push(bgDiv, bgX, bgY, bgFactor, bgWidth);
        objectArray.push(bgArray);


        var pp1Div = document.getElementById("profilepic1");
        var pp1X = 18;
        var pp1Y = 0;
        var pp1Factor = -0.06;
        var pp1Array = new Array();
        var pp1Width = 300;
        pp1Array.push(pp1Div, pp1X, pp1Y, pp1Factor, pp1Width);
        objectArray.push(pp1Array);

        var pp2Div = document.getElementById("profilepic2");
        var pp2X = 18;
        var pp2Y = 0;
        var pp2Factor = -0.06;
        var pp2Width = 300;
        var pp2Array = new Array();
        pp2Array.push(pp2Div, pp2X, pp2Y, pp2Factor, pp2Width);
        objectArray.push(pp2Array);

        var pp3Div = document.getElementById("profilepic3");
        var pp3X = 18;
        var pp3Y = 0;
        var pp3Factor = -0.06;
        var pp3Width = 300;

        var pp3Array = new Array();
        pp3Array.push(pp3Div, pp3X, pp3Y, pp3Factor, pp3Width);
        objectArray.push(pp3Array);

        var pp4Div = document.getElementById("profilepic4");
        var pp4X = 18;
        var pp4Y = 0;
        var pp4Factor = -0.06;
        var pp4Width = 300;

        var pp4Array = new Array();
        pp4Array.push(pp4Div, pp4X, pp4Y, pp4Factor, pp4Width);
        objectArray.push(pp4Array);
    }

    // Main function to retrieve mouse x-y pos.s

    function getMouseXY(e) {
        if (IE) {
            // grab the x-y pos.s if browser is IE
            tempX = event.clientX + document.body.scrollLeft
            tempY = event.clientY + document.body.scrollTop
        }
        else {
            // grab the x-y pos.s if browser is NS
            tempX = e.pageX
            tempY = e.pageY
        }
        // catch possible negative values in NS4
        if (tempX < 0) { tempX = 0 }
        if (tempY < 0) { tempY = 0 }

        moveDiv(tempX);

        return true
    }

    function moveDiv(tempX) {
        for (var i = 0; i < objectArray.length; i++) {
            var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
            objectArray[i][0].style.left = (yourDivPositionX % windowWidth + 10 + '%');
            console.log("position = " + yourDivPositionX);
            if (yourDivPositionX > 50 % windowWidth) {
                console.log("IS");
                objectArray[4][0].style.opacity = (yourDivPositionX - 50) * .1;
            } else {
                console.log("IS NOT");
                objectArray[4][0].style.opacity = "0";
            }
            if ((yourDivPositionX > 30 % windowWidth) && (yourDivPositionX < 50 % windowWidth)) {
                console.log("IS");
                objectArray[3][0].style.opacity = (yourDivPositionX - 50) * 1;
            }

        }
    }

    function positionDivs() {
        for (var i = 0; i < objectArray.length; i++) {
            objectArray[i][0].style.left = objectArray[i][1] + "%";
            objectArray[i][0].style.top = objectArray[i][2] + "%";
        }
    }

});