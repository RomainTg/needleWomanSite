/* Gestion du menu burger */

const burger    = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('active');
  burger.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (
    mobileNav.classList.contains('active') &&
    !mobileNav.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) closeMenu();
});

function closeMenu() {
  mobileNav.classList.remove('active');
  burger.classList.remove('active');
  document.body.style.overflow = '';
}

/* Carrousel Galerie */

const mainImg   = document.getElementById('carouselMainImg');
const thumbs    = document.querySelectorAll('.thumb');
const thumbsRow = document.getElementById('carouselThumbs');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight= document.getElementById('arrowRight');

let current = 0;

function goTo(index) {
  thumbs[current].classList.remove('active');
  current = (index + thumbs.length) % thumbs.length;
  thumbs[current].classList.add('active');

  mainImg.classList.add('fade');
  setTimeout(() => {
    mainImg.src = thumbs[current].src;
    mainImg.classList.remove('fade');
  }, 250);

  thumbsRow.scrollTo({
    left: thumbs[current].offsetLeft - (thumbsRow.offsetWidth / 2) + (thumbs[current].offsetWidth / 2),
    behavior: 'instant'
  });
}

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => goTo(i));
});

arrowLeft.addEventListener('click',  () => goTo(current - 1));
arrowRight.addEventListener('click', () => goTo(current + 1));