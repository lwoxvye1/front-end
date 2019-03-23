// 75、节点常用属性
let jsDiv1 = document.getElementById("box1");
let jsDiv2 = document.getElementById("box2");
/*  节点共有的属性
节点类型            nodeName        nodeType        nodeValue
元素节点            元素名称        1               null
属性节点            属性名称        2               属性值
文本节点            #text           3               文本内容不包含html
注释节点            #comment        8               注释内容
 */
console.log(jsDiv1.nodeName, jsDiv1.nodeType, jsDiv1.nodeValue);

// 节点层次关系属性
// 1、获取当前元素节点的所有子节点
let allChilds = jsDiv1.childNodes;
console.log(allChilds);     // 文本节点也是子节点(div到第一个p之间的空白文本)
// 2、获取当前元素节点的第一个子节点
console.log(jsDiv1.firstChild);
// 3、获取当前元素节点的最后一个子节点
console.log(jsDiv1.lastChild);
// 4、获取该节点的文档的根节点，相当于document
console.log(jsDiv1.ownerDocument);
// 5、获取当前节点的父节点
console.log(jsDiv1.parentNode);
// 6、获取当前节点的前一个同级节点
console.log(jsDiv2.previousSibling);
// 7、获取当前节点的后一个同级节点
console.log(jsDiv2.nextSibling);
// 8、获取当前节点的所有的属性节点
let jsInput = document.getElementById("put");
let allAttributesArray = jsInput.attributes;
console.log(allAttributesArray);

// 76、DOM节点动态操作
let a = document.createElement("p");
a.innerText = "sunck is a good man";
a.style.backgroundColor = "blue";
console.log(a);
// 将一个新节点添加到某个节点的子节点列表的末尾上
jsDiv1.appendChild(a);

// 将新节点添加到父节点的某个子节点前面
let b = document.createElement("p");
b.innerText = "sunck is a handsome man";
b.style.backgroundColor = "black";
jsDiv1.insertBefore(b, jsDiv1.lastChild);  // 一定要注意是否有文本节点

// 替换节点
// 父节点.replaceChild(新节点， 子节点)
// 将父节点中的某个子节点替换成新节点
let c = document.createElement("p");
c.innerText = "sunck is a nice man";
c.style.backgroundColor = "brown";
jsDiv1.replaceChild(c, jsDiv1.firstChild);

// 复制节点
let newDiv = jsDiv2.cloneNode(true);    // 不加true不复制子节点
console.log(newDiv);

// 删除节点
document.body.removeChild(document.body.firstChild);


let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "good");
jsDiv2.appendChild(input);

// 小练习
let ball = document.getElementById("ball");
let speedx = 5;
let speedy = 5;
setInterval(function () {
    ball.style.left = ball.offsetLeft + speedx + "px";
    ball.style.top = ball.offsetTop + speedy + "px";

    if (ball.offsetTop >= 400 - 50  || ball.offsetTop <= 0){
        speedy *= -1;
    }
    if (ball.offsetLeft >= 600 - 50 || ball.offsetLeft <= 0){
        speedx *= -1
    }
}, 50);