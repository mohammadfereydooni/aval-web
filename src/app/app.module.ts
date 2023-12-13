import { SectionOneModule } from './section-one/section-one.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionToweModule } from './section-towe/section-towe.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SectionOneModule,
    SectionToweModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
