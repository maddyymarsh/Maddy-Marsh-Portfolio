
    const sidebar = document.getElementById('sidebar');

    // Button also clickable, but does NOT double-trigger
    sidebarBttn.addEventListener('click', (e) => {
        sidebar.classList.toggle('close');
    });

const gradient = document.querySelector(".gradient-bg");

let mouseX = 50;
let mouseY = 50;
let ticking = false;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 100;
  mouseY = (e.clientY / window.innerHeight) * 100;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      gradient.style.setProperty("--x", `${mouseX}%`);
      gradient.style.setProperty("--y", `${mouseY}%`);
      ticking = false;
    });
    ticking = true;
  }
});
