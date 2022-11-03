// 设置cookie 键  值   时间
function setCookie(key, value, time) {
    var date_ = new Date();
    date_.setDate(date_.getDate() + time);
    document.cookie = key + '=' + value + ';expires=' + date_;
}
// 获取cookie
function getCookie(key) {
    var arry = document.cookie.split("; ");
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1];
        }
    }
}
// 删除cookie
function removeCookie(key) {
    this.setCookie(key, '', -1);
}
// 清除cookie
function clearCookie() {
    // var cookie_ = document.cookie;
    var cookieArry = cookie_.split('; ');
    for (var item of cookieArry) {
        var newcookie = item.split('=');
        this.setCookie(newcookie[0], '', -1);
        // this.removeCookie(newArry[0]);
    }
}
