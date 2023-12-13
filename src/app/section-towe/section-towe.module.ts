import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionToweRoutingModule } from './section-towe-routing.module';
import { ChoseOptionComponent } from './chose-option/chose-option.component';


@NgModule({
  declarations: [
    ChoseOptionComponent
  ],
  imports: [
    CommonModule,
    SectionToweRoutingModule
  ],
  exports:[
    ChoseOptionComponent
  ]
})
export class SectionToweModule { }
