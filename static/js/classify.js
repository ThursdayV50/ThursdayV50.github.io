// 获取需要改变宽度的div元素  
const div = document.getElementsByClassName('classifyimgbox');
// alert(div);

// 添加窗口resize事件的监听器  
window.addEventListener('resize', function () {
    console.log(window.innerWidth);
    // 判断窗口宽度是否小于750px  
    if (window.innerWidth < 750) {
        // 将div的宽度设置为100%  
        div.style.width = '100%';
    } else {
        // 将div的宽度设置为原来的值  
        div.style.width = div.getAttribute('80%');
    }
});