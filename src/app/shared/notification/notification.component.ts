import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  @Input() notificPanel: MatSidenav;
  notifications = [];

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((routeChange) => {
      if (routeChange instanceof NavigationEnd) {
        this.notificPanel.close();
      }
    });
  }

  clearAll(e: Event): void {
    e.preventDefault();

  }

}
