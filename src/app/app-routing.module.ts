import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from "./services/auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./services/auth.service";
import {AdminTableComponent} from "./table/admin-table.component";
import {MapComponent} from "./map/map.component";
import {Role} from "./models/role";


const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminTableComponent,
    canActivate: [AuthGuard],
    data: {role: [Role.Admin]}
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule {
}
