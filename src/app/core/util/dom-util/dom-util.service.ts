import { Injectable } from '@angular/core';

@Injectable()
export class DomUtilService {

  constructor() { }

  addClass(el: any, className: string): void {
    if (!el) {
      return;
    }

    if (!el.length) {
      el.classList.add(className);
    } else {
      for (let i = 0; i < el.length; i++) {
        el[i].classList.add(className);
      }
    }
  }

  changeTheme(themes: any[], themeName: string): void {
    themes.forEach((theme) => {
      this.removeClass(document.body, theme.name);
    });
      this.addClass(document.body, themeName);
  }

  findClosest(el: HTMLElement, className: string): HTMLElement {
    if (!el) {
      return;
    }
    while (el) {
      const parent = el.parentElement;

      if (parent && this.hasClass(parent, className)) {
        return parent;
      }
      el = parent;
    }
  }

  hasClass(el: HTMLElement, className: string): boolean {
    if (!el) {
      return;
    }
    return (` ${el.className} `).replace(/[\n\t]/g, ' ').indexOf(` ${className} `) > -1;
  }

  ieChatjsFix() {
    if (window.hasOwnProperty('MSInputMethodContext') || document.hasOwnProperty('documentMode')) {
      document.body.style.width = '99.9%';
      setTimeout(() => {
        document.body.style.width = '100%';
      })
    }
  }

  removeClass(el: any, className: string): void {
    if (!el || el.length === 0) {
      return;
    }

    if (!el.length) {
      el.classList.remove(className);
    } else {
      for (let i = 0; i < el.length; i++) {
        el[i].classList.remove(className);
      }
    }
  }
  toggleClass(el: HTMLElement, className: string) {
    if (!el) {
      return;
    }

    if (this.hasClass(el, className)) {
      this.removeClass(el, className);
    } else {
      this.addClass(el, className);
    }
  }

}
