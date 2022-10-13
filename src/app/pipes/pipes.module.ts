import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './height.pipe';
import { LenghtPipe } from './lenght.pipe';



@NgModule({
  declarations: [
    HeightPipe,
    LenghtPipe,
  ],
  exports:[
    HeightPipe,
    LenghtPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
