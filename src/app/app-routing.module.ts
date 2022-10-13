import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './pages/person/person.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { SpeciesComponent } from './pages/species/species.component';
import { SpecieComponent } from './pages/specie/specie.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'specie/:id', component: SpecieComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starship/:id', component: StarshipComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicle/:id', component: VehicleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
