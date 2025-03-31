document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulating form submission (Replace this with actual backend integration)
    alert("Thank you! Your message has been sent.");

    // Reset the form after submission
    document.getElementById("contactForm").reset();
});
