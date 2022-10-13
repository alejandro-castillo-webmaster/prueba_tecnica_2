import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';
import { VehicleResponse } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  private id: string = '';
  public dataVehicleResponse!: VehicleResponse;
  public showData: boolean = false;
  public isError: boolean = false;
  public showSpiner = true;

  constructor(private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getInitialData();
  }


  getInitialData() {

    this.starWarsService
      .dataVehicle(this.id)
      .subscribe(
        (dataVehicle: VehicleResponse) => {
          this.dataVehicleResponse = dataVehicle;
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

  return(route: string) {
    this.router.navigate([`/${route}`]);
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }


}
