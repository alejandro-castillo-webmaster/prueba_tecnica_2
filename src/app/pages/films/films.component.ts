import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsResponse } from 'src/app/interfaces/films';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public dataFilmResponse: FilmsResponse[] = [];
  public filterPost: string = '';
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
      .dataFilms()
      .subscribe(
        (dataFilms: FilmsResponse[]) => {
          this.dataFilmResponse = dataFilms;
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

  navigateFilm(url?: string){
    let text = url?.split('/') || '';
    this.router.navigate([`/film/${text[5]}`]);
  }

}
