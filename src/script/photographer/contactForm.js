import formValidator from './formValidator';

export default class ContactForm {

  constructor(name) {
    this.photographerName = name;
    this.bg = document.querySelector('.form-modal-bg');
    this.main = document.querySelector('main');
    this.init();
  }

  openModal() {
    this.bg.style.display = 'flex';
    this.main.setAttribute('aria-hidden', true);
    this.bg.querySelector('input').focus();
  }

  closeModal() {
    this.bg.style.display = 'none';
    this.main.removeAttribute('aria-hidden');
  }

  getInputErrorMessage(name, value) {
    if (formValidator[name].required && !value) {
      return 'Ce champs est requis';
    }

    if (!formValidator[name].pattern?.test(value)) {
      return formValidator[name].errorData || 'format incorrect';
    }

    return false;
  }

  checkFormValidity(data) {
    const errorList = {};
    let isValid = true;
    for (const key in formValidator) {
      const errorMessage = this.getInputErrorMessage(key, data[key]);
      if (errorMessage) {
        errorList[key] = errorMessage;
        isValid = false;
      }

    }

    return {
      isValid,
      errorList,
    };
  }

  sendMessage(data) {
    console.log(data);
    // Send email to photograph
  }

  displayErrors(errorList) {
    for (const key in errorList) {
      this.displayErrorMessage(key, errorList[key]);
    }
  }

  displayErrorMessage(key, message) {
    const errorMessage = document.getElementById(`${key}-error-message`);
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
  }

  hideErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(element => {
      element.style.display = 'none';
    });
  }

  validateSingleElement(element) {
    const errorMessage = this.getInputErrorMessage(
      element.name,
      element.value,
    );

    if (errorMessage) {
      this.displayErrorMessage(element.name, errorMessage);
    } else {
      document.getElementById(`${element.name}-error-message`)
        .style.display = 'none';
    }
  }

  submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      message: form.message.value,
    };

    this.hideErrors();

    const { isValid, errorList } = this.checkFormValidity(data);

    if (isValid) {
      this.sendMessage(data);

      document
        .querySelector('.message-sent')
        .style.display = 'block';

      form.reset();

    } else {
      this.displayErrors(errorList);
      this.bg.querySelector('input').focus();
    }
  }


  init() {
    document
      .getElementById('contact-me-title')
      .innerHTML = `Contactez-moi<br/>${this.photographerName}`;

    document
    .getElementById('open-form')
    .addEventListener(
      'click',
      () => this.openModal(),
    );

    document
      .addEventListener(
        'keydown',
        (e) => {
          if (e.code === 'Escape') this.closeModal();
        },
      );

    document
      .getElementById('close-form')
      .addEventListener(
        'click',
        () => this.closeModal(),
      );
    
    document
      .getElementById('close-form')
      .addEventListener(
        'keydown',
        (e) => {
          if (e.code === 'Enter') this.closeModal();
        },
      );

    document
      .querySelector('.form-modal-bg')
      .addEventListener(
        'click',
        (e) => {
          if(e.target === e.currentTarget) this.closeModal();
        },
      );
    
    document
      .getElementById('contact-form')
      .addEventListener(
        'submit',
        (e) => this.submitForm(e),
      );

    Array.from(document.forms['contact-form'].elements)
      .forEach(element => {
        if (element.name) {
          element.addEventListener(
            'blur',
            () => this.validateSingleElement(element),
          );
        }
      });
  }

}
