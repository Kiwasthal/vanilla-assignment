import banner_one from '/Hero_Banner_One.png';
import banner_two from '/Hero_Banner_Two.jpg';
import banner_three from '/Hero_Banner_Three.jpg';

console.log(banner_two);

const createHero = () => {
  let slides = [
    {
      url: banner_one,
    },
    {
      url: banner_two,
    },
    {
      url: banner_three,
    },
  ];

  let heroContainer = document.createElement('div');
  heroContainer.classList.add('hero');
  document.body.appendChild(heroContainer);

  //Configure Slider image
  let sliderImage = document.createElement('div');
  sliderImage.classList.add('hero-image');
  sliderImage.style.backgroundImage = `url(${slides[0].url}`;
  heroContainer.appendChild(sliderImage);

  //Hero text
  let textModal = document.createElement('div');
  textModal.classList.add('hero-modal');
  heroContainer.appendChild(textModal);

  let modalTitle = document.createElement('h1');
  modalTitle.classList.add('hero-modal-title');
  modalTitle.textContent = 'S.und Co';
  textModal.appendChild(modalTitle);

  let modalPara = document.createElement('p');
  modalPara.classList.add('hero-modal-content');
  modalPara.textContent =
    ' To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?';
  textModal.appendChild(modalPara);

  // Create Slider Buttons
  let sliderButtonWrapper = document.createElement('div');
  sliderButtonWrapper.classList.add('hero-slidenav');
  sliderButtonWrapper.ariaRoleDescription = 'slider';
  heroContainer.appendChild(sliderButtonWrapper);

  for (let i = 0; i < slides.length; i++) {
    let sliderButton = document.createElement('div');
    sliderButton.classList.add('hero-slidenav-item');
    if (i === 0) sliderButton.classList.add('active');
    //Block scoped function to handle index change on slider
    let handleButtonClick = () => {
      sliderImage.style.backgroundImage = `url(${slides[i].url}`;
      //Update button classes
      let buttons = document.querySelectorAll('.hero-slidenav-item');
      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[i].classList.add('active');
    };

    sliderButton.addEventListener('click', handleButtonClick);
    sliderButtonWrapper.appendChild(sliderButton);
  }
};

export default createHero;
