import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { NavService } from '../../core/nav/nav.service';
import { ThemeService } from './../../core/theme.service';
import { DomUtilService } from '../../core/util/dom-util/dom-util.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  @Input() notificPanel: MatSidenav;
  egretThemes: Array<any>;
  hasSearchContent = false;
  searchPlaceholder: string;
  notificationCount = 0;

  constructor(private _domUtil: DomUtilService,
              private _themeService: ThemeService,
              private _navService: NavService) { }

  ngOnInit(): void {
    this.egretThemes = this._themeService.egretThemes;
  }

  changeTheme(theme) {
    this._themeService.changeTheme(theme);
  }

  toggleNotific() {
    this.notificPanel.toggle();
  }

  toggleCollapse(): void {
    const appBody = document.body;
    this._domUtil.toggleClass(appBody, 'collapsed-menu');
    this._domUtil.removeClass(document.getElementsByClassName('has-submenu'), 'open');
  }

  toggleSidebar(): void {
    this.sidenav.toggle();
  }

}
