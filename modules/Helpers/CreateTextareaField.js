/**
 * Creating the textarea Form Field
 * @param {HTMLFormElement} parent
 */

export const createMessageField = parent => {
  let messageWrapper = document.createElement('div');
  messageWrapper.classList.add('form');

  parent.appendChild(messageWrapper);

  let handleCharactersRemaining = e => {
    let allChars = 100;
    let currentCharacters = e.target.value.length;

    let holder = document.querySelector('.form-textarea ~ p');
    holder.textContent = allChars - currentCharacters;
  };

  let messageTextArea = document.createElement('textarea');
  messageTextArea.ariaLabel = 'Your Messsage';
  messageTextArea.classList.add('form-textarea');
  messageTextArea.maxLength = 100;
  messageTextArea.spellcheck = false;
  messageTextArea.addEventListener('keydown', handleCharactersRemaining);

  messageWrapper.appendChild(messageTextArea);

  let messageTextAreaLabel = document.createElement('span');
  messageTextAreaLabel.ariaHidden = true;
  messageTextAreaLabel.textContent = 'Message';
  messageTextAreaLabel.classList.add('form-label');

  messageWrapper.appendChild(messageTextAreaLabel);

  let messageTextAreaError = document.createElement('p');
  messageTextAreaError.classList.add('form-error');

  messageWrapper.appendChild(messageTextAreaError);
};

export default createMessageField;
