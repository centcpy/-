var getCode = document.querySelector('.getCode');
var submit_ = document.getElementById('submit');
var input_ = document.getElementsByTagName('input');
var tshi_ = document.getElementsByClassName('ts');
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
input_[1].onblur = function () {
    if (input_[1].value == num) {
        tshi_[1].innerHTML = '验证码输入正确';
        tshi_[1].style.color = 'green';
    } else {
        tshi_[1].innerHTML = '验证码输入错误';
        tshi_[1].style.color = 'red';
    }
}
submit_.onclick = function () {
    var newiphone = document.cookie.split('; ');
    getCookie('iphone');
    getCookie('password');
    if (input_[0].value == getCookie('iphone') && input_[2].value == getCookie('password')) {
        alert('登录成功');
        localStorage.setItem('user', input_[0].value);
        localStorage.setItem('pass', input_[2].value);
        localStorage.setItem('islogin', true);
        window.location.href = 'http://127.0.0.1:5500/%E6%9E%81%E6%9E%9C%E7%BD%91%E7%AB%99/index.html';
    } else {
        alert('账号或密码不存在');
    }
}