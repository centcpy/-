//注册格式验证
var input_ = document.getElementsByTagName('input');
var getCode = document.querySelector('.getCode');
var tshi_ = document.getElementsByClassName('ts');
var submit_ = document.getElementById('submit');
var iphoneage = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
var user_ = /([\u4e00-\u9fa5]{2,6})/;
var passwordage = /^[a-z0-9]+$/i;
var jy = 'r2b7';
input_[0].onblur = function () {
    if (iphoneage.test(input_[0].value)) {
        tshi_[0].innerHTML = '手机格式输入正确';
        tshi_[0].style.color = 'green';
    } else {
        tshi_[0].style.color = 'red';
        tshi_[0].innerHTML = '手机格式输入错误';
    }
}
input_[1].onblur = function () {
    if (input_[1].value == jy) {
        tshi_[1].innerHTML = '校验码输入正确';
        tshi_[1].style.color = 'green';
    } else {
        tshi_[1].style.color = 'red';
        tshi_[1].innerHTML = '校验码输入错误';
    }
}
var num = Math.floor(Math.random() * 9000) + 1000;
var min = 60;
var time;
getCode.onclick = function () {
    clearInterval(time);
    alert('验证码' + num)
    var time = setInterval(function () {
        min--
        if (min > 0) {
            getCode.innerHTML = '(' + min + '秒)重发';
        }
    }, 1000)
}
input_[2].onblur = function () {
    if (input_[2].value == num) {
        tshi_[2].innerHTML = '验证码输入正确';
        tshi_[2].style.color = 'green';
    } else {
        tshi_[2].innerHTML = '验证码输入错误';
        tshi_[2].style.color = 'red';
    }
}
input_[3].onblur = function () {
    if (user_.test(input_[3].value)) {
        tshi_[3].innerHTML = '用户名输入正确';
        tshi_[3].style.color = 'green';
    } else {
        tshi_[3].innerHTML = '用户名输入错误';
        tshi_[3].style.color = 'red';
    }
}
input_[4].onblur = function () {
    if (passwordage.test(input_[4].value)) {
        tshi_[4].innerHTML = '密码输入正确';
        tshi_[4].style.color = 'green';
    } else {
        tshi_[4].style.color = 'red';
        tshi_[4].innerHTML = '密码输入错误';
    }
}
input_[5].onblur = function () {
    if (input_[4].value == input_[5].value) {
        tshi_[5].innerHTML = '两次密码输入一致';
        tshi_[5].style.color = 'green';
    } else {
        tshi_[5].style.color = 'red';
        tshi_[5].innerHTML = '两次密码输入不一致';
    }
}
submit_.onclick = function () {
    if (iphoneage.test(input_[0].value) && input_[1].value == jy && input_[2].value == num && user_.test(input_[3].value) && passwordage.test(input_[4].value) && input_[4].value == input_[5].value) {
        alert('注册成功')
        setCookie('iphone', input_[0].value);
        setCookie('username', input_[3].value);
        setCookie('password', input_[4].value);
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + 2)
        window.location.href = "../login.html";
    } else {
        alert('注册失败，请重新检查是否正确');

    }
}
