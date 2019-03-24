/*
JQuery选择器
1、JQuery选择器是什么？
    JQuery选择器是JQuery库中非常重要的部份之一。它支持网页开发者所熟知的CSS语法，能够轻松快速地对
    页面进行设置。JQuery选择器是打开高效开发JQuery之门的钥匙。

    JQuery选择器的语法格式为:$(selector).methodName();

    Selector是一个字符串表达式，用于识别DOM中的元素，然后使用JQuery提供的方法集合加以设置

    多个JQuery操作可以以链的形式串起来，语法如下

    $(selector).method1().method2().method3();
2、JQuery选择器的优势
    1、代码更简单
    2、支持CSS1到CSS3选择器
    3、完善的检测机制
*/

// JQuery对象和DOM对象
$(document).ready(function () {
    // DOM对象
    let jsDiv = document.getElementById("box1");

    // JQuery对象
    let $jqDiv = $("#box1").html("sunck is a good man");

    // JQ --> DOM
    let jsDiv1 = $jqDiv[0];
    console.log($jqDiv);
    console.log(jsDiv1);

    let jsDiv2 = $jqDiv.get(0);
    console.log(jsDiv2);

    // DOM --> JQ
    let $jqDiv1 = $(jsDiv)
});
// 选择器
// 一、基础选择器
// 1、ID选择器

// 2、元素选择器
let $jqDivs = $("div");     // document.getElementsByTagName("div")
console.log($jqDivs);
// $jqDivs.html("aaaaa");
// html/val 设置值会设置全部，取值默认取第一个匹配的元素

// 3、类名选择器
let $jqDivss = $(".ap");
console.log($jqDivs === $jqDivss);

// 4、复合选择器
let $jqobj = $(".ap, p");
console.log($jqobj);

// 5、通配符选择器(*)

// 二、层次选择器
//1、ancestor    descendant选择器(祖先 后代)  用于在给定的祖先元素下匹配所有的后代元素
let $jqArr = $("#box3 p").html("hfioaefjo");
// box3下的所有p标签都会匹配到

// 2、parent > child 选择器     用于在给定父元素下匹配所有的子元素，
// 使用该选择器只能选择父元素下的直接子元素
let $jqObj = $("#box3 > p").html("defr");

// 3、prev + next 选择器        用于匹配所有紧挨在prev元素后的next元素。
// 其中prev + next 是两个同级的元素
$("#box1 + div").html("为什么要定义变量呢");

// 4、prev ~ siblings 选择器    匹配prev元素之后的所有siblings元素。
// 其中prev和siblings是相同辈元素
$("#box1 ~ div").html("cool");

// 三、过滤选择器
// 1、简单过滤器
/*
简单过滤器是指以冒号开头，通常用于实现简单过滤效果的过滤器
:first          说明:匹配找到的第一个元素，它是与选择器结合使用的
                示例: $(".pp:first").html("sdfgwrhgwer")
:last           说明:匹配找到的最后一个元素，它是与选择器结合使用的
:even           说明:匹配所有索引值为偶数的元素，索引从0开始
                示例: let $jqA = $(".pp:even").addClass("aap")
                      $jqA.removeClass("aap")
:odd            说明:匹配所有索引值为奇数的元素，索引从0开始
:eq(index)      说明:匹配一个给定索引值的元素
:gt(index)      说明:匹配所有大于给定索引值的元素
:Iq(index)      说明:匹配所有小于给定索引值的元素
:header         说明:匹配如h1、h2、h3之类的标题元素
                示例:$(".pp:header")
:not(selector)  说明:去除所有与给定选择器匹配的元素
                示例:$("p:not(.pp)")
:animated       说明:匹配所有正在执行动画效果的元素
 */

// 2、内容过滤器
/*
内容过滤器就是通过DOM元素包含的文本内容以及是否含有匹配的元素进行筛选
:contains(text) 说明:匹配包含给定文本的元素
                示例:$("p:contains('sunck')")
:empty          说明:匹配所有不包含子元素或者文本的空元素
                示例:$("div:empty")
:has(selector)  说明:匹配含有选择器所匹配元素的元素
                示例:$("div:has(p)")
:parent         说明:匹配含有子元素或者文本的元素
 */

// 3、可见性过滤器
/*
元素的可见状态有两种，分别是隐藏状态和显示状态。可见性过滤器是利用元素的可见状态匹配元素的
:visible        说明:匹配所有可见元素
:hidden         说明:匹配所有不可见元素
                注意:在应用:hidden过滤器时，display属性是none以及input元素的type属性为
                hidden的元素都会被匹配到
*/

// 4、表单对象的属性过滤器
/*
表单对象的属性过滤器通过表单元素的状态属性(例如选中、不可用等状态)匹配元素
:checked        说明:匹配所有选中的被选中元素
:disabled       说明:匹配所有不可用的元素
:enabled        说明:匹配所有可用的元素
:selected       说明:匹配所有选中的option元素
*/

// 5、子元素过滤器
/*
子元素过滤器就是筛选给定某个元素的子元素，具体的过滤条件由选择器的种类而定
:first-child    说明:匹配所有给定元素的第一个子元素
                示例:$("ul li:first-child")   匹配ul元素中的第一个子元素li
:last-child     说明:匹配所有给定元素的最后一个子元素
:only-child     说明:如果某个元素是它父元素中唯一的子元素，那么将会被匹配。
                     如果父元素中含有其它元素，则不会被匹配
                示例:$("ul li:only-child")    匹配只含有一个li元素的ul元素中的li
:nth-child(index/even/odd/equation)
                说明:匹配每个父元素下的第index个子或奇偶元素，index从1开始，而不是从0开始
                示例:$("ul li:nth-child(even)")
                     $("ul li:nth-child(3)")
 */

// 四、属性选择器
/*
属性选择器就是通过元素的属性作为过滤条件进行筛选对象
[attribute]             说明:匹配包含给定属性的元素
                        示例:$("div[name]")   匹配含有name属性的div元素
[attribute=value]       说明:匹配属性值为value的元素
[attribute!=value]      说明:匹配属性值不等于value的元素
[attribute*=value]      说明:匹配属性值含有value的元素
[attribute^=value]      说明:匹配属性值以value开始的元素
[attribute$=value]      说明:匹配属性值以value结束的元素
[selector1][selector2][selectorN]
                        说明:复合属性选择器，需要同时满足多个条件时使用
                        示例:$("div[id][name^='test']")
                        匹配具有id属性并且name属性是以test开头的div元素
 */

// 五、表单选择器
/*
表单选择器是匹配经常在表单内出现的元素。但是匹配的元素不一定在表单中
:input                  说明:匹配所有的input元素
                        示例:$(":input")   匹配所有的input元素
                             $("form :input")   匹配<form>标记中的所有input元素，
                             需要注意，在form和:之间有一个空格，表示祖先和后代，
                             不加空格表示过滤器，但是并没有:input过滤器
:button                 说明:匹配所有的按钮，即type="button"的input元素
:checkbox               说明:匹配所有的复选框
:file                   说明:匹配所有的文件域
:hidden                 说明:匹配所有的不可见元素，或者type为hidden的元素
:image                  说明:匹配所有的图像域
:password               说明:匹配所有的密码域
:radio                  说明:匹配所有的单选按钮
:reset                  说明:匹配所有的重置按钮，即type="reset"的input元素
:submit                 说明:匹配所有的提交按钮，即type="submit"的input元素
:text                   说明:匹配所有的单行文本域
 */

// checkbox默认选中
// let $jqObj = $("form :checkbox");
// $jqObj.attr("checked", "checked");
