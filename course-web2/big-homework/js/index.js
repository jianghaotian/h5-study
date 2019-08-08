// index.js

//顶部悬浮
var cover = document.getElementsByClassName('header')[0];
var cheader = document.getElementsByClassName('cheader')[0];

window.onscroll = function(){
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    if(st > 180){
        cover.style.position = 'fixed';
        cover.style.paddingBottom = '18px';
        cheader.style.height = "131px";
    }else{
        cover.style.position = 'static';
        cover.style.paddingBottom = '0';
        cheader.style.height = "0";
    }
}

var write = document.getElementById('top_down');
var up = document.getElementById('top_up');

up.onchange = function () {
    write.innerHTML = '¥ ' + up.value;
}

var ul = document.getElementById("notices");

function shower() {
    var top = ul.offsetTop - 1;
    ul.style.top = top + "px";

    if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
        ul.style.top = 0;
    }
}
var t = setInterval(shower, 10);

var li = document.getElementsByClassName("notice");
for (var i = 0; i < li.length; i++) {
    //移出事件
    li[i].onmouseout = function () {
        t = setInterval(shower, 10);
    };
    //移入事件
    li[i].onmouseover = function () {
        clearInterval(t);
    };
}

//右面滑动
var rone = document.getElementsByClassName('rone')[0];
var rtwo = document.getElementsByClassName('rtwo')[0];
var rthree = document.getElementsByClassName('rthree')[0];
var rfour = document.getElementsByClassName('rfour')[0];
var serwei = document.getElementsByClassName('serwei')[0];
rone.style.right = '-89px';
rtwo.style.right = '-89px';
rthree.style.right = '-89px';
rfour.style.right = '-89px';

var timer1;
rone.onmouseover = function () {
    var t = parseInt(rone.style.right);
    clearInterval(timer1);
    timer1 = setInterval(function (){
        t++;
        rone.style.right = t + 'px';
        if(t >= 0){
            rone.style.right = '0px';
            clearInterval(timer1);
        }
        },1);
};
rone.onmouseout = function () {
    var t = parseInt(rone.style.right);
    clearInterval(timer1);
    timer1 = setInterval(function (){
        t--;
        rone.style.right = t + 'px';
        if(t <= -89){
            rone.style.right = '-89px';
            clearInterval(timer1);
        }
        },1);
};

var timer2;
rtwo.onmouseover = function () {
    var t = parseInt(rtwo.style.right);
    clearInterval(timer2);
    timer2 = setInterval(function (){
        t++;
        rtwo.style.right = t + 'px';
        if(t >= 0){
            rtwo.style.right = '0px';
            clearInterval(timer2);
        }
    },1);
};
rtwo.onmouseout = function () {
    var t = parseInt(rtwo.style.right);
    clearInterval(timer2);
    timer2 = setInterval(function (){
        t--;
        rtwo.style.right = t + 'px';
        if(t <= -89){
            rtwo.style.right = '-89px';
            clearInterval(timer2);
        }
    },1);
};

var timer3;
rthree.onmouseover = function () {
    var t = parseInt(rthree.style.right);
    clearInterval(timer3);
    timer3 = setInterval(function (){
        t++;
        rthree.style.right = t + 'px';
        if(t >= -40){
            serwei.src="./img/erwei.png";
            serwei.classList.remove("serwei");
            serwei.classList.add("erwei");
        }
        if(t >= 0){
            rthree.style.right = '0px';
            clearInterval(timer3);
        }
    },1);
};
rthree.onmouseout = function () {
    var t = parseInt(rthree.style.right);
    clearInterval(timer3);
    timer3 = setInterval(function (){
        t--;
        rthree.style.right = t + 'px';
        if(t <= -40){
            serwei.src="./img/serwei.png";
            serwei.classList.remove("erwei");
            serwei.classList.add("serwei");
        }
        if(t <= -89){
            rthree.style.right = '-89px';
            clearInterval(timer3);
        }
    },1);
};

var timer4;
rfour.onmouseover = function () {
    var t = parseInt(rfour.style.right);
    clearInterval(timer4);
    timer4 = setInterval(function (){
        t++;
        rfour.style.right = t + 'px';
        if(t >= 0){
            rfour.style.right = '0px';
            clearInterval(timer4);
        }
    },1);
};
rfour.onmouseout = function () {
    var t = parseInt(rfour.style.right);
    clearInterval(timer4);
    timer4 = setInterval(function (){
        t--;
        rfour.style.right = t + 'px';
        if(t <= -89){
            rfour.style.right = '-89px';
            clearInterval(timer4);
        }
    },1);
};





