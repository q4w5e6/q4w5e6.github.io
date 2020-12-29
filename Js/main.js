
    var n=0;
    //测试不在焦点改变title
    document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = '死鬼去哪里了啊(╬▔皿▔)╯！';
    } else document.title = normal_title; });
    function Docopy() {
        document.getElementById("unblockmusicUrl").innerHTML = "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml";
        var Url2 = document.getElementById("unblockmusicUrl").innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        document.activeElement.blur();
        alert('复制成功＞︿＜');
    }
    function Lsp() {
    n++;
        if(n=1){
            alert("不要乱点啊喂 (*////▽////*)\n\n呐~\n图给你(*^▽^*)");
            //Genshin_Impact();
            downloadFile("https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg", "Genshin Impact.jpg");
        }
    }
    function downloadFile(url, fileName) {//跨域文件路径、下载到本地的文件名
    const getUrl=url;
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.onload = function (e) {
        if (x.status === 200){ 
            var b = getBrowser();
            if (b == "Chrome" || b== "Safari" ) {
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
                alert("如果使用Chrome/Edge/Firefox/IE浏览器\n\n下载会更快哦~");
                if (getUrl == "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg"){
                    var url ="Images/Genshin Impact.jpg";
                }
                else if (getUrl == "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml"){
                    var url ="File/unblockMusic.yaml";
                }
                else {alert("不提供该文件的下载~");return false;};
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
            var isAndroid = ua.indexOf("Android") > -1;
            var isFirefox = ua.indexOf("Firefox") > -1;
            var isEdge = ua.indexOf('Edge') > -1;
            var isOpera = ua.indexOf('opr') > -1 && window.opr;
            var isChrome = ua.indexOf("Chrome") > -1 && window.chrome;
            var isSafari = ua.indexOf("Safari") > -1 && (ua.indexOf("like Mac OS X") > -1 || ua.indexOf("Macintosh") > -1) ;
            if (isIE) {
                return "IE";
            } else if (isAndroid) {
                return "Android";
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
            } else {
                return "Unkown";
            }
        } 
    function clearCache(){
        var clearcache = new XMLHttpRequest();
        clearcache.open("GET", 'https://purge.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml', true);
        clearcache.send();
    }
    function unlockmusicConfig(){
        var a = document.createElement('a');
        a.href = "https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/File/unblockMusic.yaml";
        a.download = "解锁网易云配置.yaml";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    /*function Genshin_Impact(){
    let a = document.createElement('a');
        a.href = 'https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg';
        a.download = 'Genshin Impact.png';
        a.click();
        }
    function  downloadFile(url, fileName) {//跨域文件路径、下载到本地的文件名
            var x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = 'blob';
            x.onload=function(e) {
                var url = window.URL.createObjectURL(x.response);
                var a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
            }
            x.send();
        }
    */

