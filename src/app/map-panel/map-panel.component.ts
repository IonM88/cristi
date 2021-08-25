import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Marker} from "../models/markers";
import {MapsAPILoader} from "@agm/core";
import {MapsService} from "../services/maps.service";
import {LocationsService} from "../services/locations.service";

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.scss']
})
export class MapPanelComponent implements OnInit {

  @ViewChild('search') public searchElementRef: ElementRef;

  public searchControl: FormControl;

  public locations: Marker[];
  public locationList: Marker[];


  constructor(
    private mapApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapsService: MapsService,
    private locationsService: LocationsService
  ) {
  }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.locations = this.locationsService.getMarkers();

    this.locationList = this.locations;
    this.sortLocations();
  }

  openWindow(location: Marker, index: number) {

    this.mapsService.openWindow.next(index);
    this.zoomToNewLocation(location.lat, location.lng);
  }

  distanceToCenter(lat, lng) {
    const R = 6371; // mean radius of earth

    const lat1 = this.toRad(this.mapsService.lat);
    const lng1 = this.toRad(this.mapsService.lng);
    const lat2 = this.toRad(lat);
    const lng2 = this.toRad(lng);

    const dLat = lat2 - lat1;
    const dLng = lng2 - lng1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  toRad(degrees) {
    return degrees * Math.PI / 180;
  }

  zoomToNewLocation(lat: number, lng: number) {
    this.mapsService.lat = lat;
    this.mapsService.lng = lng;

    this.mapsService.newCoordinators.next({
      lat: this.mapsService.lat,
      lng: this.mapsService.lng,
      zoom: 10
    });
  }

  sortLocations() {
    this.locationList.sort((a, b) => this.distanceToCenter(a.lat, a.lng) - this.distanceToCenter(b.lat, b.lng));
  }

}
