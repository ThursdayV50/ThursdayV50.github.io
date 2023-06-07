//获取所有的li元素
var lis = document.querySelector(".tab_list").querySelectorAll("li");
//获取所有的item元素
var items = document.querySelectorAll(".item");
//循环给每个li绑定click事件
for (var i = 0; i < lis.length; i++) {
    //给每个li元素添加index属性，第几个index为几
    lis[i].setAttribute("index", i);
    //给每个li绑定click事件，点击后出现以下事情
    lis[i].onclick = function () {
        //排他思想，将所有的标签样式都去掉
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
        }
        //样式为空后，设置当前的样式为current
        this.className = "current";
        //获取当前所在li的index
        // var index = this.getAttribute("index");
        // //排他思想，将所有的item隐藏
        // for (var k = 0; k < items.length; k++) {
        //     //将所有的item设置为display:none
        //     items[k].style.display = "none";
        // }
        // //设置当前li下的对应的内容
        // items[index].style.display = "block";
    }
}