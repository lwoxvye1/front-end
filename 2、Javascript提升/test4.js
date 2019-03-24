// 77、事件处理程序
// 事件:就是用户或者是浏览器执行的某种动作
// 事件处理程序:就是响应事件的函数，事件处理程序的名字是以"on"开头的
// 1、直接在html标签中给与事件处理程序同名的属性赋值js代码
// 2、给与事件处理程序同名的属性赋值一个函数调用语句
// 使HTML代码与JS代码稍微有点分离，不至于第一种那么紧密耦合
// 标签中的this代表的是button标签本身
function func1(self) {
    console.log(this);      // this在普通函数中代表window
    self.style.backgroundColor = "black";
    alert("nice man")
}
// 3、DOM 0级事件处理程序
// 这种方式也是早期的写法，但好处是可以将JS与HTML完全分离，前提是需要给HTML元素提供一个额外的id属性
// (或其它能获取该元素对象的方式)
let div3 = document.getElementById("box3");
div3.onclick = function () {
    console.log(this);      // this在事件函数中代表标签
    alert("handsome man")
};
// 4、DOM 2级事件处理程序
// 是目前最流行的事件处理程序，各大主流浏览器全部支持
let div4 = document.getElementById("box4");
// 添加事件监听器
// 可以绑定多个事件。且相互之间不影响
div4.addEventListener("click", function () {
    console.log(this);      // this在事件函数中代表标签
    alert("cool man")
}, false);     // 事件流 false

/** 能否使用this，this代表的谁?
 *  1、在标签中使用，代表的是标签本身
 *  2、在函数体中直接使用，代表的是window
 *      在标签中将this作为实参传递到函数中，在函数体中使用形参代表标签本身
 *  3、在事件函数中使用，代表标签本身
 *  4、在事件函数中使用，代表标签本身
 */
