    var unblockmusicconfigcache = true;
    var lsp = true;
    //测试不在焦点改变title
    document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = '等你回来^_^';
    } else document.title = normal_title; });
    function Docopy() {
        var oInput = document.createElement('input');
        oInput.readOnly = true;
        oInput.value ="https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml";
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        alert('复制成功＞︿＜');
    }
    function Lsp() {
        if (lsp){
            var b = getBrowser();
            if ( b == "Chrome" || b == "Safari" || b == "Firefox" || b == "Edge" || b == "IE" ){
                alert("(*////▽////*)正在请求下载高清大图");
            }else{
                alert("(*////▽////*)正在请求下载高清大图\n可能需要等待较长时间…\n如果使用Chrome/Safari/Firefox/Edge/IE浏览器\n\n下载会更快哦~");
            }
            downloadFile("https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg", "Genshin Impact.jpg");
        }
        lsp = false;
    }
    function downloadFile(url, fileName) {//跨域文件路径、下载到本地的文件名
    const getUrl=url;
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.onload = function (e) {
        if (x.status === 200){ 
            var b = getBrowser();
            if (b == "Chrome" ||b == "Safari" ||b == "Edge" ) {
                var url = window.URL.createObjectURL(x.response);
                var a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            else if (b == "Firefox") {
                var url = window.URL.createObjectURL(x.response);
                //window.location.href = url;
                parent.location.href = url;
            } else if (b == "IE") {
                window.navigator.msSaveBlob(x.response, fileName);
            }
            else{
                if (getUrl == "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg"){
                    var url ="Images/Genshin Impact.jpg";
                }
                else if (getUrl == "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml"){
                    var url ="File/unblockMusic.yaml";
                }
                else {alert("暂时不提供该文件的下载~");return false;};
                var a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        }
        else{alert("请求出错");}
        }
        x.send();}

        function getBrowser() {
            var ua = window.navigator.userAgent;
            //var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;  
            var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
            var isFirefox = ua.indexOf("Firefox") > -1;
            var isEdge = isChrome && (ua.indexOf("Edg") != -1);
            var isOpera = ua.indexOf('opr') > -1 && window.opr;
            var isChrome = ua.indexOf("Chrome") > -1 && window.chrome ;
            var isSafari = ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") == -1 ;
            var isAndroid = ua.indexOf("Android") > -1 || ua.indexOf('Adr') > -1;
            if (isIE) {
                return "IE";
            } else if (isFirefox) {
                return "Firefox";
            } else if (isOpera) {
                return "Opera";
            } else if (isEdge) {
                return "Edge";
            } else if (isChrome) {
                return "Chrome";
            } else if (isSafari) {
                return "Safari";
            } else if (isAndroid) {
                return "Android";
            } else {
                return "Unkown";
            }
        }
        function whatBrowser() {
            document.Browser.Name.value = navigator.appName;
            document.Browser.Version.value = navigator.appVersion;
            document.Browser.Code.value = navigator.appCodeName;
            document.Browser.Agent.value = navigator.userAgent;
        }
        function unlockmusicConfig(){
            if (unblockmusicconfigcache){
                var clearcache = new XMLHttpRequest();
                clearcache.open("GET", 'https://purge.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml', true);
                clearcache.send();
                flag = false;
        }
        downloadFile("https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml", "解锁网易云配置.yaml");
    }

