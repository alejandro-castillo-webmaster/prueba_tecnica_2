import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeciesResponse } from 'src/app/interfaces/species';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  public dataSpeciesResponse: SpeciesResponse[] = [];
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
      .dataSpecies()
      .subscribe(
        (dataSpeciesResponse: SpeciesResponse[]) => {
          this.dataSpeciesResponse = dataSpeciesResponse;
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

  navigateSpecie(url?: string) {
    let text = url?.split('/') || '';
    this.router.navigate([`/specie/${text[5]}`]);
  }

}