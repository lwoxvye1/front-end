// 86、事件对象(阻止冒泡、阻止默认行为)
document.body.onclick = function () {
    this.style.backgroundColor = "yellow"
};
document.getElementById("box1").onclick = function (e) {
    this.style.backgroundColor = "blue";
    // 阻止事件流，否则点击div，body的颜色也会变
    let eve = e || window.event;
    eve.stopPropagation()
};
// 同理，阻止子节点a的事件流
document.getElementById("put").onclick = function (e) {
    e.stopPropagation()
};

document.getElementById("link").onclick = function (e) {
    e.stopPropagation();
    let info = window.confirm("您浏览的页面存在风险，是否继续?");
    if (info === false){
        // 阻止跳转的默认行为
        e.preventDefault()
    }
};

// 87、拖拽效果
let basex = 0;
let basey = 0;
let movex = 0;
let movey = 0;
let div2 = document.getElementById("box2");
div2.addEventListener("mousedown", function (e) {
    let eve = e || window.event;
    basex = eve.pageX;
    basey = eve.pageY;

    document.onmousemove = function (e) {
        let ev = e || window.event;
        movex = ev.pageX - basex;
        basex = ev.pageX;
        movey = ev.pageY - basey;
        basey = ev.pageY;

        div2.style.left = div2.offsetLeft + movex + "px";
        div2.style.top = div2.offsetTop + movey + "px";

    };

    document.addEventListener("mouseup", function () {
        document.onmousemove = null;
    }, false);
}, false);
