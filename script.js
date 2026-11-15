const button = document.querySelector("#contactButton");
const message = document.querySelector("#message");

if (button && message) {
    button.addEventListener("click", function () {
        message.textContent = "Спасибо! Я свяжусь с вами.";
    });
}

document.querySelectorAll(".email-copy").forEach((emailButton) => {
    emailButton.addEventListener("click", async () => {
        const email = emailButton.dataset.email;
        try {
            await navigator.clipboard.writeText(email);
            emailButton.textContent = "Скопировано!";
            setTimeout(() => {
                emailButton.textContent = email;
            }, 1500);
        } catch {
            emailButton.textContent = "Скопируйте вручную";
        }
    });
});
