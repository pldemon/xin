/**
 * Created by RENPINGSHENG on 2018/4/6.
 */
// 多个属性运动框架  添加回调函数
function animate(obj,json,fn) {//fn:函数
    clearInterval(obj.timer);//清除计时
    obj.timer = setInterval(function () {
        var flag = true;// 用来判断是否停止定时器   一定写到遍历的外面
        for(var k in json){//k表示属性 json【k】表示值
            console.log(json);
            if( k == "opacity"){//改变透明度
                var leader = getStyle(obj,k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) /10;//计算步长：用target位置减去当前的位置除以10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader /100;
            } else if ( k == "zIndex"){//改变叠加值
                obj.style[k] = json[k];
            }else{//改变宽度高度
                var leader = parseInt(getStyle(obj,k)) || 0;
                var target = json[k];
                var step = (target - leader) /10;
                step = step >0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }

            console.log("target:" + target + "leader:" + leader + "step:" + step);
            if (leader != target){
                flag = false;
            }
        }

        if (flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },15)
}

function getStyle(obj,attr){
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}