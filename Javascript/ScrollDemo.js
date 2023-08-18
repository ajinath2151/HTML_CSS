import { LightningElement } from 'lwc';

export default class ScrollDemo extends LightningElement {
  scrollToDiv1() {
    this.scrollIntoView('div1');
  }

  scrollToDiv2() {
    this.scrollIntoView('div2');
  }

  scrollToDiv3() {
    this.scrollIntoView('div3');
  }

  scrollToDiv4() {
    this.scrollIntoView('div4');
  }

  scrollIntoView(elementId) {
    const element = this.template.querySelector(`#${elementId}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
