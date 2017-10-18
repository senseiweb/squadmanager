import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { environment } from './../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser'
import { BreezeBridgeAngularModule } from 'breeze-bridge-angular'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BreezeBridgeAngularModule,
    BrowserAnimationsModule,
    DashboardModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule.forRoot(
      JSON.parse(localStorage.getItem('AppConfig')))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
      if (!environment.production) {
        localStorage.clear();
          localStorage.setItem('AppConfig', JSON.stringify(environment.userObject));
      }
    }
 }
