import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetResponse } from 'src/app/interfaces/planet';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {


  private id: string = '';
  public dataPlanetResponse!: PlanetResponse;
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
      .dataPlanet(this.id)
      .subscribe(
        (dataPlanet: PlanetResponse
          ) => {
          this.dataPlanetResponse = dataPlanet;
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
