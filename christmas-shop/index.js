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


      const wrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider-arrow__left');
const btnRight = document.querySelector('.slider-arrow__right');

let offset = 0;

function getClicks() {
  return window.innerWidth > 768 ? 3 : 6;
}

function getStep() {
  const totalWidth = wrapper.scrollWidth;
  const visibleWidth = slider.offsetWidth;
  const maxScroll = totalWidth - visibleWidth;
  return maxScroll / getClicks();
}

function getMax() {
  return Math.max(0, wrapper.scrollWidth - slider.offsetWidth);
}

function slideTo(val) {
  offset = Math.max(0, Math.min(getMax(), val));
  wrapper.style.transform = `translateX(-${offset}px)`;
  updateButtons();
}

function updateButtons() {
  const max = getMax();
  btnLeft.classList.toggle('disabled', offset <= 0);
  btnRight.classList.toggle('disabled', offset >= max - 1);
}

btnLeft.addEventListener('click', () => {
  if (offset > 0) slideTo(offset - getStep());
});

btnRight.addEventListener('click', () => {
  if (offset < getMax()) slideTo(offset + getStep());
});

window.addEventListener('resize', () => {
  slideTo(0);
});

updateButtons();