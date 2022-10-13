import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartshipsResponse } from 'src/app/interfaces/startships';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {


  public dataStartshipResponse!: StartshipsResponse[];
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
      .dataStarships()
      .subscribe(
        (dataSpeciesResponse: StartshipsResponse[]) => {
          this.dataStartshipResponse = dataSpeciesResponse;
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

  navigateStarship(url?: string){
    let text = url?.split('/') || '';
    this.router.navigate([`/starship/${text[5]}`]);
  }

}
