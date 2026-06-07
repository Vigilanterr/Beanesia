    const user = JSON.parse(sessionStorage.getItem("user") );

    if (!user) {
      window.location.href = "/src/pages/Login.html";
    } else {
      const foto = user.foto;

      document.getElementById("foto-profil").src  = foto;
      document.getElementById("foto-side").src    = foto;
      document.getElementById("foto-navbar").src  = foto;

      document.getElementById("nama-pengguna").textContent    = user.name    
      document.getElementById("nama-user").textContent        = user.name     
      document.getElementById("nama-side").textContent        = user.name     
      document.getElementById("username-user").textContent    = user.username
      document.getElementById("username-side").textContent    = user.username
      document.getElementById("tgl-bergabung").textContent    = user.bergabung 
      document.getElementById("email-user").textContent       = user.email    
      document.getElementById("phone-user").textContent       = user.phone    
      document.getElementById("kota-user").textContent        = user.kota     
      document.getElementById("total-pesanan").textContent    = user.totalPesanan  
    }

    function logout() {
      sessionStorage.removeItem("user");
      window.location.href = "/src/pages/Login.html";
    }