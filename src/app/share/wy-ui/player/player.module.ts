import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WySliderModule } from '../wy-slider/wy-slider.module';
import { PlayerComponent } from './player.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    WySliderModule,
    FormsModule
  ],
  exports: [PlayerComponent]
})
export class PlayerModule { }
