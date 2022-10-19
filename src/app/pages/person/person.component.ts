import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonResponse } from 'src/app/interfaces/person';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private id: string = '';
  public dataPersonResponse!: PersonResponse;
  public showData: boolean = false;
  public isError: boolean = false;
  public showSpiner = true;

  constructor(private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getInitialData();

    setInterval(() => {
      if (this.id !== this.activatedRoute.snapshot.params['id']) {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.getInitialData();
      }
    }, 2000);
  }


  getInitialData() {

    this.starWarsService
      .dataPerson(this.id)
      .subscribe(
        (dataPerson: PersonResponse) => {
          this.dataPersonResponse = dataPerson;
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
