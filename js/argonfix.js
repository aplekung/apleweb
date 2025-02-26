document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const isActive = answer.style.display === "block";

            // ปิดทุกอันก่อน
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

            // สลับการเปิด-ปิด
            answer.style.display = isActive ? "none" : "block";
        });
    });
});
