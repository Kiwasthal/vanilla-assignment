import Logo from '/Logo.svg';

const createNavbar = () => {
  const header = document.createElement('header');

  //Create the Nav
  const navbar = document.createElement('nav');
  navbar.classList.add('nav');

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
    navMenu.appendChild(createListItem(listTitles[i], i === 0 ? true : false));
  }

  //Add menu to the Navbar
  navbar.appendChild(navMenu);

  //Add Localization
  let localization = document.createElement('h3');
  localization.innerHTML = '<span>EN</span> | <span>GR</span>';

  //Appden Localization to navbar
  navbar.appendChild(localization);

  document.body.appendChild(header);
  header.appendChild(navbar);
};

//Intitialize Header

export default createNavbar;
