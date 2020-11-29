
    var n=0;
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
        alert("不要乱点啊喂 (*////▽////*)\n\n呐~\n图给你(*^▽^*)");
        if(n=1){
    Genshin_Impact()
            n=0;
        }
    }
    function Genshin_Impact(){
    let a = document.createElement('a');
        a.href = 'https://gitee.com/redamancy_double/q4w5e6.github.io/raw/master/Images/Genshin%20Impact.jpg';
        a.download = 'Genshin Impact.png';
        a.click();
    }
