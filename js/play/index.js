var more = document.getElementsByClassName('more')[0];

more.onclick = function () {
    // more.setAttribute('class', 'loading');
    // load.appendChild(more);
    // more.innerHTML = '正在加载中';
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
                alert('网络加载失败');
            }
        }
    }
}
var index = -1;
var flg = true;
function show(data) {
    // console.log(data);
    if (flg) {
        index++;
        if (index >= data.length - 1) {
            more.innerHTML = '数据加载完毕!';
            flg = false;
        }
        for (var item of data[index]) {
            var ul = document.getElementById('myDiv');
            var li = document.createElement('li');
            var a_ = document.createElement('a');
            var img = document.createElement('img');
            img.src = item.img;
            img.width = '220';
            img.height = '130';
            a_.appendChild(img);
            var info = document.createElement('div');
            info.className = 'info';
            a_.appendChild(info);
            var p = document.createElement('p');
            p.className = 'name';
            info.appendChild(p);
            p.innerHTML = item.text;
            var span1 = document.createElement('span');
            span1.innerHTML = item.description;
            p.appendChild(span1);
            var info_cont = document.createElement('div');
            info_cont.className = 'info_cont';
            info.appendChild(info_cont);
            var span2 = document.createElement('span');
            span2.className = 'price';
            span2.innerHTML = item.price;
            info_cont.appendChild(span2);
            var icon = document.createElement('div');
            icon.className = 'icon';
            info_cont.appendChild(icon);
            var span3 = document.createElement('span');
            span3.innerHTML = item.like;
            span3.className = 'xin';
            icon.appendChild(span3);
            var span4 = document.createElement('span');
            span4.innerHTML = item.words;
            icon.appendChild(span4);
            li.appendChild(a_);
            ul.appendChild(li);
        }
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