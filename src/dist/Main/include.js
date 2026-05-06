fetch('/src/Components/Navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });

fetch('/src/Components/Hero.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('hero-container').innerHTML = data;
  });