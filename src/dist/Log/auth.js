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
      console.log("berhasil");
      
      window.location.href = "/src/pages/home.html";
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
  const sudahLogin = window.location.pathname.includes("Login.html");

  if (!user && !sudahLogin) {
    window.location.href = "/src/pages/Login.html";
  }
}

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "/src/pages/Login.html";
}

checkLogin();