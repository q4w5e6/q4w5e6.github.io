
    var n=0;
    //测试不在焦点改变title
    document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = '死鬼去哪里了啊(╬▔皿▔)╯！';
    } else document.title = normal_title; });
    function Docopy() {
       var Url2=document.getElementById("url").innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('复制成功＞︿＜');
    }
    function Lsp() {
    n++;
        if(n=1){
            alert("不要乱点啊喂 (*////▽////*)\n\n呐~\n图给你(*^▽^*)");
            Genshin_Impact();
        }
    }
    function Genshin_Impact(){
    let a = document.createElement('a');
        a.href = 'https://cdn.jsdelivr.net/gh/q4w5e6/q4w5e6.github.io@master/Images/Genshin%20Impact.jpg';
        a.download = 'Genshin Impact.png';
        a.click();
    }
