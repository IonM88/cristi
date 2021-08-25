import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from "../map/map.component";
import {MapPanelComponent} from "../map-panel/map-panel.component";
import {GoogleMapRoutingModule} from "../services/google-map-routing.module";
import {AgmCoreModule} from "@agm/core";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MapComponent,
    MapPanelComponent
  ],
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC2MEtUo7JeDsxrt1544AWghAqNBKOtIUc'
      }
    ),
    ReactiveFormsModule
  ]
})
export class MapModule {
}
