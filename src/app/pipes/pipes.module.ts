import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './height.pipe';
import { LenghtPipe } from './lenght.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    HeightPipe,
    LenghtPipe,
    FilterPipe,
  ],
  exports:[
    HeightPipe,
    LenghtPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
