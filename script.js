// alert for homepage
if (window.location.href.indexOf('index.html') !== -1) {
  alert('Hello, thank you for visiting my portfolio! I am coding this myself and it’s currently still a work in progress.');
}

    const sidebar = document.getElementById('sidebar');
    const sidebarBttn = document.getElementById('sidebarBttn');

    // Whole sidebar clickable
    sidebar.addEventListener('click', () => {
        sidebar.classList.toggle('close');
        sidebarBttn.classList.toggle('rotate');
    });

    // Button also clickable, but does NOT double-trigger
    sidebarBttn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevents sidebar click from ALSO firing
        sidebar.classList.toggle('close');
        sidebarBttn.classList.toggle('rotate');
    });


