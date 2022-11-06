//轮播图
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
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
        lable_.firstElementChild.innerHTML = 146 + '台';
    }

}
//返回顶部
var backTop_ = document.querySelector('.backTop');
window.onscroll = function () {
    var top = document.body.scrollTop || document.documentElement.scrollTop
    var client = document.body.clientTop || document.documentElement.clientTop;
    if (top > client) {
        backTop_.style.display = 'block';
    } else {
        backTop_.style.display = 'none';
    }
    backTop_.onclick = function () {
        var timer = setInterval(function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var spead = Math.floor(-top / 2);
            document.documentElement.scrollTop = document.body.scrollTop = top + spead
            if (top == 0) {
                clearInterval(timer);
            }
        }, 30)
    }
}

// cookie 与首页的交互
window.onload = function () {
    var head_r = document.getElementsByClassName('head_r');
    var div_ = document.getElementsByClassName('right')[0];
    var userName = localStorage.getItem('user');
    var islogin = localStorage.getItem('islogin');
    if (islogin) {
        var str = `<a href="#"><span style="color: red;">欢迎${userName}!</span></a>`;
        for (var i = 0; i < head_r.length; i++) {
            head_r[i].style.display = 'none';
        }
        div_.innerHTML = str;
        div_.className = 'right';
    }
}
// ajax加载数据

// function getData() {
//     var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft');
//     ajax_.open('get', '../data.json');
//     ajax_.send();
//     ajax_.onreadystatechange = function () {
//         if (ajax_.readyState == 4) {
//             if (ajax_.staus == 200) {
//                 console.log(ajax_.responseText);
//             } else {
//                 console.log('加载错误');
//             }
//         }
//     }
// }
// //商品加载
// window.onload = function () {
//     setTimeout(getData, 1500)
// }
// var dataList = [];
var more_btn = document.getElementsByClassName('more-btn')[0];
more_btn.onclick = function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/play/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                show(data);
                // console.log(data);
            } else {
                console.log('加载失败');
            }
        }
    }
}
var index = -1;
// var body = document.getElementsByTagName('body')[0];
var flg = true;
function show(data) {
    // console.log(data);
    if (flg) {
        index++;
        if (index >= data.length - 1) {
            more_btn.innerHTML = '数据加载完毕!';
            flg = false;
        }
        var found_kuwan = document.querySelector('.found-kuwan');
        for (var item of data[index]) {
            var li_ = document.createElement('li');
            var a_ = document.createElement('a');
            var img_ = document.createElement('img');
            var div1_ = document.createElement('div');//info
            var p_ = document.createElement('p');//name
            var br_ = document.createElement('br');
            var span1 = document.createElement('span');
            var div2_ = document.createElement('div');//tip
            var span2 = document.createElement('span');//price
            var div3_ = document.createElement('div');//icon
            var span3 = document.createElement('span');//xin
            var span4 = document.createElement('span');//look
            div1_.setAttribute('class', 'info');
            p_.setAttribute('class', 'name');
            div2_.setAttribute('class', 'tip');
            span2.setAttribute('class', 'price');
            div3_.setAttribute('class', 'icon');
            span3.setAttribute('class', 'xin');
            span4.setAttribute('class', 'look');
            img_.src = item.img;
            p_.innerHTML = item.text;
            span2.innerHTML = item.price;
            span3.innerHTML = '3';
            span4.innerHTML = '4';
            div3_.appendChild(span3);
            div3_.appendChild(span4);
            div2_.appendChild(span2);
            div2_.appendChild(div3_);
            p_.appendChild(br_);
            p_.appendChild(span1);
            div1_.appendChild(p_);
            div1_.appendChild(div2_);
            a_.appendChild(img_);
            a_.appendChild(div1_);
            li_.appendChild(a_);
            found_kuwan.appendChild(li_);
        }
    }

}