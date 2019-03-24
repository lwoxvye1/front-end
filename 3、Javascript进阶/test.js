// 78、焦点事件
let inp = document.getElementById("in");
inp.addEventListener("focus", function () {
    console.log("聚焦事件")
}, false);

inp.addEventListener("blur", function () {
    console.log("离焦事件")
}, false);

// 79、鼠标事件-单击与双击
let div1 = document.getElementById("div1");
// 如果单双击都有，则在双击时也会出发单击的函数，需用定时器
let time;
div1.addEventListener("click", function () {
    clearTimeout(time);
    time = setTimeout(function () {
        console.log("单击")
    }, 300)
}, false);

div1.addEventListener("dblclick", function () {
    clearTimeout(time);
    console.log("双击")
}, false);

// 80、鼠标事件-mouseover、mouseout、mousedown、mouseup、mousemove
let lis = document.getElementsByTagName("li");
for (let i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "red"
    }, false);

    lis[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "blue"
    }, false);

    lis[i].addEventListener("mousedown", function () {
        this.style.fontSize = parseInt(getComputedStyle(this, null).fontSize) * 2 + "px"
    }, false);

    lis[i].addEventListener("mouseup", function () {
        this.style.fontSize = parseInt(getComputedStyle(this, null).fontSize) / 2 + "px"
    }, false);
}
document.addEventListener("mousemove", function () {
    console.log("鼠标在移动")
}, false);

// 81、键盘事件
document.addEventListener("keydown", function (e) {
    let event = e || window.event;   // IE浏览器用window.event，非IE用e
    console.log(event.altKey, event.ctrlKey, event.shiftKey, event.key, event.keyCode)
}, false);

document.addEventListener("keyup", function (e) {
    let event = e || window.event;   // IE浏览器用window.event，非IE用e
    console.log(event.altKey, event.ctrlKey, event.shiftKey, event.key, event.keyCode)
}, false);
// keypress 按非功能按键时触发， 除去shift、Caps Lock等
document.addEventListener("keypress", function (e) {
    let event = e || window.event;   // IE浏览器用window.event，非IE用e
    console.log(event.altKey, event.ctrlKey, event.shiftKey, event.key, event.keyCode)
}, false);

// 82、键盘事件应用下的例子
// 83、鼠标事件的event对象
let div2 = document.getElementById("div2");
div2.addEventListener("click", function (e) {
    let eve = e || window.event;
    console.log(eve);
    // 浏览器可视窗口坐标
    console.log(eve.clientX, eve.clientY);
    // 页面坐标
    console.log(eve.pageX, eve.pageY);
    // 电脑屏幕坐标
    console.log(eve.screenX, eve.screenY);
    // 按键(0、左键  1、滚轮键   2、右键)
    console.log(eve.button);
}, null);

// 84、事件流
// 事件流，是指从页面接收事件的顺序
// w3c事件流分为三个阶段:事件捕获阶段、 处于目标阶段、 事件冒泡阶段

// 85、验证事件流
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");

div3.addEventListener("click", function () {
    console.log("点击了div3")
}, false);
div4.addEventListener("click", function () {
    console.log("点击了div4")
}, false);
div5.addEventListener("click", function () {
    console.log("点击了div5")
}, false);
// true 捕获阶段触发事件    box3 -- box4 -- box5
// false 冒泡阶段触发事件   box5 -- box4 -- box3

