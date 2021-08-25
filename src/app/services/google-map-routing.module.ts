import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "../map/map.component";

const routes: Routes = [
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule {
}
