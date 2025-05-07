let lastAction = "";
let aiImageBlob = null;

function useAIGenerated() {
    const preview = document.getElementById("ai-preview");
    const loadingText = document.getElementById("loading-text");
    const url = `${window.location.origin}/api/fetch-ai-avatar`;

    loadingText.style.display = "block";
    preview.style.display = "none";

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            aiImageBlob = blob;
            lastAction = "ai";

            preview.src = URL.createObjectURL(blob);
            preview.onload = () => {
                loadingText.style.display = "none";
                preview.style.display = "block";
            };

            document.getElementById("userImg").value = "";
        })
        .catch(err => {
            loadingText.style.display = "none";
            alert("❌ 無法載入 AI 頭像，請稍後再試！");
            console.error("⚠️ AI 頭像抓取失敗：", err);
        });
}

document.getElementById("userImg").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        lastAction = "upload";

        const preview = document.getElementById("ai-preview");
        const loadingText = document.getElementById("loading-text");

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        loadingText.style.display = "none";

        aiImageBlob = null;
    }
});

document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fileInput = document.getElementById("userImg");
    const uploadedFile = fileInput.files[0];

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    if (lastAction === "ai" && aiImageBlob) {
        formData.append("avatar", aiImageBlob, "ai_avatar.jpg");
    } else if (uploadedFile) {
        formData.append("avatar", uploadedFile);
    } else {
        alert("請選擇或生成一個頭像！");
        return;
    }

    fetch(`${window.location.origin}/api/register`, {
        method: "POST",
        credentials: "include",
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            console.log("📦 JSON 回傳資料：", data);
            if (data.success) {
                alert("註冊成功！請重新登入");
                window.location.href = "login.html";
            } else {
                alert("註冊失敗：" + data.error);
            }
        })
        .catch(err => {
            console.error("發生錯誤：", err);
            alert("發生錯誤：" + err.message);
        });
});
