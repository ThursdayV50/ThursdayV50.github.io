function bindemailCaptchaClick(){
    $("#captcha-btn").click(function (event){
        // $this代表jquery对象
        var $this = $(this);
        //阻止默认事件
        event.preventDefault();
        var email = $("#exampleInputEmail1").val();
        $.ajax({
            url:"/captcha/email?email="+email,
            method:"GET",
            success: function (result){
                var code = result['code'];
            if(code == 200){
                var countdown = 60;
                $this.off("click");
                var timer = setInterval(function(){
                    $this.text(countdown);
                    countdown -= 1;
                    if(countdown <= 0){
                        clearInterval(timer);//清除定时器
                        $this.text("获取验证码");//将按钮的文字改回来
                        bindemailCaptchaClick();}
                        },1000);}//定时为1000ms
                    else{
                        alert(result['message']);
                        }//else
            },//function
            fail: function (error){
                alert("error");
                console.log(error);
            }
        })
    });
}
$(function (){
    bindemailCaptchaClick();
});
