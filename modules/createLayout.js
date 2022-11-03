import createNavbar from './Navbar';
import createHero from './Hero';
import createMainSection from './MainSection';
import createFooter from './Footer';
import createContactSection from './ContactSection';

const createLayout = (() => {
  createNavbar();
  createHero();
  createMainSection();
  createContactSection();
  createFooter();
})();

export default createLayout;
