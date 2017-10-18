import { NavService } from './nav/nav.service';
import { ApplicationConfig } from './models/userConfig';
import { RegistrationHelper } from './models/entities';
import { UserService } from './user.service';
import { AppStartGuardService } from './route-guards/app-start-guard.service';
import { BaseRepository } from './data/base-repository.service';
import { EmProviderService } from './data/em-provider.service';
import { PersonnelRepoService } from './data/personnel-respository.service';
import { DomUtilService } from './util/dom-util/dom-util.service';
import { ThemeService } from './theme.service';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    DomUtilService,
    PersonnelRepoService,
    EmProviderService,
    BaseRepository,
    AppStartGuardService,
    UserService,
    RegistrationHelper,
    ThemeService,
    NavService
    ],
  declarations: []
})

export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: ApplicationConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{provide: ApplicationConfig, useValue: config}]
    };
  }
 }
