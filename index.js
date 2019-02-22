
//切换登录
function enter(){
    var enter = document.getElementById('enter');
    var sign = document.getElementById('sign');
    enter.style.cssText = 'display:block';
    sign.style.cssText = 'display:none';
    console.log(1);
}
//切换注册
function sign(){
    var enter = document.getElementById('enter');
    var sign = document.getElementById('sign');
    enter.style.cssText = 'display:none';
    sign.style.cssText = 'display:block';
}

//计二简介
$(".down").hover(function(){//鼠标悬浮在上面实现
    $(this).find("img").stop().animte({
        "left":"0px"
    },1000);
},function(){//鼠标离去
    $(this).find("img").stop().animte({
        "left":"-32px"
    },1000);
});