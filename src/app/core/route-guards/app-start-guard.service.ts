import { EmProviderService } from './../data/em-provider.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route } from '@angular/router';


@Injectable()
export class AppStartGuardService implements CanActivate {

  constructor(private _emProvider: EmProviderService) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this._emProvider.isActivated();
  }
}
