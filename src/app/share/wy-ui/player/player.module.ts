import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WySliderModule } from '../wy-slider/wy-slider.module';
import { PlayerComponent } from './player.component'


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    WySliderModule
  ],
  exports: [PlayerComponent]
})
export class PlayerModule { }
