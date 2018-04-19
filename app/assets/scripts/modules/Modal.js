import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalBtn = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalBtn = $('.modal__close');
    this.events();
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) this.closeModal();
  }

  events() {
    // Clicking the open modal.
    this.openModalBtn.click(this.openModal.bind(this));
    
    // Clicking the x close modal button.
    this.closeModalBtn.click(this.closeModal.bind(this));

    // pushes any key on the keyboard.
    $(document).keyup(this.keyPressHandler.bind(this));
  }
}

export default Modal;