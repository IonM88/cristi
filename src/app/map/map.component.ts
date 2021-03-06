import {Component, OnInit} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {LocationsService} from "../services/locations.service";
import {MapsService} from "../services/maps.service";
import {Marker} from "../models/markers";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number;

  public openedWindow: number;

  public markers: Marker[] = this.locationService.getMarkers();

  constructor(
    private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapsService: MapsService
  ) { }

  ngOnInit() {

    this.lat = this.mapsService.lat;
    this.lng = this.mapsService.lng;
    this.zoom = this.mapsService.zoom;

    this.setCurrentPosition();
    this.mapApiLoader.load();

    this.mapsService.newCoordinators.subscribe(
      (coords: { lat: number, lng: number, zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    );

    this.mapsService.openWindow.subscribe(
      index => {
        this.openedWindow = +index;
      }
    );
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = this.mapsService.lat = position.coords.latitude;
        this.lng = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }

    // @Todo: resort the locations
  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }
}
