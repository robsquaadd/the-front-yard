const loginButtonHandler = async (e) => {
  console.log("hi");
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (email != "" && password != "") {
    console.log("Hello World");
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

document
  .getElementById("login-button")
  .addEventListener("click", loginButtonHandler);
