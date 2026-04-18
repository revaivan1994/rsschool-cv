
// array

const gifts = [
   { name: "Bug Magnet", description: "Able to find bugs in code like they were placed there on purpose.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+200", dream: "+400" } },
   { name: "Console.log Guru", description: "Uses console.log like a crystal ball to find any issue.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+200", dream: "+400" } },
   { name: "Shortcut Cheater", description: "Knows every keyboard shortcut like they were born with them.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+400", dream: "+200" } },
   { name: "Merge Master", description: "Merges branches in Git without conflicts, like a wizard during an exam.", category: "For Work", superpowers: { live: "+200", create: "+500", love: "+200", dream: "+300" } },
   { name: "Async Tamer", description: "Handles asynchronous code and promises like well-trained pets.", category: "For Work", superpowers: { live: "+100", create: "+400", love: "+200", dream: "+300" } },
   { name: "CSS Tamer", description: "Can make Flexbox and Grid work together like they were always best friends.", category: "For Work", superpowers: { live: "+200", create: "+500", love: "+200", dream: "+300" } },
   { name: "Time Hacker", description: "Writes code at the last moment but always meets the deadline.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+500", dream: "+200" } },
   { name: "Layout Master", description: "Creates perfect layouts on the first try, like they can read the designer's mind.", category: "For Work", superpowers: { live: "+500", create: "+300", love: "+200", dream: "+200" } },
   { name: "Documentation Whisperer", description: "Understands cryptic documentation as if they wrote it themselves.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+200", dream: "+100" } },
   { name: "Feedback Master", description: "Accepts client revisions with the Zen calm of Buddha.", category: "For Work", superpowers: { live: "+300", create: "+500", love: "+300", dream: "+400" } },
   { name: "Code Minimalist", description: "Writes code so concise that one line does more than a whole file.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+500", dream: "+200" } },
   { name: "Pixel-Perfect Magician", description: "Aligns elements to the last pixel, even when the design looks abstract.", category: "For Work", superpowers: { live: "+500", create: "+500", love: "+400", dream: "+400" } },
   { name: "Posture Levitation", description: "Can sit for hours, but maintains perfect posture like a ballerina.", category: "For Health", superpowers: { live: "+400", create: "+500", love: "+500", dream: "+400" } },
   { name: "Step Master", description: "Gets 10,000 steps a day even while sitting at the computer.", category: "For Health", superpowers: { live: "+400", create: "+300", love: "+500", dream: "+400" } },
   { name: "Snack Resister", description: "Ignoring desktop snacks like a strict dietician.", category: "For Health", superpowers: { live: "+400", create: "+100", love: "+200", dream: "+400" } },
   { name: "Hydration Bot", description: "Drinks the recommended 2 liters of water a day like a health-programmed robot.", category: "For Health", superpowers: { live: "+500", create: "+300", love: "+500", dream: "+500" } },
   { name: "Sleep Overlord", description: "Sleeps 6 hours but feels like they had 10.", category: "For Health", superpowers: { live: "+400", create: "+500", love: "+500", dream: "+500" } },
   { name: "Break Guru", description: "Takes a stretch break every hour without forgetting, no matter how focused.", category: "For Health", superpowers: { live: "+300", create: "+300", love: "+300", dream: "+400" } },
   { name: "Eye Protector", description: "Can work all day at the monitor without feeling like their eyes are on fire.", category: "For Health", superpowers: { live: "+100", create: "+300", love: "+500", dream: "+400" } },
   { name: "Stress Dodger", description: "Masters meditation right at the keyboard.", category: "For Health", superpowers: { live: "+100", create: "+400", love: "+200", dream: "+400" } },
   { name: "Yoga Coder", description: "Easily switches from coding to yoga and back.", category: "For Health", superpowers: { live: "+400", create: "+400", love: "+400", dream: "+400" } },
   { name: "Healthy Snacker", description: "Always picks fruit, even when chocolate is within arm's reach.", category: "For Health", superpowers: { live: "+400", create: "+300", love: "+200", dream: "+400" } },
   { name: "Chair Exerciser", description: "Manages to work out without leaving the chair.", category: "For Health", superpowers: { live: "+500", create: "+500", love: "+500", dream: "+400" } },
   { name: "Caffeine Filter", description: "Drinks coffee at night and still falls asleep with no problem.", category: "For Health", superpowers: { live: "+400", create: "+300", love: "+500", dream: "+200" } },
   { name: "Joy Charger", description: "Finds joy in the little things—even in a build that finishes unexpectedly fast.", category: "For Harmony", superpowers: { live: "+200", create: "+200", love: "+500", dream: "+500" } },
   { name: "Error Laugher", description: "Laughs at code errors like they're jokes instead of getting angry.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+500", dream: "+500" } },
   { name: "Bug Acceptance Guru", description: "Accepts bugs as part of the journey to perfection — it's just another task.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+500", dream: "+400" } },
   { name: "Spontaneous Coding Philosopher", description: "Philosophically accepts any client suggestion after a long refactor.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+500", dream: "+400" } },
   { name: "Deadline Sage", description: "Remains zen even when the deadline is close and the project manager is stressed.", category: "For Harmony", superpowers: { live: "+200", create: "+200", love: "+300", dream: "+500" } },
   { name: "Inspiration Maestro", description: "Finds inspiration on an empty screen as if masterpieces are already there.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+400", dream: "+100" } },
   { name: "Peace Keeper", description: "Maintains inner calm even in moments of intense crisis.", category: "For Harmony", superpowers: { live: "+200", create: "+200", love: "+500", dream: "+500" } },
   { name: "Empathy Guru", description: "Feels the team's mood and can lift everyone's spirits.", category: "For Harmony", superpowers: { live: "+500", create: "+200", love: "+500", dream: "+500" } },
   { name: "Laughter Generator", description: "Can lighten any tense situation with a joke that even bugs laugh at.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+200", dream: "+500" } },
   { name: "Pause Master", description: "Knows when to just step back from the keyboard and breathe.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+100", dream: "+100" } },
   { name: "Coder Healer", description: "Can support a colleague in their darkest hour, even if it's a 500 error.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+500", dream: "+500" } },
   { name: "Music Code Curator", description: "Creates work playlists so good, even deadlines follow the rhythm.", category: "For Harmony", superpowers: { live: "+300", create: "+200", love: "+300", dream: "+200" } },
];


// helper

const CATEGORY_META = {
   'For Work': { img: 'assets/img/gift-for-work.png', alt: 'work', colorClass: 'title-purple' },
   'For Health': { img: 'assets/img/gift-for-health.png', alt: 'health', colorClass: 'title-green' },
   'For Harmony': { img: 'assets/img/gift-for-harmony.png', alt: 'harmony', colorClass: 'title-pink' },
};

function getCategoryMeta(category) {
   return CATEGORY_META[category] ?? CATEGORY_META['For Work'];
}

function createCardHTML(gift) {
   const { img, alt, colorClass } = getCategoryMeta(gift.category);
   return `
    <div class="best-card-wrapper">
      <div class="best-card-wrapper__img"><img src="${img}" alt="${alt}"></div>
      <div class="best-card-wrapper__bg">
        <div class="best-card-wrapper__title ${colorClass}">${gift.category.toLowerCase()}</div>
        <div class="best-card-wrapper__subtitle">${gift.name}</div>
      </div>
    </div>`;
}

function getStars(value) {
   const count = parseInt(value) / 100;
   return Array.from({ length: 5 }, (_, i) =>
      `<span class="star ${i < count ? 'star--active' : 'star--inactive'}">✳</span>`
   ).join('');
}


// burger

const burgerBtn = document.getElementById('burger-btn');
const mainNav = document.getElementById('main-nav');

if (burgerBtn && mainNav) {
   function openBurger() {
      mainNav.classList.add('nav--open');
      burgerBtn.classList.add('burger--open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
   }

   function closeBurger() {
      mainNav.classList.remove('nav--open');
      burgerBtn.classList.remove('burger--open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
   } 

   burgerBtn.addEventListener('click', () => {
      mainNav.classList.contains('nav--open') ? closeBurger() : openBurger();
   });

   mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeBurger);
   });

  
   window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeBurger();
   });
}

// slider

const wrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider-arrow__left');
const btnRight = document.querySelector('.slider-arrow__right');

if (wrapper && slider && btnLeft && btnRight) {
   let offset = 0;

   const getMax = () => Math.max(0, wrapper.scrollWidth - slider.offsetWidth);
   const getStep = () => getMax() / (window.innerWidth > 768 ? 3 : 6);

   function slideTo(val) {
      offset = Math.max(0, Math.min(getMax(), val));
      wrapper.style.transform = `translateX(-${offset}px)`;
      btnLeft.classList.toggle('disabled', offset <= 0);
      btnRight.classList.toggle('disabled', offset >= getMax() - 1);
   }

   btnLeft.addEventListener('click', () => slideTo(offset - getStep()));
   btnRight.addEventListener('click', () => slideTo(offset + getStep()));
   window.addEventListener('resize', () => slideTo(0));

   slideTo(0);
}


// timer

if (document.getElementById('days')) {
   function updateTimer() {
      const diff = new Date(Date.UTC(new Date().getUTCFullYear() + 1, 0, 1)) - new Date();
      document.getElementById('days').textContent = Math.floor(diff / 864e5);
      document.getElementById('hours').textContent = Math.floor(diff / 36e5) % 24;
      document.getElementById('minutes').textContent = Math.floor(diff / 6e4) % 60;
      document.getElementById('seconds').textContent = Math.floor(diff / 1e3) % 60;
   }
   updateTimer();
   setInterval(updateTimer, 1000);
}

// card random

const bestCard = document.querySelector('.best .best-card');
if (bestCard) {
   bestCard.innerHTML = [...gifts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map(createCardHTML)
      .join('');
}


// card filter
const giftsCard = document.querySelector('.gifts-main .best-card');
const giftsLinks = document.querySelectorAll('.gifts-link');

if (giftsCard && giftsLinks.length) {
   function renderGifts(filter) {
      const filtered = filter === 'all'
         ? gifts
         : gifts.filter(g => g.category.toLowerCase().replace(/\s+/g, '-') === filter);
      giftsCard.innerHTML = filtered.map(createCardHTML).join('');
   }

   function setActiveLink(link) {
      giftsLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
   }

   giftsLinks.forEach(link => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         setActiveLink(link);
         renderGifts(link.getAttribute('href').replace('#', '').toLowerCase());
      });
   });

   renderGifts('all');
   const allLink = document.querySelector('.gifts-link[href="#All"]');
   if (allLink) setActiveLink(allLink);
}


// scroll

if (document.querySelector('.gifts-main')) {
   const scrollBtn = document.createElement('button');
   scrollBtn.className = 'scroll-to-top';
   scrollBtn.innerHTML = '↑';
   document.body.appendChild(scrollBtn);

   window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle(
         'scroll-to-top--visible',
         window.innerWidth <= 768 && window.scrollY >= 300
      );
   });

   scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


// modal

const modal = document.createElement('div');
modal.className = 'modal-overlay';
modal.innerHTML = `
  <div class="modal">
    <button class="modal-close">✕</button>
    <div class="modal-img-wrapper">
      <img class="modal-img" src="" alt="">
    </div>
    <div class="modal-body">
      <div class="modal-category"></div>
      <div class="modal-name"></div>
      <div class="modal-description"></div>
      <div class="modal-superpowers-title">ADDS SUPERPOWERS TO:</div>
      <div class="modal-superpowers">
        ${['live', 'create', 'love', 'dream'].map(key => `
          <div class="modal-superpower-row">
            <span class="modal-superpower-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span class="modal-superpower-value" id="sp-${key}"></span>
            <span class="modal-superpower-stars" id="st-${key}"></span>
          </div>`).join('')}
      </div>
    </div>
  </div>
`;
document.body.appendChild(modal);

function openModal(gift) {
   const { img, alt, colorClass } = getCategoryMeta(gift.category);
   modal.querySelector('.modal-img').src = img;
   modal.querySelector('.modal-img').alt = alt;
   modal.querySelector('.modal-category').textContent = gift.category.toLowerCase();
   modal.querySelector('.modal-category').className = `modal-category ${colorClass}`;
   modal.querySelector('.modal-name').textContent = gift.name;
   modal.querySelector('.modal-description').textContent = gift.description;

   ['live', 'create', 'love', 'dream'].forEach(key => {
      modal.querySelector(`#sp-${key}`).textContent = gift.superpowers[key];
      modal.querySelector(`#st-${key}`).innerHTML = getStars(gift.superpowers[key]);
   });

   modal.classList.add('modal-overlay--open');
   document.body.style.overflow = 'hidden';
}

function closeModal() {
   modal.classList.remove('modal-overlay--open');
   document.body.style.overflow = '';
}

modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.addEventListener('click', e => {
   const card = e.target.closest('.best-card-wrapper');
   if (!card) return;
   const name = card.querySelector('.best-card-wrapper__subtitle').textContent.trim();
   const gift = gifts.find(g => g.name.toUpperCase() === name.toUpperCase());
   if (gift) openModal(gift);
});