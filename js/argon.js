document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".download-btn").addEventListener("click", function() {
        alert("Downloading Argon Executor...");
    });

    document.querySelector(".watch-btn").addEventListener("click", function() {
        alert("Opening Demo Video...");
    });

    document.querySelector(".discord-btn").addEventListener("click", function() {
        window.location.href = "https://discord.com"; // เปลี่ยนเป็นลิงก์ Discord จริง
    });
});
