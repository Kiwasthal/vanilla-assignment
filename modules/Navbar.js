import Logo from '/Logo.svg';
import createMobileMenu from './MobileMenu';

const createNavbar = () => {
  const header = document.createElement('header');
  header.classList.add('header', 'closed');

  //Create the Nav
  const navbar = document.createElement('nav');
  navbar.classList.add('nav', 'closed');

  //Create the Logo
  const logo = document.createElement('img');
  logo.src = Logo;
  navbar.appendChild(logo);

  //Create menu Options
  const navMenu = document.createElement('ul');
  navMenu.classList.add('nav-menu');

  //Create the List items
  const createListItem = (title, isActive) => {
    let listItem = document.createElement('li');
    listItem.classList.add('nav-menu-link');
    listItem.textContent = title;
    if (isActive) listItem.classList.add('active');
    return listItem;
  };

  //Create Menu titles
  const listTitles = [
    'Main One',
    'Page Two',
    'Page Three',
    'About Us',
    'Our Work',
    'Contact',
  ];

  //Add the items
  for (let i = 0; i < listTitles.length; i++) {
    //Only the first items gets assigned the active class(underline color)
    navMenu.appendChild(createListItem(listTitles[i], i === 0 ? true : false));
  }

  //Add menu to the Navbar
  navbar.appendChild(navMenu);

  document.body.appendChild(header);
  header.appendChild(navbar);

  //Creating mobile fields//

  let menuHeaderText = document.createElement('h1');
  menuHeaderText.textContent = 'Menu';

  navbar.appendChild(menuHeaderText);

  let burgerButton = document.createElement('div');
  burgerButton.classList.add('btn');
  let innerBtn = document.createElement('span');
  innerBtn.classList.add('btn-burger');
  burgerButton.appendChild(innerBtn);
  //Handling open/closed states of mobile nav
  burgerButton.addEventListener('click', () => {
    if (header.classList.contains('closed')) {
      navbar.classList.replace('closed', 'open');
      header.classList.replace('closed', 'open');
    } else {
      navbar.classList.replace('open', 'closed');
      header.classList.replace('open', 'closed');
    }
  });

  navbar.appendChild(burgerButton);

  //Add Localization
  let localization = document.createElement('h3');
  localization.classList.add('nav-localization');
  localization.innerHTML = '<span>EN</span> | <span>GR</span>';

  //Appden Localization to navbar
  navbar.appendChild(localization);
  createMobileMenu(header);
};

//Intitialize Header

export default createNavbar;
