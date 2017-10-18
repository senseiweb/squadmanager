import { MaterialModule } from './../material.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopBarComponent,
    MaterialModule,
    CommonModule,
    RouterModule,
    NotificationComponent,
    AdminLayoutComponent
  ],
  declarations: [TopBarComponent, NotificationComponent, AdminLayoutComponent]
})
export class SharedModule { }
