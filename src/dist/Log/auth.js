async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let response = await fetch("/src/data/user.json");
    let users = await response.json();

    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Login berhasil!");
      window.location.href = "/src/pages/home.html"; // diubah
    } else {
      alert("Email atau password salah!");
    }
  } catch (error) {
    console.log("Error:", error);
    alert("Terjadi kesalahan saat login. Coba lagi.");
  }
}

function checkLogin() {
  const user = sessionStorage.getItem("user");
  if (user) {
    window.location.href = "/src/pages/home.html";
  }
}

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "/src/pages/Login.html";
  console.log("test");
}

checkLogin();

