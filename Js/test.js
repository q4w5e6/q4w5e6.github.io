var xhr = new XMLHttpRequest();
var url = 'https://dotnet.aspx.cc/SimpleCrossSiteRequests.aspx';
function crossDomainRequest() {
    document.getElementById("content").innerHTML = "开始……";
    if (xhr) {
        xhr.open('GET', url, true);
        xhr.onreadystatechange = handler;
        xhr.send();
    } else {
        document.getElementById("content").innerHTML = "不能创建 XMLHttpRequest";
    }
}
function handler(evtXHR) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            document.getElementById("content").innerHTML = "结果：" + response;
        } else {
            document.getElementById("content").innerHTML = "不允许跨域请求。";
        }
    }
    else {
        document.getElementById("content").innerHTML += "<br/>执行状态 readyState：" + xhr.readyState;
    }
}   