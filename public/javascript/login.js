const loginButtonHandler = async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  if (email != "" && password != "") {
    const response = await fetch(`/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Redirecting...");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("No Email or Password provided.");
  }
};

const signupEventHandler = async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value.trim();
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  if (email && username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", loginButtonHandler);

const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", signUpEventHandler);
