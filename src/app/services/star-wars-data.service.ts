import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { FilmsResponse } from '../interfaces/films';
import { PeopleResponse } from '../interfaces/people';
import { PlanetsResponse } from '../interfaces/planets';
import { SpeciesResponse } from '../interfaces/species';
import { StartshipsResponse } from '../interfaces/startships';
import { VehiclesResponse } from '../interfaces/vehicles';
import { FilmResponse } from '../interfaces/film';
import { PersonResponse } from '../interfaces/person';
import { PlanetResponse } from '../interfaces/planet';
import { SpecieResponse } from '../interfaces/specie';
import { StarshipResponse } from '../interfaces/startship';
import { VehicleResponse } from '../interfaces/vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsDataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dataFilms() {
    return this.http.get<FilmsResponse[]>(this.apiUrl + 'films')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataFilm(id: string) {
    return this.http.get<FilmResponse>(`${this.apiUrl}films/${id}`);
  }

  dataPeople() {
    return this.http.get<PeopleResponse[]>(this.apiUrl + 'people')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataPerson(id: string) {
    return this.http.get<PersonResponse>(`${this.apiUrl}people/${id}`);
  }

  dataPlanets() {
    return this.http.get<PlanetsResponse[]>(this.apiUrl + 'planets')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataPlanet(id: string) {
    return this.http.get<PlanetResponse>(`${this.apiUrl}planets/${id}`);
  }



  dataSpecies() {
    return this.http.get<SpeciesResponse[]>(this.apiUrl + 'species')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataSpecie(id: string) {
    return this.http.get<SpecieResponse>(`${this.apiUrl}species/${id}`);
  }

  dataStarships() {
    return this.http.get<StartshipsResponse[]>(this.apiUrl + 'starships')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataStarship(id: string) {
    return this.http.get<StarshipResponse>(`${this.apiUrl}starships/${id}`);
  }

  dataVehicles() {
    return this.http.get<VehiclesResponse[]>(this.apiUrl + 'vehicles')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataVehicle(id: string) {
    return this.http.get<VehicleResponse>(`${this.apiUrl}vehicles/${id}`);
  }


}