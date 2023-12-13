import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionOneRoutingModule } from './section-one-routing.module';
import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { AllContainerOneComponent } from './all-container-one/all-container-one.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BanerComponent,
    AllContainerOneComponent
  ],
  imports: [
    CommonModule,
    SectionOneRoutingModule
  ],
  exports:[
    AllContainerOneComponent
  ]
})
export class SectionOneModule { }
