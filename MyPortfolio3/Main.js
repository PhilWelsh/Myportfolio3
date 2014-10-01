$(function () {
    //slick.js
    $('.single-item').slick();

    // Init Skrollr
    var s = skrollr.init({
        render: function (data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });


    //    // Detect if the browser is IE or not.
    //    // If it is not IE, we assume that the browser is NS.
    //    var IE = document.all ? true : false

    //    // If NS -- that is, !IE -- then set up for mouse capture
    //    if (!IE) document.captureEvents(Event.MOUSEMOVE)

    //    // Set-up to use getMouseXY function onMouseMove
    //    document.onmousemove = getMouseXY;

    //    // Temporary variables to hold mouse x-y pos.s
    //    var tempX = 0;
    //    var tempY = 0;

    //    var objectArray = new Array();

    //    fillObjectArray();
    //    positionDivs();
    //    var windowWidth = $(window).width();

    //    function fillObjectArray() {
    //        var bgDiv = document.getElementById("bg");
    //        var bgX = 0; //position div from half width of the page
    //        var bgY = 40;
    //        var bgFactor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
    //        var bgWidth = windowWidth;

    //        var bgArray = new Array();
    //        bgArray.push(bgDiv, bgX, bgY, bgFactor, bgWidth);
    //        objectArray.push(bgArray);

    //        var pp4Div = document.getElementById("profilepic4");
    //        var pp4X = -29;
    //        var pp4Y = 50;
    //        var pp4Factor = -0.1;
    //        var pp4Width = 300;

    //        var pp4Array = new Array();
    //        pp4Array.push(pp4Div, pp4X, pp4Y, pp4Factor, pp4Width);
    //        objectArray.push(pp4Array);

    //        var bgblurDiv = document.getElementById("bgblur");
    //        var bgblurX = 0; //position div from half width of the page
    //        var bgblurY = 40;
    //        var bgblurFactor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
    //        var bgblurWidth = windowWidth;

    //        var bgblurArray = new Array();
    //        bgblurArray.push(bgblurDiv, bgblurX, bgblurY, bgblurFactor, bgblurWidth);
    //        objectArray.push(bgblurArray);
    //}
    //    // Main function to retrieve mouse x-y pos.s

    //    function getMouseXY(e) {
    //        if (IE) {
    //            // grab the x-y pos.s if browser is IE
    //            tempX = event.clientX + document.body.scrollLeft
    //            tempY = event.clientY + document.body.scrollTop
    //        }
    //        else {
    //            // grab the x-y pos.s if browser is NS
    //            tempX = e.pageX
    //            tempY = e.pageY
    //        }
    //        // catch possible negative values in NS4
    //        if (tempX < 0) { tempX = 0 }
    //        if (tempY < 0) { tempY = 0 }

    //        moveDiv(tempX, tempY);

    //        return true
    //    }

    //    function moveDiv(tempX, tempY) {
    //        for (var i = 0; i < 2; i++) {
    //            objectArray[0][0].style.left = (yourDivPositionX / 5 - 10 + '%');
    //            objectArray[0][0].style.top = (yourDivPositionY * 22 - 220 + 'px');
    //            objectArray[2][0].style.left = (yourDivPositionX / 5 - 10 + '%');
    //            objectArray[2][0].style.top = (yourDivPositionY * 22 - 220 + 'px');
    //            var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
    //            var yourDivPositionY = objectArray[i][3] * (0.5 * windowWidth - tempY) + objectArray[i][1];
    //            objectArray[1][0].style.left = (yourDivPositionX / 30 + 70 + '%');
    //            objectArray[1][0].style.top = (yourDivPositionY / 10 +10 + 'px');

    //            //console.log("position = " + yourDivPositionX);
    //        }
    //    }

    //    function positionDivs() {
    //        for (var i = 0; i < 2; i++) {
    //            objectArray[i][0].style.left = objectArray[i][1] + "%";
    //            objectArray[i][0].style.top = objectArray[i][2] + "%";
    //        }
    //        objectArray[2][0].style.left = objectArray[i][1] + "%";
    //        objectArray[2][0].style.top = objectArray[i][2] + "%";
    //    }

    //SCROLL TO
    $("#topmenu li a").on("click", function () {
        var destination = $(this).attr('data-attr-scroll')
        $('body').scrollTo(destination, { duration: 'slow' });
    });
    $("#returntotop").on("click", function () {
        //$('body').scrollTo("#topmenu", { duration: 'slow' });
        $('body').scrollTo("body", { duration: 'slow' });
    });


    //SCROLL EFFECTS
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        //SCROLL TO TOP BOTTOM

        if ($(document).scrollTop() > 100) {
            $("#topmenu").addClass("small");
        } else {
            $("#topmenu").removeClass("small");
        }

        if ($(this).scrollTop() > 100) {
            $('#returntotop').fadeIn(700);
        } else {
            $('#returntotop').fadeOut(700);
        }

        //APPEAR ON SCROLL

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > top_of_object) {

                $(this).delay(200).animate({ 'opacity': '1' }, 500);
                $(this).find(".nth1 .filler").delay(400).animate({ 'height': '100%' }, 1300);
                $(this).find(".nth2 .filler").delay(500).animate({ 'height': '100%' }, 1350);
                $(this).find(".nth3 .filler").delay(600).animate({ 'height': '100%' }, 1400);
                $(this).find(".nth4 .filler").delay(700).animate({ 'height': '100%' }, 1450);
                $(this).find(".nth5 .filler").delay(800).animate({ 'height': '100%' }, 1500);
                $(this).find(".nth1 .percent").delay(500).animate({ 'top': '10%' }, 1300);
                $(this).find(".nth2 .percent").delay(600).animate({ 'top': '10%' }, 1400);
                $(this).find(".nth3 .percent").delay(700).animate({ 'top': '10%' }, 1600);
                $(this).find(".nth4 .percent").delay(800).animate({ 'top': '10%' }, 1700);
                $(this).find(".nth5 .percent").delay(900).animate({ 'top': '10%' }, 1800);
            }
            //Change to '.addclass("animate") then add that to CSS


        });
    });

    var currentview = "#skillsnth0";
    var lock = false;
    $("#skillbuttons a").on("click", function () {
        if (lock) return;
        lock = true;
        var id = $(this).attr('id');
        var skilltext = "#skills" + id;
        $(currentview).fadeOut(700, function () {
            $(skilltext).fadeIn();
            currentview = skilltext;
            lock = false;
        });
    });





});