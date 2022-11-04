import createNavbar from './Navbar';
import createHero from './Hero';
import createMainSection from './MainSection';
import createFooter from './Footer';
import createContactSection from './ContactSection';

const createLayout = (() => {
  createNavbar();

  let pageHandler = document.createElement('div');
  document.body.appendChild(pageHandler);
  pageHandler.classList.add('page-content');
  createHero(pageHandler);
  createMainSection(pageHandler);
  createContactSection(pageHandler);
  createFooter(pageHandler);

  //Creating a listener so we dont display conflicting elements if menu is active and user resizes to a larger screen

  let handleResizeEvent = e => {
    if (e.currentTarget.innerWidth < 1075) return;
    let header = document.querySelector('header');
    let nav = document.querySelector('header nav');
    if (header.classList.contains('open')) {
      header.classList.replace('open', 'closed');
      nav.classList.replace('open', 'closed');
    }
  };

  window.addEventListener('resize', handleResizeEvent);
})();

export default createLayout;
