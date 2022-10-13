import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';
import { StarshipResponse } from '../../interfaces/startship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {


  private id: string = '';
  public dataStarshipResponse!: StarshipResponse;
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
      .dataStarship(this.id)
      .subscribe(
        (dataStarship: StarshipResponse) => {
          this.dataStarshipResponse = dataStarship;
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
