
    const sidebar = document.getElementById('sidebar');

    // Button also clickable, but does NOT double-trigger
    sidebarBttn.addEventListener('click', (e) => {
        sidebar.classList.toggle('close');
    });


