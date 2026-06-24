// FORM VALIDATION
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting until validated

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let service = document.getElementById("service").value;

    // Email validation regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // Phone validation regex (digits only, 10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    f (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (service === "") {
        alert("Please select a service.");
        return;
    }

    alert("Booking submitted successfully! Thank you for choosing Urban Glow Salon.");
});

// INTERACTIVITY: Fade in promotions section
document.addEventListener("DOMContentLoaded", function() {
    const promoSection = document.getElementById("promotions");
    promoSection.style.opacity = 0;

    setTimeout(() => {
        promoSection.style.transition = "opacity 2s";
        promoSection.style.opacity = 1;
    }, 500);
});

// INTERACTIVITY: Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.style.color = "#000000"); // reset all to black
        this.style.color = "#9932cc"; // highlight clicked link in purple
    });
});

// INTERACTIVITY: Dynamic footer year
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Urban Glow Salon | Student Discounts Available`;
});