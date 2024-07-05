document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletter-form");

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = newsletterForm.querySelector("input[type='email']").value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });
});
