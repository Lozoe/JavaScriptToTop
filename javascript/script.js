//页面加载完毕后执行
window.onload = function() {
    var toTop = document.getElementById("btn");
    var timer = null; //定义一个定时器
    var isTop = true;
    //获取页面可视区域的高度
    var clientHeight = document.documentElement.clientHeight;
    //滚动条滚动时触发
    window.onscroll = function() {
        //获取滚动条距离顶部的高度
        var disTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (disTop >= clientHeight) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };
    //获取浏览器滚动条滚动的距离	
    toTop.onclick = function() {
        //设置定时器	
        timer = setInterval(function() {
            //获取滚动条距离顶部的高度
            var disTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-disTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = disTop + speed;
            isTop = true;
            if (disTop === 0) {
                clearInterval(timer);
            }
        }, 30);
    };
};
