import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleResponse } from 'src/app/interfaces/people';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  public dataPeopleResponse!: PeopleResponse[];
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
      .dataPeople()
      .subscribe(
        (dataPeople: PeopleResponse[]) => {
          this.dataPeopleResponse = dataPeople;
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

  navigatePerson(url?: string){
    let text = url?.split('/') || '';
    this.router.navigate([`/person/${text[5]}`]);
  }

}
