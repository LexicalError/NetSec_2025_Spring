document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitButton = this.querySelector("button");

    if (!username || !password) {
        alert("請輸入帳號與密碼！");
        return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "登入中...";

    fetch(`${window.location.origin}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        console.log("伺服器回應：", data);
        if (data.success) {
            alert("登入成功！");
            window.location.href = "comment.html";
        } else {
            alert("登入失敗：" + data.error);
        }
    })
    .catch(err => {
        console.error("發生錯誤：", err);
        alert("發生錯誤：" + err.message);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.innerText = "送出";
    });
});