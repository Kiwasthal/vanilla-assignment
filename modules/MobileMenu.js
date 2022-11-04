const createMobileMenu = parent => {
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('mobile');

  let mobileNav = document.createElement('ul');
  mobileNav.classList.add('mobile-nav');
  let menuItems = [
    'Main Page',
    'Page Two',
    'Page Three',
    'About',
    'Our Work',
    'Contact',
  ];
  for (let i = 0; i < menuItems.length; i++) {
    let menuItem = document.createElement('li');
    menuItem.classList.add('mobile-nav-item');
    menuItem.textContent = menuItems[i];

    mobileNav.appendChild(menuItem);
  }

  menuContainer.appendChild(mobileNav);

  //Localization Field
  const localization = document.createElement('h3');
  localization.classList.add('nav-localization');
  localization.innerHTML = '<span>EN</span> | <span> GR</span>';

  menuContainer.appendChild(localization);

  let informationContainer = document.createElement('div');
  informationContainer.classList.add('mobile-information-container');
  let social = document.createElement('div');
  informationContainer.appendChild(social);

  let cookiesPrivacy = document.createElement('h3');
  cookiesPrivacy.classList.add('nav-localization');
  cookiesPrivacy.innerHTML = '<span>Cookies.</span> | <span>Privacy.</span>';

  informationContainer.appendChild(cookiesPrivacy);

  menuContainer.appendChild(informationContainer);

  parent.appendChild(menuContainer);
};

export default createMobileMenu;
