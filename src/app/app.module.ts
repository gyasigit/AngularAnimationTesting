import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackGroundDisplayComponent } from './BackGround/back-ground-display/back-ground-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BackGroundDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
