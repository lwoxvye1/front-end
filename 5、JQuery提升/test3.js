// 同步交互与异步交互
// 同步交互:提交请求 --》 等待服务器处理 --》 服务器返回数据，在此期间页面不能进行任何操作(B/S模式)
// 异步操作:请求通过事件触发 --》 服务器处理(然后可以做其它的事情) --》 服务器进行响应(ajax)
// ajax通讯原理:    0、创建xhr(XMLHttpRequest)对象
// 1、初始化请求
// 2、发送请求
// 3、接收服务器端返回的数据
// 4、处理数据

$(document).ready(function () {
   $("#btn").click(function () {
       // 1、发起网络请求
        $.ajax({
            type: "get",
            url: "",
            async: true,  // 是否异步
            data: {a:1, b:2},   // 给服务器发送数据
            dataType: "json",
            success: function (data, textStatus) {
                console.log(data);   // 数据
                console.log(textStatus); // 请求的状态
            }
        });
       // 2、serialize()方法序列化表单
       //   data: $("#form").serialize()  将表单 name属性和value序列化

       // 3、在JQuery当中使用Ajax获取异步数据时，会经常使用到ajaxStart()和ajaxStop()
       // 这两个全局事件。当请求开始时，会触发ajaxStart()方法的回调函数，往往用于编写
       // 一些准备性工作，例如提示"数据正在获取中...";当请求结束时会触发ajaxStop()方法
       // 的回调函数，这一事件往往与前者相配合，说明请求的最后进展状态，例如网站中获取
       // 图片的速度较慢，在图片加载过程中可以给用户提供一些友好的提示和反馈信息，常用
       // 的提示信息为"图片加载中..."，待图片加载完毕后隐藏该提示
       // $(document).ajaxStart(function () {
       //     $("#msg").show()
       // });
       // $(document).ajaxStop(function () {
       //     $("#msg").html("数据获取成功")
       //         .slideUp(1000);
       // });
       // $(document).ready(function () {
       //     $.ajax()
       // })
   })
});