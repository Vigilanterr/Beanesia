async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let response = await fetch("/src/data/user.json");
    let users = await response.json();

    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Simpan data user ke penyimpanan browser
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Login berhasil!");
      console.log("berhasil");
      
      // Arahkan ke beranda
      window.location.href = "/src/pages/Home.html"; 
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
  // Ngecek apakah saat ini lagi buka halaman login
  const sedangDiHalamanLogin = window.location.pathname.includes("Login.html");

  if (!user && !sedangDiHalamanLogin) {
    // Kalau belum login DAN BUKAN di halaman login, paksa ke login
    window.location.href = "/src/pages/Login.html";
  } else if (user && sedangDiHalamanLogin) {
    // Kalau SUDAH login TAPI malah buka halaman login, langsung lempar ke Home
    window.location.href = "/src/pages/Home.html";
  }
}

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "/src/pages/Login.html";
}

// Jalankan pengecekan setiap kali script dipanggil
checkLogin();

