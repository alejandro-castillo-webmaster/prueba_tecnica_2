import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmResponse } from 'src/app/interfaces/film';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  private id: string = '';
  public dataFilmResponse!: FilmResponse;
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
      .dataFilm(this.id)
      .subscribe(
        (dataFilm: FilmResponse) => {
          this.dataFilmResponse = dataFilm;
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
