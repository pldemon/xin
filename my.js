window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");

    var config = [
        {
            width:200,
            top:20,
            left:50,
            opacity:0.2,
            zIndex:2
        },
        {
            width:300,
            top:70,
            left:0,
            opacity:0.8,
            zIndex:3
        },
        {
            width:350,
            top:100,
            left:120,
            opacity:1,
            zIndex:4
        },
        {
            width:300,
            top:70,
            left:300,
            opacity:0.8,
            zIndex:3
        },
        {
            width:200,
            top:20,
            left:350,
            opacity:0.2,
            zIndex:2
        }
    ];

    wrap.onmouseover = function () {
        animate(arrow,{"opacity":1});
    }
    wrap.onmouseout = function () {
        animate(arrow,{"opacity":0});
    }
    function assign() {
        for(var i = 0;i < lis.length;i++){
            animate(lis[i],config[i],function(){
                flag = true;
            })
        }
    }

    var flag = true;
    assign();
    arrRight.onclick = function () {
        flag = false;
        config.push(config.shift());
        assign();
    };
    arrLeft.onclick = function () {
        flag = false;
        config.unshift(config.pop());
        assign();
    }
    var timer = null;
    function autoPlay () {
        timer = setInterval(function () {
           flag = false;
           config.unshift(config.pop());
           assign();
        },3000);
    }
    autoPlay();
    var slide = document.querySelector(".slide");
	slide.onmouseenter = function(){
		clearInterval(timer);
	}
	slide.onmouseleave = function(){
		autoPlay();
	}
}