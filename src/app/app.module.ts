import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {MapModule} from "./modules/map.module";
import {DashboardComponent} from "./dashboard/admin-dashboard.component";
import {AdminTableComponent} from "./table/admin-table.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MapModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
