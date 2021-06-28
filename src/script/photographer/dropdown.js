export default class Dropdown {

  constructor() {
    this.isExpanded = false;
    this._selectedValue = null;
    this._focusedItem = 0;
    this.button = document.getElementById('exp_button');
    this.list = document.getElementById('exp_elem_list');
    this.listItems = Array.from(this.list.getElementsByTagName('li'));
    this.init();
  }

  set focusedItem(index) {
    if (index < 0) {
      this._focusedItem = 0;
    }
    if (index >= this.listItems.length) {
      this._focusedItem = this.listItems.length -1;
    }
    if (index >= 0 && index < this.listItems.length) {
      this._focusedItem = index;
    }
    this.listItems[this.focusedItem].focus();
  }

  get focusedItem() {
    return this._focusedItem;
  }

  set selectedValue(value) {
    this._selectedValue = value;
    
    document.dispatchEvent(
      new CustomEvent(
        'orderList',
        { detail: this.selectedValue },
      ),
    );
  }

  get selectedValue() {
    return this._selectedValue;
  }

  expand() {
    this.isExpanded = true;
    this.button.setAttribute('aria-expanded', true);
    this.list.classList.remove('hidden');
    this.list.focus();
  }

  collapse() {
    this.isExpanded = false;
    this.button.setAttribute('aria-expanded', false);
    this.list.classList.add('hidden');
    this.button.focus();
  }

  select(liElement) {
    this.listItems.forEach(item => {
      item.removeAttribute('aria-selected');
    });
    liElement.setAttribute('aria-selected', true);
    this.selectedValue = liElement.getAttribute('data-value');
    this.button.textContent = liElement.textContent;
    this.collapse();
  }

  navigate(e) {
    e.preventDefault();
    switch (e.code) {
      case 'ArrowDown':
        this.focusedItem += 1;
        break;
      case 'ArrowUp':
        this.focusedItem -= 1;
        break;
      case 'ArrowRight':
      case 'Enter':
        this.select(this.listItems[this.focusedItem]);
        break;
      case 'Escape':
      case 'ArrowLeft':
        this.collapse();
        break;
      case 'Home':
        this.focusedItem = 0;
        break;
      case 'End':
        this.focusedItem = this.listItems.length - 1;
        break;
      default:
        break;
    }
  }

  init() {
    this.button
      .addEventListener(
        'click',
        () => this.expand(),
      );

    this.button
      .addEventListener(
        'keydown',
        (e) => {
          if (e.code === 'ArrowDown') this.expand();
        },
      );

    this.listItems.forEach(li => {
      li.addEventListener(
        'click',
        (e) => {
          this.select(e.target);
        },
      );
    });

    this.list
      .addEventListener(
        'keydown',
        (e) => this.navigate(e),
      );
  }

}
