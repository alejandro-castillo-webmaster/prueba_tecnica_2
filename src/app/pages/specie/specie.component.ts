import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';
import { SpecieResponse } from '../../interfaces/specie';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {


  private id: string = '';
  public dataSpecieResponse!: SpecieResponse;
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
      .dataSpecie(this.id)
      .subscribe(
        (dataSpecie: SpecieResponse) => {
          this.dataSpecieResponse = dataSpecie;
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
