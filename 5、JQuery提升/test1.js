$(document).ready(function () {
    // 14、JQuery中的事件处理(页面加载响应事件)
    //  $(document).ready(function () {});
    //  可以简写    $().ready(function () {});
    //              $(function () {});
    /*
    $(document).ready()方法代替传统的window.onload()方法，不过两者之间还是有些细微的区别的
    1、在一个页面上可以无限制地使用$(document).ready()方法，各个方法间并不冲突，会按照在代码中
    的顺序依次执行。而window.onload()方法在一个页面中只能使用一次。
    2、在一个文档完全下载到浏览器时(包括所有关联的文件，例如图片、横幅等)就会响应window.onload()
    方法。而$(document).ready()方法是在所有的DOM元素完全就绪以后就可以调用，不包括关联的文件。例如
    在页面上还有图片没有加载完毕但是DOM元素已经完全就绪，这样就会执行$(document).ready()方法，在
    相同条件下window.onload()方法是不会执行的，它会继续等待图片加载，知道图片及其它的关联文件都
    下载完毕时才执行。显然，把网页解析为DOM元素的速度要比把页面中的所有关联文件加载完毕的速度快得多
    3、使用$(document).ready()方法时注意一点，因为只要DOM元素就绪就可以执行该方法，所以可能出现元素
    的关联文件尚未下载完全的情况，例如与图片有关的DOM元素已经就绪，但是图片还没有加载完，若此时要
    获取图片的高度或宽度属性是未必会有效的，要解决这个问题，可以使用JQuery中的另一个关于页面加载的
    方法:load()方法。load()方法会在元素的onload事件中绑定一个处理函数，如果这个处理函数绑定到window
    对象上，则会在所有内容加载完毕后触发，如果绑定在元素上，则会在元素的内容加载完毕后触发。
    */
    // $(window).load(function(){}); 等价下面代码  window.onload = function(){};

    // 15、JQuery中的事件(类似DOM中的事件)
    // 16、JQuery中的事件处理(事件绑定)
    // 17、JQuery中的事件处理(移除绑定)
    /*
    bind
    delegate
    on
    live        不建议使用
     */
    $("#btn").click(function () {
       $("#box").append("<p>我是新的</p>")
    });
    let $jqBox = $("#box p");
    $jqBox.bind("click", function () {
        console.log($(this).text())
    });
    $jqBox.unbind("click");
    /*  问题
    1、隐式迭代  会把所有匹配的元素都绑定上事件
    2、对于尚未存在的标签无法绑定事件
     */
    let $jqBox1 = $("#box");
    $jqBox1.delegate("p", "click", function () {
        console.log($(this).text())
    });
    $jqBox1.undelegate("p", "click");
    // 这种方式采用了事件委托的概念。不是直接为p元素绑定事件，而是为其父元素(或祖父元素也可)
    // 绑定事件，当在div内任意元素上点击时，事件会一层层从event  target向上冒泡，直至到达
    // 你为其绑定事件的元素。冒泡的过程中，如果事件的currentTarget与选择器匹配时，就会执行代码
    // 适用的事件(必须是冒泡的事件)  click  mousedown  mouseup   keydown   keypress
    // 问题:DOM层级如果比较深，效率也会变低
    $jqBox1.on("click", "p", function () {
        console.log($(this).text())
    });
    $jqBox1.off("click", "p");
    // on()其实是将以前的绑定事件方法作了统一，可以发现无论bind()还是delegate()其实都是通
    // 过on()方法实现的，只是参数不同罢了

    // 18、JQuery中的事件处理(绑定一次性事件处理)
    $("#btn2").one("click", function () {
        console.log("************")
    });
    /*
    总结
    1、选择器匹配到的元素比较多时，不要用bind()迭代绑定
    2、用id选择器时，可以用bind()
    3、需要给动态添加的元素绑定时，用delegate()或on()
    4、用delegate()和on()方法，DOM树不要太深
    5、尽量使用on()
     */

    // 19、JQuery中的事件处理(模拟用户的操作触发事件)
    let a = $("#btn3").bind("click", function (e, msg1) {
        console.log(msg1)
    });
    a.trigger("click", "sunck");    // 可以传参
    a.triggerHandler("click", "sunck");  // 和trigger用法相同,只不过
    // triggerHandler不会导致浏览器同名的默认行为被执行，而trigger可以

    // 20、JQuery中的事件处理(模仿悬停事件)
    $("#btn4").hover(function () {
        console.log("移入")
    },function () {
        console.log("移出")
    });

    // 21、JQuery中的事件处理(事件对象)
    $("#btn5").bind("mouseout", function (e) {
        console.log(e);
        console.log(e.type);
        console.log(e.relatedTarget)
    });

    // 22、JQuery中的事件处理(阻止事件冒泡、阻止默认行为)
    $("body").bind("click", function () {
        $(this).css("background-color", "blue")
    });
    $("#box1").bind("click", function (e) {
        $(this).css("background-color", "yellow");
        // e.stopPropagation()
        return false    // 阻止冒泡和默认行为
    });
    $("#put").bind("click", function (e) {
        e.stopPropagation()
    });
    $("#link").bind("click", function (e) {
       let d =  window.confirm("网址有病毒！确认继续访问?");
        if (d === false){
            // e.stopPropagation();
            // e.preventDefault();
            return false
            
        }
    })
});