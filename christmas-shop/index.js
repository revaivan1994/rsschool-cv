 const burgerBtn = document.getElementById('burger-btn');
      const mainNav   = document.getElementById('main-nav');
      burgerBtn.addEventListener('click', () => {
         const isOpen = mainNav.classList.toggle('nav--open');
         burgerBtn.setAttribute('aria-expanded', isOpen);
         burgerBtn.classList.toggle('burger--open', isOpen);
      });
      mainNav.querySelectorAll('.nav-link').forEach(link => {
         link.addEventListener('click', () => {
            mainNav.classList.remove('nav--open');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.classList.remove('burger--open');
         });
      });