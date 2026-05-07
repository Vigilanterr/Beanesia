fetch('/src/Components/Landing/Navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });

fetch('/src/Components/Landing/Hero.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('hero-container').innerHTML = data;
  });

fetch('/src/Components/Landing/Footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('Footer').innerHTML = data;
  });