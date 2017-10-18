import { Observable } from 'rxjs/Observable';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class NavService {

  doSidebarToggle: EventEmitter<any> = new EventEmitter();

  sidebarOpen: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  toggleSideBar() {
    this.doSidebarToggle.next();
  }
}
