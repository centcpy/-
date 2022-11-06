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