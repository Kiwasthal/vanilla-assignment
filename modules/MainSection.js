const createMainSection = () => {
  let mainSection = document.createElement('section');
  mainSection.classList.add('main');
  document.body.appendChild(mainSection);

  //Create two main items but the order of their children is appended reversely in the dom

  let mainItemFirst = document.createElement('div');
  let mainItemSecond = document.createElement('div');

  mainItemFirst.classList.add('main-item');
  mainItemSecond.classList.add('main-item');

  mainSection.appendChild(mainItemFirst);
  mainSection.appendChild(mainItemSecond);

  let imageFirst = document.createElement('div');
  imageFirst.ariaRoleDescription = 'image';
  imageFirst.ariaLabel = 'pop-art style woman using a camera';
  imageFirst.classList.add('image-container');
  imageFirst.classList.add('one');

  mainItemFirst.appendChild(imageFirst);

  let informationContainerFirst = document.createElement('div');
  informationContainerFirst.classList.add('information-container');

  mainItemFirst.appendChild(informationContainerFirst);

  let informationHeaderDateFirst = document.createElement('h4');
  informationHeaderDateFirst.textContent = 'Since the 1500s';

  let informationHeaderTitleFirst = document.createElement('h3');
  informationHeaderTitleFirst.textContent = 'The standard';

  let informationParagraphFirst = document.createElement('p');
  informationParagraphFirst.textContent =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.';

  informationContainerFirst.appendChild(informationHeaderDateFirst);
  informationContainerFirst.appendChild(informationHeaderTitleFirst);
  informationContainerFirst.appendChild(informationParagraphFirst);

  let informationContainerSecond = document.createElement('div');
  informationContainerSecond.classList.add('information-container');
  informationContainerSecond.classList.add('secondary');

  mainItemSecond.appendChild(informationContainerSecond);

  let informationHeaderDateSecond = document.createElement('h4');
  informationHeaderDateSecond.textContent = 'Since the 1500s';

  let informationHeaderTitleSecond = document.createElement('h3');
  informationHeaderTitleSecond.textContent = 'The standard';

  let informationParagraphSecond = document.createElement('p');
  informationParagraphSecond.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  let searchButton = document.createElement('button');
  searchButton.textContent = 'Search';

  informationContainerSecond.appendChild(informationHeaderDateSecond);
  informationContainerSecond.appendChild(informationHeaderTitleSecond);
  informationContainerSecond.appendChild(informationParagraphSecond);
  informationContainerSecond.appendChild(searchButton);

  let imageSecond = document.createElement('div');
  imageSecond.ariaRoleDescription = 'image';
  imageSecond.ariaLabel = 'pop-art style woman using a camera';
  imageSecond.classList.add('image-container');
  imageSecond.classList.add('two');

  mainItemSecond.appendChild(imageSecond);
};

export default createMainSection;
