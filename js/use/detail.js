//倒计时
function fn() {
    var time_ = document.getElementsByClassName('time')[0];
    var newTime = new Date();
    var fureTime = new Date(2022, 11, 1);
    var shijiancha = fureTime - newTime;
    var day = Math.floor(shijiancha / 1000 / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day
    var hour = Math.floor(shijiancha / 1000 / 60 / 60 % 24);
    hour = hour < 10 ? '0' + hour : hour
    var min = Math.floor(shijiancha / 1000 / 60 % 60)
    min = min < 10 ? '0' + min : min
    var s = Math.floor(shijiancha / 1000 % 60);
    s = s < 10 ? '0' + s : s
    time_.innerHTML = '申请剩余时间：' + day + '天' + hour + '时' + min + '分' + s + '秒';
    if (day <= 0 && hour <= 0 && min <= 0 && s <= 0) {
        time_.innerHTML = '申请时间结束';
        clearInterval(time);
    }
}
var time = setInterval(fn, 1000);
//申请人数和数量变化
var btn_ = document.querySelector('.btn');//立即申请p标签
var lable_ = document.querySelector('.label');
var num = 0;
btn_.firstElementChild.onclick = function () {
    num++;
    console.log();
    lable_.firstElementChild.innerHTML = 126 + num + '人申请';
    lable_.lastElementChild.innerHTML = 20 - num + '台';
    if (lable_.lastElementChild.innerHTML < 0 + '台') {
        alert('抢光了');
        lable_.lastElementChild.innerHTML = 0 + '台';
        lable_.firstElementChild.innerHTML = 146 + '人申请';
    }
}