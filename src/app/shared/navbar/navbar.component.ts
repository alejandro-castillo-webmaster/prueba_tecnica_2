import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OldSearchs } from 'src/app/interfaces/oldSearchs';
import { PeopleResponse } from 'src/app/interfaces/people';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public valueSearch: string = '';
  public dataSearch: PeopleResponse[] = [];
  public oldSearchs!: OldSearchs[];

  constructor(private starWarsService: StarWarsDataService,
    public storageServie: StorageService,
    private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.getOldSearchs();
    }, 2000);
  }

  getVal() {

    if (this.valueSearch.length < 2) {
      this.dataSearch = [];
      return;
    }

    this.starWarsService
      .searchPeople(this.valueSearch)
      .subscribe(
        (dataSearch: PeopleResponse[]) => {
          this.dataSearch = [];
          this.dataSearch = dataSearch;
        },
        error => {
          console.warn(error);
        }
      );

  }

  // We get old searchs from localStorage
  getOldSearchs() {

    if (localStorage.getItem("searchs") === null) {
      return;
    }
    // We get info from localStorage
    let oldSearchsTemporal = localStorage.getItem('searchs') || '';
    this.oldSearchs = JSON.parse(oldSearchsTemporal);
    // We select only the last 4 searchs
    if (this.oldSearchs) {
      this.oldSearchs = this.oldSearchs.slice(-4);
    }
  }

  // We navigate to see de result
  navigate(name?: any, url?: string) {

    this.dataSearch = [];
    let text = url?.split('/') || '';
    // We save de last searchs
    this.storageServie.setStorage(name, text[5])

    this.router.navigate([`/person/${text[5]}`]);
  }

    // We navigate to see de oldSearchs, only navigate, don't save de serach ibn the localStorage
    navigateOldSearchs(id?: any) {
      this.router.navigate([`/person/${id}`]);
    }

}
