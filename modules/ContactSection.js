import Map from '/Contact_Map.png';

//Created to group field objects
import { inputFields } from './Helpers/FormFields';
import createCategoryFields from './Helpers/CreateFormCategories';
import createMessageField from './Helpers/CreateTextareaField';
import createFormCheckBoxes from './Helpers/CreateFormCheckboxes';

const createContactSection = parent => {
  let contactSection = document.createElement('section');
  contactSection.classList.add('contact');
  parent.appendChild(contactSection);

  //Creating the map
  let contactMap = document.createElement('img');
  contactMap.classList.add('contact-map');
  contactMap.src = Map;
  contactMap.alt = 'City Map';

  contactSection.appendChild(contactMap);

  const createForm = (parent => {
    let formWrapper = document.createElement('div');
    formWrapper.classList.add('contact-formwrapper');
    contactSection.appendChild(formWrapper);

    let formTitle = document.createElement('h2');
    formTitle.textContent = 'Contact Us';

    let formPara = document.createElement('p');
    formPara.textContent =
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    formWrapper.appendChild(formTitle);
    formWrapper.appendChild(formPara);

    //Creating the form
    let formBody = document.createElement('form');
    formWrapper.appendChild(formBody);

    //Looping over the Helper fields to group inputs
    inputFields.forEach(field => {
      let fieldContainer = document.createElement('div');
      fieldContainer.classList.add('form');

      //Create the input
      let formField = document.createElement(field.element);
      formField.classList.add(field.class);
      formField.id = field.id;
      formField.ariaLabel = field.aria;
      formField.required = field.required;

      fieldContainer.appendChild(formField);

      //Creating input label
      let fieldLabel = document.createElement('label');
      fieldLabel.htmlFor = field.id;
      fieldLabel.classList.add(field.labelClass);
      fieldLabel.textContent = field.label;

      fieldContainer.appendChild(fieldLabel);

      let fieldError = document.createElement('span');
      fieldError.classList.add('form-error');
      fieldError.textContent = field.helpfulText;

      fieldContainer.appendChild(fieldError);

      formBody.appendChild(fieldContainer);
    });
    createCategoryFields(formBody);
    createMessageField(formBody);

    //Create Checkbox helper text
    let checkboxHeader = document.createElement('p');
    checkboxHeader.classList.add('checkboxText');
    checkboxHeader.textContent = 'Please select at least one of the following:';
    formBody.appendChild(checkboxHeader);

    createFormCheckBoxes(formBody);

    //Create the submit button

    let submitButtonWrapper = document.createElement('div');
    submitButtonWrapper.classList.add('form-btnwrapper');

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.ariaLabel = 'Submit';
    submitButton.type = 'submit';

    submitButtonWrapper.appendChild(submitButton);
    formBody.appendChild(submitButtonWrapper);
  })();
};

export default createContactSection;
