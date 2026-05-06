async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let response = await fetch("/src/dist/user.json");
    let users = await response.json();

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Login berhasil!");
      window.location.href = "index.html";
    } else {
      alert("Email atau password salah!");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

function checkLogin() {
  const user = sessionStorage.getItem("user");

  if (user) {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
}

checkLogin();