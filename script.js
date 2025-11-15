// alert for homepage
if (window.location.href.indexOf('index.html') !== -1) {
  alert('Hello, thank you for visiting my portfolio! I am coding this myself and it’s currently still a work in progress.');
}

// sidebar
const sidebarBttn = document.getElementById('sidebarBttn');
const sidebar = document.getElementById('sidebar');

// Toggle function
function toggleSidebar() {
  sidebar.classList.toggle('close');
  sidebarBttn.classList.toggle('rotate');
}

sidebarBttn.addEventListener('click', toggleSidebar);
