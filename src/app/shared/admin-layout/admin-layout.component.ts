import { ThemeService } from './../../core/theme.service';
import { NavService } from './../../core/nav/nav.service';
import PerfectScrollbar from 'perfect-scrollbar';

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav) private sideNav: MatSidenav;
  private isMobile;
  toggleSubscription: Subscription;

  url: string;
  isSideBarOpen = false;
  screenSizeWatcher: Subscription;

  constructor( private _router: Router,
    private _themeService: ThemeService,
    private _navService: NavService) {
      _router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange: NavigationEnd) => {
        this.url = routeChange.url;
        if (this.isNavOver()) {
          this.sideNav.close();
        }
      });
     }

  get isDarkTheme(): boolean {
      return this._themeService.activatedThemeName.indexOf('dark') !== -1;
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }

  ngOnInit() {
    const navigationHold = document.getElementById('scroll-area');
    const ps = new PerfectScrollbar(navigationHold, {
      suppressScrollX: true
    });
    this.toggleSubscription = this._navService.doSidebarToggle.subscribe(() => {
      this.sideNav.toggle();
    });
  }

  isNavOver(): boolean {
    return window.matchMedia('(max-width: 960px)').matches;
  }

}
