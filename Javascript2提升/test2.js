// 66、定时器-间歇性定时器
let time = window.setInterval(function (){
    console.log("sunck is a good man")
}, 2000);

function func1() {
    // 清除定位器,在JS中清除是真的清除而不是暂停，如果想再执行，只能再去定义一个
    window.clearInterval(time)
}

// 67、定时器-延时定时器
// 三秒之后执行一次，只执行这一次
let time2 = window.setTimeout(function () {
    console.log("sunck is a nice man")
}, 3000);

// 68、认识DOM
/*
一、了解DOM

DOM: 文档对象模型(Document Object Model)
DOM是访问HTML和操作HTML的标准

Core DOM  -  核心DOM  针对任何结构化文档的标准模型
XML DOM   -  针对XML文档的标准模型
HTML DOM  -  针对HTML文档的标准模型

二、DOM节点的分类
1、文档节点
2、标签(元素)节点
3、属性节点
4、文本节点
5、注释节点

三、DOM节点层级关系(DOM树)
1、父节点:  父节点拥有任意数量的子节点
2、子节点:  子节点只能拥有一个父节点
3、兄弟节点:拥有相同父节点的同级节点
4、根节点:  一个HTML文档一般只有一个根节点，根节点没用父节点，是最上层的节点

祖先节点:   包含子节点的节点都可以叫做祖先节点，其中包括了父节点
后代节点:   一个节点内包含的所有节点，叫做后代节点，其中包括了子节点

四、JS跟页面中这些标签进行交互
1、获取标签(元素)节点
        修改标签CSS样式
        修改标签属性
2、创建标签
3、删除标签
4、复制标签
 */

// 69、获取标签(元素)节点
 let jsDiv = document.getElementById("idDiv");
 console.log(jsDiv);
 console.log(typeof(jsDiv));

let jsDivs = document.getElementsByClassName("classDiv");
console.log(jsDivs);
console.log(typeof(jsDivs));

let jsInputs = document.getElementsByName("inputText");
console.log(jsInputs);
console.log(typeof (jsInputs));

let jsAllDivs = document.getElementsByTagName("div");
console.log(jsAllDivs);
console.log(typeof (jsAllDivs));

// 70、获取属性节点
// 方法一:获取官方定义的属性直接使用 元素节点.属性名
let jsInput = document.getElementById("in");
console.log(jsInput.placeholder);
function func2() {
    jsInput.placeholder = "sunck is a good man"
}

// 方法二:元素节点.getAttribute("属性名")
// 注意:该方法还可以获取自定义属性
console.log(jsInput.getAttribute("my"));
function  func3() {
    jsInput.setAttribute("my", "good");
    // jsInput.removeAttribute("my");
    // console.log(jsInput)

    jsInput.setAttribute("myyy", "nice");
    console.log(jsInput)
}

// 71、获取文本节点
// 1、元素节点.innerHTML 从对象的开始标签到结束标签的全部内容，不包括本身HTML标签
let jsBox = document.getElementById("box");
console.log(jsBox.innerHTML);
// 2、元素节点.outerHTML 除了内含innerHTML的全部内容外，还包含对象标签本身
console.log(jsBox.outerHTML);
// 3、元素节点.innerText 从对象的开始标签到结束标签的全部的文本内容
console.log(jsBox.innerText);

// 添加内容，会覆盖之前的内容
jsBox.innerHTML = "<h1>good</h1>";

// 72、行间样式表的读写
function  changeColor() {
    let jsBox2 = document.getElementById("box2");
    console.log(jsBox2.style.backgroundColor);
    jsBox2.style.backgroundColor = "yellow";
    jsBox2.style.width = "200px";
    jsBox2.style.height = "100px";
    jsBox2.style.left = "100px";
}

// 73、内部样式表与外部样式表的读写
function  change_color() {
    // 获取行内样式和外部样式的方法不同，设置行内样式和外部样式的方法相同
    // .style.backgroundColor获取不到外部样式的值，但window.getComputedStyle获取得到行内样式的值
    // (一个BOM一个DOM)
    let jsBox3 = document.getElementById("box3");
    let c = window.getComputedStyle(jsBox3, null).backgroundColor;
    console.log(c);
    jsBox3.style.backgroundColor = "black"
}

// 74、自由飞翔的div
function fly() {
    setInterval(function () {
        let fly_div = document.getElementById("fly");
        let a = window.getComputedStyle(fly_div, null).left;
        console.log(a);
        let b = parseInt(a);
        let c = parseInt(window.getComputedStyle(fly_div, null).top);
        fly_div.style.left = b + 10 + "px";
        fly_div.style.top = c + 10 + "px";

    }, 1000)
}