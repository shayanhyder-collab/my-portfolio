const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙 Dark Mode";
    } else {
        themeBtn.textContent = "☀️ Light Mode";
    }

});


const contactForm = document.getElementById("contactForm");


/* Step 28: Contact Form Validation */



if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        formMessage.textContent =
            "Form validated successfully! Email sending is not connected yet.";

        contactForm.reset();
    });
}
