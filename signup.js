let signupUrl = "https://67e4f63d18194932a583dbdf.mockapi.io/icecream1";

// Get the form and fields
document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents form refresh

    // Get input values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // Simple validation
    if (!username || !email || !phone || !password) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        let response = await fetch(signupUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, phone, password }),
        });

        if (response.ok) {
            alert("Signup successful! Redirecting to login page...");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Signup failed. Try again.");
        }
    } catch (error) {
        console.error("Error signing up:", error);
        alert("Network error. Please check your connection.");
    }
});
