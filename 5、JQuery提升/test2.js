$(document).ready(function () {
    // 23、JQuery中的动画效果(隐藏与显示)
    let $div = $("#box");
    $("#btn1").click(function () {
        // hide()
        // hide(speed[, callback])
        // speed:   slow 600     normal  400     fast    200    也可以自己定义
        // callback 完成后触发的回调函数
        $div.hide("slow", function () {
            console.log("动画结束")
        })
    });
    $("#btn2").click(function () {
        $div.show(1000)
    });
    $("#btn3").click(function () {
        $div.toggle(2000)
    });

    // 24、JQuery中的动画效果(淡入淡出效果)
    $("#btn4").click(function () {
        $div.fadeOut(1000, function () {
            console.log("动画结束")
        })
    });
    $("#btn5").click(function () {
        $div.fadeIn(1000)
    });
    $("#btn6").click(function () {
        $div.fadeTo(1000, 0.1)  // 时间内到某个透明度,透明度到0位置仍然会在
    });
    $("#btn7").click(function () {
        $div.fadeToggle(1000)
    });

    // 25、JQuery中的动画效果(滑动显示匹配的元素、滑动隐藏匹配的元素、
    // 通过高度的变化动态切换元素的可见性)
    $("#btn8").click(function () {
        $div.slideUp(500)
    });
    $("#btn9").click(function () {
        $div.slideDown(500)
    });
    $("#btn10").click(function () {
        $div.slideToggle(500)
    });

    // 26、JQuery自定义动画效果
    // animate(params[, speed][, callback])
    // 注意:1、在使用animate()方法时，必须设置元素的定位属性position为relative或absolute，元素
    // 才能动起来。如果没有明确定义元素的定位属性，并试图使用animate()方法移动元素时，他们
    // 只会静止不动
    // 2、如果在{left: "200px"}中的200px之前加上"+="就表示在当前位置累加，"-="就表示累减
    let a = $div.animate({left: "200px", top:"100px", opacity: "0.5"},
        1000)
        .delay(1000).animate({top: "200px"});
    $("#btn11").click(function () {
        a.stop(true, true)
        // clearQueue 表示是否清空尚未执行完的动画队列
        // jumpToEnd  表示是否让正在执行的动画直接到达动画结束时的状态
        // 注意:参数jumpToEnd设置为true时，只能直接到达正在执行的动画的最终状态，
        // 并不能到达动画序列所设置的动画的最终状态
    });
    $("#btn12").click(function () {
        // 判断元素是否处于动画状态
        if (a.is(":animated")){
            console.log("正在执行")
        }
    });
});