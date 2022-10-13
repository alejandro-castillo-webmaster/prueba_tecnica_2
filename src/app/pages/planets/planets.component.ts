import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsResponse } from 'src/app/interfaces/planets';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public dataPlanetsResponse: PlanetsResponse[] = [];
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
      .dataPlanets()
      .subscribe(
        (dataFilms: PlanetsResponse[]) => {
          this.dataPlanetsResponse = dataFilms;
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

  navigatePlanet(url?: string) {
    let text = url?.split('/') || '';
    this.router.navigate([`/planet/${text[5]}`]);
  }

}
