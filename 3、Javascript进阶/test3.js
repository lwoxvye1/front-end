let jsBox = document.getElementById("box");
let jsImg = document.getElementById("pic");
let jsLeft = document.getElementById("left");
let jsRight = document.getElementById("right");
let jsListArr = document.getElementsByTagName("li");

// 第一个li设置红色
jsListArr[0].style.backgroundColor = "red";

// 启动一个定时器去更换jsPic中的src属性
let currentPage = 1;
let timer = setInterval(startLoop, 1000);
function startLoop() {
    changePage();
    currentPage++;
}

function changePage(){
    if (currentPage === 4){
        currentPage = 1;
    }else if (currentPage === 0){
        currentPage = 3;
    }
    jsImg.src = currentPage + ".jpg";
    // 清空所有小圆点的颜色
    for (let i = 0; i <  jsListArr.length; i++){
        jsListArr[i].style.backgroundColor = "#aaaaaa"
    }
    jsListArr[currentPage - 1].style.backgroundColor = "red";
}

// 鼠标进入box，轮播就停,两边的箭头同时显示
jsBox.addEventListener("mouseover", function () {
    // 停止定时器
    clearInterval(timer);
    // 显示左右按钮
    jsLeft.style.display = "block";
    jsRight.style.display = "block";
},false);

jsBox.addEventListener("mouseout", function () {
    // 重启定时器
    timer = setInterval(startLoop, 1000);
    // 隐藏左右按钮
    jsLeft.style.display = "none";
    jsRight.style.display = "none";
},false);

// 点击左右按钮
jsLeft.addEventListener("mouseover", deep, false);
jsRight.addEventListener("mouseover", deep, false);
function deep(){
    this.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
}
jsLeft.addEventListener("mouseout", nodeep, false);
jsRight.addEventListener("mouseout", nodeep, false);
function nodeep(){
    this.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
}
jsRight.addEventListener("click", function () {
    currentPage++;
    changePage();
},false);
jsLeft.addEventListener("click", function () {
    currentPage--;
    changePage();
},false);

// 进入小圆点
for (let i = 0; i < jsListArr.length; i++){
    jsListArr[i].addEventListener("mouseover", function () {
        currentPage = parseInt(this.innerHTML);
        changePage()
    }, false)
}

// swiper插件