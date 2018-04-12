export default{
    set: function (name, val, expires, path) {
        var cookieStr = name + '=' + val;
        // 有效期
        if(expires){
            cookieStr += ';expires=' + expires.toUTCString();
        }
        // 设置路径
        if(path){
            cookieStr += ';path=' + path;
        }

        // 写入
        document.cookie = cookieStr;
    },
    get:function (name) {
        var cookie = document.cookie;
        if(cookie.length == 0){
            return ;
        }
        cookie = cookie.split('; ');
    }
}