// 57、了解时间(格林尼治时间、世界协调时间)
// 58、Date
let d1 = Date();    // 直接用Date()函数
console.log(d1);    // d1 String类型

let d2 = new Date("2018-10-01");    //  构造函数法，可以传参数，因为为东八区所以加八小时
console.log(d2);    // d2 Object类型

// 59、Date对象的方法
console.log(d2.getDate());  // Date对象有很多方法get、set

let str1 = d2.toLocaleString();
console.log(str1);
let str2 = d2.toLocaleDateString();
console.log(str2);
let str3 = d2.toLocaleTimeString();
console.log(str3);

// 60、Date对象间的运算
let d3 = new Date(2016, 10, 1);
console.log(d2 - d3);

// 61、BOM简介
// BOM:浏览器对象模型，是一个用于访问浏览器和计算机屏幕的对象集合。
// 我们可以通过全局对象window来访问这些对象
console.log(window.document);   // 是一个BOM对象，表示的是当前所载入的文档(即页面)
// ，但它的方法和属性也属于DOM对象所涵盖的范围
console.log(window.frames);     // 是当前页面所有框架的集合
console.log(window.navigator);  // 用于反应浏览器及其功能信息的对象
console.log(window.screen);     // 提供浏览器以外的环境信息
console.log(window.location);   // href属性      控制浏览器地址栏的内容
                                // reload()      刷新页面
                                // reload(true)  刷新页面，不带缓存
                                // assign()      加载新的页面
                                // replace()     加载新的页面(注意:不会再浏览器的历史纪
                                // 录表中留下记录，即无法后退)
console.log(window.history);    // window.history.length 获取历史纪录的长度
                                // back()       上一页
                                // forward()    下一页
                                // go(num)      num<0时，跳转到自己后方的第num个记录。
                                //              num>0时，跳转到自己前方的第num个记录

function func1() {
    // window.location.href = "red.html";
    // window.location.reload()    // 如果缓存里有，就不再发起请求，而是直接从缓存里拿
    window.location.assign("red.html");
    // window.location.replace("red.html");
}

// 62、windows中常用的方法(上面的六个为window的属性)
function func2() {
    window.open("red.html", "blank", "width=400px, height=400px, left=20px,top=0px")
}
function func3() {
    window.close()
}

// 63、window中常用的时间-onload加载事件和onunload卸载事件
// 当页面完全加载成功触发该事件
window.onload = function () {       // window.onload只能有一个，多了会被覆盖，jQuery可以写多个
    alert("页面加载成功");
};
window.onunload = function() {      // 当页面完全卸载再触发，只有IE支持，所以一般不常用
    alert("确认关闭?")
};
alert("你瞅啥?");

// 64、window中常用的事件-onscroll滚动事件
window.onscroll = function () {
    console.log("发生了滚动");
    let a = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(a)
};

// 65、window中常用的事件-onresize窗口变化事件
window.onresize = function () {
    let w = document.documentElement.clientWidth || document.body.clientWidth
        || window.innerWidth;       // 浏览器不同，使用的方法也不同
    let h = document.documentElement.clientHeight || document.body.clientHeight
        || window.innerHeight;
    console.log(w, h)
};