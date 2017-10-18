import { PersonnelRepoService } from '../core/data/personnel-respository.service';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [MainDashboardComponent, DashboardComponent]
})
export class DashboardModule { }
