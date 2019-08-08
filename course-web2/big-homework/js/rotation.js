// rotation.js
// 轮播图
function getStyle(obj, attr) { //返回值带有单位px
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            (function (attr) {
                if (attr == "opacity") {
                    var now = parseInt(getStyle(obj, attr) * 100);
                    var dest = json[attr] * 100;
                } else {
                    var now = parseInt(getStyle(obj, attr));
                    var dest = json[attr];
                }
                var speed = (dest - now) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (now != dest) {
                    flag = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
        if (flag) {
            clearInterval(obj.timer);
            callback && callback(); //如果回调函数存在，就调用回调函数
        }
    }, 30);
}

var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('box_nav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
box.onmouseover = function () {
    animate(left, {
        opacity: 0.6
    })
    animate(right, {
        opacity: 0.6
    })
    clearInterval(timer); //图片停止滚动
}

box.onmouseout = function () {
    animate(left, {
        opacity: 0
    })
    animate(right, {
        opacity: 0
    })
    timer = setInterval(next, 3000); //图片开始接着滚动
}

right.onclick = next;
left.onclick = prev;

function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider, {
        left: -800 * index
    }, function () {
        if (index == 7) {
            slider.style.left = '-800px';
            index = 1;
        }
        isMoving = false;
    });
}

function prev() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(slider, {
        left: -800 * index
    }, function () {
        if (index == 0) {
            slider.style.left = '-4800px';
            index = 6;
        }
        isMoving = false;
    });
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].index = i;
    oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {
            left: -800 * index
        });
    }

}
//图片切换时按钮样式跟着切换
function navmove() {
    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
    }
    if (index > 6) {
        oNavlist[0].className = "active";
    } else if (index <= 0) {
        oNavlist[5].className = "active";
    } else {
        oNavlist[index - 1].className = "active";
    }
}
//页面打开时自动滚动切换
timer = setInterval(next, 3000);
