/*let url = "https://67e4f63d18194932a583dbdf.mockapi.io/icecream1"
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_btn");
let data;
let flag = true;

const fetching = async function () {
  const response = await fetch(url);
  data = await response.json();
  console.log(data);
};

fetching();

submitButton.addEventListener("click", () => {
  data.map((res) => {
    if (res.email == email.value && res.password == password.value) {
      window.location.href = "index.html";
      flag = false;
    }
  });
//   if (flag) {
//     alert("wrong credentials");
//   }
});*/

/*let url = "https://67e4f63d18194932a583dbdf.mockapi.io/icecream1";
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_btn");
let data = [];

// Fetching user data and storing it
const fetchData = async () => {
    try {
        const response = await fetch(url);
        data = await response.json();
        console.log("User Data Fetched:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Call fetch function when the page loads
fetchData();

// Login event listener
submitButton.addEventListener("click", () => {
    if (!email.value || !password.value) {
        alert("Please enter both email and password.");
        return;
    }

    // Check if user exists in API data
    const userExists = data.some(user => user.email === email.value && user.password === password.value);

    if (userExists) {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid credentials. Please try again.");
    }
});*/

// API URL to fetch user data
/*let url = "https://67e4f63d18194932a583dbdf.mockapi.io/icecream1";

// Selecting input fields and button
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_btn");

// Array to store fetched user data
let data = [];

// Fetch user data from the API before allowing login
const fetchData = async () => {
    try {
        const response = await fetch(url);
        data = await response.json();
        console.log("User Data Fetched:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Wait for data before allowing login
fetchData();

// Add event listener to login button
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    if (!email.value || !password.value) {
        alert("Please enter both email and password.");
        return;
    }

    // Check if the user exists
    const userExists = data.some(user => user.email === email.value && user.password === password.value);

    if (userExists) {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect after login
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
*/

let loginUrl = "https://67e4f63d18194932a583dbdf.mockapi.io/icecream1";

let loginButton = document.getElementById("submit_btn");

const fetchData = async () => {
    try {
        const response = await fetch(loginUrl);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

loginButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form reload

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    let data = await fetchData();

    // Check if the user exists in API
    let user = data.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Redirecting...");
        localStorage.setItem("loggedIn", "true"); // Save login status
        window.location.href = "index.html"; // Redirect to main website
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

