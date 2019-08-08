// shop1.js

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

// 商品切换
var sp0 = document.getElementsByClassName("sp0")[0];
var sp1 = document.getElementsByClassName("sp1")[0];
var toLeft = document.getElementsByClassName("to-left")[0];
var toRight = document.getElementsByClassName("to-right")[0];
var twoImg = document.getElementsByClassName("two-img")[0];

twoImg.style.left = "0px";

sp0.onmouseover = function(){
    sp0.style = "border: 2px solid #ff9003";
    sp1.style = "border: 2px solid #fff";
    twoImg.style = "left:0px";
}

sp1.onmouseover = function(){
    sp1.style = "border: 2px solid #ff9003";
    sp0.style = "border: 2px solid #fff";
    twoImg.style = "left:-410px";
}

toLeft.onclick = next;
toRight.onclick = next;

function next(){
    if(twoImg.style.left == "0px"){
        sp1.style = "border: 2px solid #ff9003";
        sp0.style = "border: 2px solid #fff";
        twoImg.style = "left:-410px";
    }else{
        sp0.style = "border: 2px solid #ff9003";
        sp1.style = "border: 2px solid #fff";
        twoImg.style = "left:0";
    }
}

//净含量选择
var five = document.getElementById('five');
var two = document.getElementById('two');
var capacity = document.getElementById('capacity');

five.onclick = function(){
    five.style.border = '1px solid #ff0000';
    five.style.background = "url('../img/duigou.png') no-repeat right bottom";
    two.style.border = '1px solid #fff';
    two.style.background = 'none';
    capacity.innerHTML = '"150ml"';

}
two.onclick = function(){
    two.style.border = '1px solid #ff0000';
    two.style.background = "url('../img/duigou.png') no-repeat right bottom";
    five.style.border = '1px solid #fff';
    five.style.background = 'none';
    capacity.innerHTML = '"200ml"';

}

//改变数量
var minus = document.getElementById('minus');
var input = document.getElementById('input');
var add = document.getElementById('add');

minus.onclick = function(){
    if(input.value > 1){
        input.value = input.value - 1;
    }
    if(input.value == 1){
        minus.style.cursor = 'not-allowed';
        add.style.cursor = 'pointer';
    }else{
        minus.style.cursor = 'pointer';
        add.style.cursor = 'pointer';
    }
}
add.onclick = function(){
    if(input.value < 5){
        input.value = parseInt(input.value) + 1;
    }
    if(input.value == 5){
        minus.style.cursor = 'pointer';
        add.style.cursor = 'not-allowed';
    }else{
        minus.style.cursor = 'pointer';
        add.style.cursor = 'pointer';
    }
}

//加入购物车
var abuy = document.getElementById('abuy');
var all = document.getElementsByClassName('all')[0];
var succeed = document.getElementsByClassName('succeed')[0];
var succeed_button = document.getElementsByClassName('succeed_button');
var succeedx = document.getElementsByClassName('succeedx')[0];
abuy.onclick = function(){
    all.style.display = 'inline';
    succeed.style.display = 'inline';
}
function guandiao(){
    all.style.display = 'none';
    succeed.style.display = 'none';
}
succeed_button[0].onclick = guandiao;
succeed_button[1].onclick = guandiao;
succeedx.onclick = guandiao;

//放大镜

var tu = document.getElementsByClassName('img-top')[0];
var pho = document.getElementsByClassName('two-img')[0];
var cases = document.getElementsByClassName('case')[0];
var big = document.getElementsByClassName('big-img')[0];
var slider = document.getElementsByClassName('slider')[0];

var sss = tu.offsetLeft;
cases.style.left = sss + 408 + 2 + 'px';

//给左侧的小图绑定移入移出移动事件
tu.onmouseover = function(){
    if(pho.style.left == '0px'){
        big.src="../img/pp0.jpeg";
    }
    else{
        big.src="../img/pp1.jpeg";
    }
    slider.style.display = 'block';
    cases.style.display = 'block';
}
tu.onmouseout = function(){
    slider.style.display = 'none';
    cases.style.display = 'none';
}
tu.onmousemove = function(ev){
    var ev = ev||window.event;
    var stt = document.documentElement.scrollTop || document.body.scrollTop;
    //根据鼠标位置计算放大镜的位置
    var left = ev.clientX - tu.offsetLeft - slider.offsetWidth/2;
    var top = ev.clientY - tu.offsetTop - slider.offsetHeight/2 +stt;
    var maxLeft = tu.offsetWidth - slider.offsetWidth;
    var maxTop = tu.offsetHeight - slider.offsetHeight;
    left = left>maxLeft?maxLeft:left<0?0:left;
    top = top>maxTop?maxTop:top<0?0:top;
    //设置放大镜的位置
    if(pho.style.left == '0px'){
        slider.style.left = left + 'px';
        slider.style.top = top + 'px';
    }
    else{
        slider.style.left = left + 408 + 'px';
        slider.style.top = top  + 'px';
    }
    //根据左侧的放大镜的位置去计算右侧大图的移动比例
    var w = left/maxLeft;
    var h = top/maxTop;
    //计算大图的最大移动范围
    var bigLeft = cases.offsetWidth - big.offsetWidth;
    var bigTop = cases.offsetHeight - big.offsetHeight;
    //计算大图的距离，设置位置
    big.style.left = w*bigLeft + 'px';
    big.style.top = h*bigTop + 'px';
}

