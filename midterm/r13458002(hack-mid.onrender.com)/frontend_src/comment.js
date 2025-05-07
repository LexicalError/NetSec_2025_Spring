window.addEventListener("DOMContentLoaded", () => {
    const avatarImg = document.getElementById("avatarImg");
    const usernameText = document.getElementById("usernameText");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");
    const submitBtn = document.getElementById("submitBtn");
    const commentInput = document.getElementById("commentInput");
    const commentSection = document.getElementById("commentSection");

    logoutLink.style.display = "none";
    let currentUsername = null;

    // ✅ 建立提示區
    const msgBox = document.createElement("div");
    msgBox.id = "messageBox";
    msgBox.style.position = "fixed";
    msgBox.style.bottom = "20px";
    msgBox.style.left = "50%";
    msgBox.style.transform = "translateX(-50%)";
    msgBox.style.backgroundColor = "#8bc34a";
    msgBox.style.color = "white";
    msgBox.style.padding = "10px 20px";
    msgBox.style.borderRadius = "5px";
    msgBox.style.display = "none";
    msgBox.style.zIndex = 1000;
    document.body.appendChild(msgBox);

    function showMessage(msg) {
        msgBox.textContent = msg;
        msgBox.style.display = "block";
        setTimeout(() => msgBox.style.display = "none", 2000);
    }

    // ✅ 載入留言列表
    function loadComments() {
        fetch(`${window.location.origin}/api/comments`)
            .then(res => res.json())
            .then(data => {
                commentSection.innerHTML = "";

                data.forEach(comment => {
                    const card = document.createElement("div");
                    card.className = "comment-card";

                    const left = document.createElement("div");
                    left.className = "comment-left";

                    const avatar = document.createElement("img");
                    avatar.className = "comment-avatar";
                    avatar.src = `${window.location.origin}${comment.avatar}`;

                    const contentWrap = document.createElement("div");
                    contentWrap.className = "comment-content";

                    const time = document.createElement("div");
                    time.className = "comment-time";
                    time.textContent = `${comment.username} / ${comment.created_at}`;

                    const content = document.createElement("div");
                    content.className = "comment-text";
                    content.textContent = comment.content;

                    contentWrap.appendChild(time);
                    contentWrap.appendChild(content);
                    left.appendChild(avatar);
                    left.appendChild(contentWrap);
                    card.appendChild(left);

                    // ✅ 自己的留言才顯示刪除按鈕
                    if (comment.username === currentUsername) {
                        const delBtn = document.createElement("button");
                        delBtn.className = "delete-btn";
                        delBtn.textContent = "刪除";
                        delBtn.addEventListener("click", () => {
                            if (confirm("確定要刪除這則留言嗎？")) {
                                fetch(`${window.location.origin}/api/comment/${comment.id}`, {
                                    method: "DELETE",
                                    credentials: "include"
                                })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.success) {
                                        showMessage("留言已刪除");
                                        loadComments();
                                    } else {
                                        alert("刪除失敗：" + data.error);
                                    }
                                });
                            }
                        });
                        card.appendChild(delBtn);
                    }

                    commentSection.appendChild(card);
                });
            })
            .catch(err => {
                console.error("留言載入失敗：", err);
            });
    }

    // ✅ 檢查登入狀態
    fetch(`${window.location.origin}/api/check_login`, {
        credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
        if (data.loggedIn) {
            avatarImg.src = `${window.location.origin}${data.avatar}`;
            avatarImg.style.display = "inline-block";
            usernameText.textContent = data.username;
            currentUsername = data.username;

            loginLink.style.display = "none";
            logoutLink.style.display = "inline-block";

            loadComments();
        } else {
            alert("請先登入！");
            window.location.href = "login.html";
        }
    })
    .catch(err => {
        console.error("登入檢查錯誤：", err);
    });

    // ✅ 登出功能
    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`${window.location.origin}/api/logout`, {
            method: "POST",
            credentials: "include"
        })
        .then(() => {
            window.location.href = "login.html";
        });
    });

    // ✅ 送出留言功能
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const content = commentInput.value.trim();
            if (!content) return;

            fetch(`${window.location.origin}/api/comment`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ content })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    commentInput.value = "";
                    loadComments();
                    showMessage("留言成功！");
                } else {
                    alert("留言失敗：" + data.error);
                }
            })
            .catch(err => {
                alert("留言發送錯誤：" + err.message);
            });
        });
    }
});
