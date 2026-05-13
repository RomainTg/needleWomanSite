/* ============================================
   Gestion du menu burger
   Actif sur mobile et tablette portrait (< 768px)
   ============================================ */

const burger    = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

/* Ouvrir / fermer le menu au clic sur le burger */
burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('active');
  burger.classList.toggle('active', isOpen);

  /* Bloquer le scroll du body quand le menu est ouvert */
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Fermer le menu quand on clique sur un lien */
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* Fermer le menu en cliquant en dehors */
document.addEventListener('click', (e) => {
  if (
    mobileNav.classList.contains('active') &&
    !mobileNav.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});

/* Fermer le menu si on redimensionne au-dessus de 768px */
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
});

function closeMenu() {
  mobileNav.classList.remove('active');
  burger.classList.remove('active');
  document.body.style.overflow = '';
}