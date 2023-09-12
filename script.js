
emailjs.init("_rS2NvRLw0hAOlwR8"); // Replace "your_public_key" with your Email.js Public Key

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("phone").value;
        //const subject = document.getElementById("subject").value;
       // const header = document.getElementById("header").value; // Added header field
        const message = document.getElementById("message").value;

        const emailParams = {
            name,
            email,
            tel,
            //subject,
            //header, // Include the header in the emailParams object
            message,
        };

        emailjs.send("service_nwd734h", "template_efxv69o", emailParams) // Replace "default_service" with your service ID
            .then(function (response) {
                alert("Thanks. Your inquiry has been received. We'll respond promptly via your email");
                contactForm.reset();
            })
            .catch(function (error) {
                alert("An error occurred while sending the email. Please try again later.");
            });
    });
});
