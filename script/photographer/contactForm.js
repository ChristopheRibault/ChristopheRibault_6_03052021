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
  }

  closeModal() {
    this.bg.style.display = 'none';
    this.main.removeAttribute('aria-hidden');
  }

  checkFormValidity(data) {
    const errorList = {};
    let isValid = true;
    for (const key in formValidator) {
      if (
        data[key] && !formValidator[key].pattern?.test(data[key])
      ) {
        errorList[key] = formValidator[key].errorData || 'format incorrect';
        isValid = false;
      }

      if (formValidator[key].required && !data[key]) {
        errorList[key] = 'Ce champs est requis';
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
      const errorMessage = document.getElementById(`${key}-error-message`);
      errorMessage.style.display = 'block';
      errorMessage.textContent = errorList[key];
    }
  }

  hideErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(element => {
      element.style.display = 'none';
    });
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
  }

}
