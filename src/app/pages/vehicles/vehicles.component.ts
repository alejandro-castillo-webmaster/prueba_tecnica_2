import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesResponse } from 'src/app/interfaces/vehicles';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {


  public dataVehiclesResponse: VehiclesResponse[] = [];
  public showData: boolean = false;
  public isError: boolean = false;
  public showSpiner = true;

  constructor(private starWarsService: StarWarsDataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getInitialData();
  }

  getInitialData() {
    this.starWarsService
      .dataVehicles()
      .subscribe(
        (dataSpeciesResponse: VehiclesResponse[]) => {
          this.dataVehiclesResponse = dataSpeciesResponse;
          this.showSpiner = false;
          this.showData = true;
        },
        error => {
          this.showSpiner = false;
          this.showData = false;
          this.isError = true;
          console.warn(error);
        }
      );
  }

  return() {
    this.router.navigate([`/home`]);
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

  navigateVehicle(url?: string) {
    let text = url?.split('/') || '';
    this.router.navigate([`/vehicle/${text[5]}`]);
  }

}
