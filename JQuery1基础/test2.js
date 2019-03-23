// 1、JQuery对元素内容操作
/*
<div>
    <p>sunck is a good man</p>
</div>

元素的内容是指定义元素的起始标记和结束标记之间的内容，可以分为文本内容和HTML内容

文本内容:div元素的文本内容为"sunck is a good man"，文本内容不包含元素的子元素，
只包含元素的文本内容

HTML内容:div元素的HTML内容为"<p>sunck is a good man</p>"，HTML内容不仅包含元素的文本内容，
而且还包含元素的子元素
 */

// 2、JQuery对元素内容操作(对文本内容操作)
$(document).ready(function () {
    let $div = $("#box");
    console.log($div.text());       // 如果有多个div，拿的是第一个的
    //  text():用于获取全部匹配元素的文本内容，也可以解析XML文档元素的文本内容
    $div.text("sunck is a nice man");
    //  text(val):用于设置全部匹配元素的文本内容
    //  注意:元素原来的内容将被新设置的内容替换掉，包括HTML内容
    //  注意:设置文本内容时，即使内容包含HTML代码，也将被认为是普通文本，
    //  并不能作为HTML代码被浏览器解析

// 3、JQuery对元素内容操作(对HTML内容操作)
/*
    html()
    html(val)
    注意:html()和html(val)不能用于XML文档，但是可以用于XHTML文档
 */

// 4、JQuery对元素值操作
    let $inp = $("#inp");
    $inp.val("nice man");
    console.log($inp.val());

    // $("input").val([2])
    // $("select").val(["1", "3"])
    // 除了value，val还可以操作check、select、radio

// 5、JQuery对DOM节点进行操作(创建节点)
    // 元素节点
    let $jsp = $("<p>1</p>");
    console.log($jsp);

    // 文本节点
    $("<p>sunck is a good man</p>");

    // 属性节点
    $("<p id='p'>sunck is a good man</p>");

// 6、JQuery对DOM节点进行操作(插入节点之在元素内部插入)
    /*
    append(content)     为所有匹配的元素的内部追加内容
    appendTo(content)   将所有匹配的元素添加到另一个元素集合中
    prepend(content)    为所有匹配的元素的内部追加内容，与append相反，
                        prepend是在所有子元素最前面插入
    prependTo(content)
     */
    let $box1 = $("#box1");
    $box1.append($jsp);     // 同理也是有几个插入几个
    $jsp.appendTo($box1);

// 6、JQuery对DOM节点进行操作(插入节点之在元素外部插入)
    /*
    after(content)          在每一个匹配的元素之后插入
    insertAfter(content)    appendTo()
    before(content)         前面
    insertBefore(content)
     */
    let $jsp2 = $("<p>2</p>");
    $box1.after($jsp2);
    $jsp2.insertAfter($box1);
    $box1.before($jsp2);

// 7、JQuery对DOM节点进行操作(删除节点)
    /*
    remove()        用于从DOM中删除匹配的元素(包括其中的后代节点)(删除JQuery对象)
    detach()        用于从DOM中删除匹配的元素(和remove()类似)(不删除JQuery对象)
    empty()         该方法并不是删除节点，而是将节点清空，该方法可以清空元素中所有的后代节点
     */
    $("#box1 p:first-child").remove();
    // $("#box1 p:first-child").detach()

// 8、JQuery对DOM节点进行操作(复制节点)
    $("#box1 p:eq(1)").bind("click", function () {
        $(this).clone(true).insertAfter($(this));         // this是DOM对象，先要变成JQuery对象
    });  // bind()绑定事件
    // 加参数true可以将原来的事件处理程序也一并复制，即复制的元素也有点击事件

// 9、JQuery对DOM节点进行操作(替换节点)
    /*
    replaceAll(selector)
    replaceWith(content)
     */
    $("#box3").replaceWith("<div id='box3'>sunck</div>");
    $("<div id='box2'>good</div>").replaceAll("#box2");

// 10、JQuery对DOM节点进行操作(遍历节点)
    $("p").each(function (index) {
        $(this).attr("title", "我是第" + (parseInt(index)+1) + "个")
    });

// 11、JQuery对DOM节点进行操作(包裹节点)
    let $input = $("input");
    /*
    wrap()      把匹配到每一个标签用标签包裹起来
    unwrap()    把匹配到每一个标签的父节点去除掉
    wrapAll()   整体包裹    在所有匹配到的标签的外面加一个标签，把匹配到的标签整体包裹起来
    wrapInner() 包裹内部    包裹内部    将匹配到的标签内部包裹起来
     */
    $input.wrap("<div></div>");
    $input.unwrap();

// 12、JQuery对元素的CSS样式操作(通过修改CSS类实现)
    /*
    addClass(class)     为所有匹配的元素添加指定的CSS类名
    removeClass(class)  为所有匹配的元素中删除全部或者指定的class类
    toggleClass(class)  如果存在就删除一个CSS类，如果不存在就添加一个CSS类
    toggleClass(class, switch)  如果switch参数为true则加上对应的CSS类，否则就删除
     */
    let $jqDiv = $("div");
    $jqDiv.addClass("change1");
    $jqDiv.removeClass("change1");

// 13、JQuery对元素的CSS样式操作(通过修改CSS属性实现)
    let $jqDiv2 = $("#box2");
    $jqDiv2.css("backgroundColor", "yellow");
    console.log($jqDiv2.css("backgroundColor"));
});