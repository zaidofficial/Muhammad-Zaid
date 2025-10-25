// ====== GLOBAL SITE SCRIPT ======
document.addEventListener("DOMContentLoaded", () => {
  // ====== Year Auto-update ======
  document.querySelectorAll('[id^="year"]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ====== Hamburger Menu ======
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-list');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
      });
    });
  }

  // ====== Theme Toggle ======
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') root.setAttribute('data-theme', 'dark');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // ====== Scroll-to-top Button ======
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
