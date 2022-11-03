/**
 * Creating the textarea Form Field
 * @param {HTMLFormElement} parent
 */

const createFormCheckBoxes = parent => {
  let checkBoxContainer = document.createElement('div');
  checkBoxContainer.classList.add('form-checkbox');

  let createCheckBox = labeltxt => {
    let checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('container');
    checkboxLabel.textContent = labeltxt;

    let checkboxField = document.createElement('input');
    checkboxField.type = 'checkbox';
    checkboxField.id = labeltxt;
    checkboxField.value = labeltxt;
    checkboxField.ariaChecked = false;

    checkboxLabel.appendChild(checkboxField);

    let customCheckmark = document.createElement('span');
    customCheckmark.classList.add('checkmark');

    checkboxLabel.appendChild(customCheckmark);

    return checkboxLabel;
  };

  checkBoxContainer.appendChild(createCheckBox('Option 1'));
  checkBoxContainer.appendChild(createCheckBox('Option 2'));

  parent.appendChild(checkBoxContainer);
};

export default createFormCheckBoxes;
