window.onload = function () {
    // 判断是否有某个class
    function hasClass(ele, cls) {
        return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    // //为指定的dom元素添加样式
    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    }
    // //删除指定dom元素的样式
    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    document.getElementsByClassName('select-input')[0].onclick = function () {
        var optionsBox = document.getElementsByClassName('options-box')[0];
        var selectInput = document.getElementsByClassName('select-input')[0];
        // 这里最好用children，不要用childNode, 否则会有多余的text节点
        var lis = optionsBox.children;
        if (hasClass(optionsBox, 'hide')) { // 如果当前不是正在打开选项状态
            removeClass(optionsBox, 'hide')
            addClass(selectInput, 'isActive')
            for (var i = 0; i < lis.length; i++) {
                if (lis[i].innerHTML == selectInput.value) { // 如果之前已经选择过，将之前的选项激活状态
                    addClass(lis[i], 'active')
                } else {
                    removeClass(lis[i], 'active')
                }
            }
        } else {
            addClass(optionsBox, 'hide');
            removeClass(selectInput, 'isActive');
        }
    }

    document.getElementsByClassName('options-box')[0].onclick = function (e) {
        var optionsBox = document.getElementsByClassName('options-box')[0];
        var selectInput = document.getElementsByClassName('select-input')[0];
        //这一行及下一行是为兼容IE8及以下版本
        e = e || window.event;
        var target = e.target || e.srcElement;
        // var reg = /[1-9][0-9]*/g;
        // var String = target.outerHTML;
        // var number = String.match(reg)[0];
        // alert(number);
        // target = '<li value=" + 86" class=" active">' + number[0] + '</li>';
        if (target.tagName.toLowerCase() === "li") {
            // 将选中的值赋值给展示框文本
            selectInput.value = target.innerHTML;
            // 关闭选择列表
            addClass(optionsBox, 'hide');
            // 取消展示框的激活状态
            removeClass(selectInput, 'isActive');
        }
    }

    // 列表中选项滑过效果
    document.getElementsByClassName('options-box')[0].onmouseover = function (e) {
        // 事件代理
        var optionsBox = document.getElementsByClassName('options-box')[0];
        var selectInput = document.getElementsByClassName('select-input')[0];
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.tagName.toLowerCase() === "li") {
            if (target.innerHTML != selectInput.value) { //如果滑过的不是已经选中的，给予暂时的滑过效果
                addClass(target, 'active');
            }
        }
    }

    document.getElementsByClassName('options-box')[0].onmouseout = function (e) {
        var optionsBox = document.getElementsByClassName('options-box')[0];
        var selectInput = document.getElementsByClassName('select-input')[0];
        //这一行及下一行是为兼容IE8及以下版本
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.tagName.toLowerCase() === "li") {
            if (target.innerHTML != selectInput.value) { // 如果滑出的不是已经选中的，将滑过的效果取消
                removeClass(target, 'active');
            }
        }
    }
}
