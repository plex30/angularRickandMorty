import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  locations:any;
  pageInfo ={};
  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations(1);
  }

  getLocations(page){
    this.locationsService.getLocations(page).subscribe((res: any) => {
      console.log(res.results)
      this.locations = res.results;
      this.pageInfo = {...res.info, page}
  });
  }

}
