import Logo from '/Logo.svg';

const createFooter = () => {
  let footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.ariaLabel = 'Footer';
  document.body.appendChild(footer);

  let copywrite = document.createElement('span');
  copywrite.classList.add('footer-copywrite');
  copywrite.textContent = '© The standard Copywrite 2020';
  footer.appendChild(copywrite);

  let cookiesAndPrivacy = document.createElement('span');
  cookiesAndPrivacy.classList.add('footer-cookiesprivacy');
  cookiesAndPrivacy.textContent = 'Cookies. | Privacy.';
  footer.appendChild(cookiesAndPrivacy);

  let footerLogo = document.createElement('img');
  footerLogo.classList.add('footer-logo');
  footerLogo.src = Logo;
  footer.appendChild(footerLogo);
};

export default createFooter;
