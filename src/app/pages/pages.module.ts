import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PipesModule } from '../pipes/pipes.module';
import { FilmComponent } from './film/film.component';
import { PlanetComponent } from './planet/planet.component';
import { SpecieComponent } from './specie/specie.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';



@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    FilmComponent,
    PeopleComponent,
    PersonComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetComponent,
    SpecieComponent,
    StarshipComponent,
    VehicleComponent,
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ]
})
export class PagesModule { }
