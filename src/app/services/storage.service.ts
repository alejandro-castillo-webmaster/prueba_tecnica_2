import { Injectable } from '@angular/core';
import { OldSearchs } from '../interfaces/oldSearchs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Seteamos el valor
  setStorage(name: string, id: string) {
    //console.log(name + '-' + id);

    const searchs = localStorage.getItem('searchs');

    if (searchs) {
      this.modify(name, id);
    } else {
      this.firstSave(name, id);
    }


    return;
  }

  // We create a new value in local storage
  firstSave(name: string, id: string) {

    // We create object Empty, and we set this object in localStorage
    const objectEmpty: any= [];
    localStorage.setItem("searchs", JSON.stringify(objectEmpty)); 

    // We push the first search in the object in localStorage
    let searchs: OldSearchs[] = JSON.parse(localStorage.getItem("searchs")!);
    const search: OldSearchs = {
      'name': name,
      'id': id,
    }
    searchs.push(search);
    localStorage.setItem("searchs", JSON.stringify(searchs));

    return

  }

  // We create a new value in local storage
  modify(name: string, id: string) {

    // We push the first search in the object in localStorage
    let searchs: OldSearchs[] = JSON.parse(localStorage.getItem("searchs")!);

    let search: OldSearchs = {
      'name': name,
      'id': id,
    };
    searchs.push(search);
    localStorage.setItem("searchs", JSON.stringify(searchs));

    return

  }


  ////
}
