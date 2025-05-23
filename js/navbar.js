document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('customNavbarToggler');
  const nav = document.getElementById('navbarNav');

  toggler.addEventListener('click', function () {
    nav.classList.toggle('collapse');
  });
});
