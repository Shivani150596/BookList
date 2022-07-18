import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideNavComponent } from './slide-nav/slide-nav.component';
import { MaterialModule } from './material/material.module';
import { BooklistComponent } from './booklist/booklist.component';



@NgModule({
  declarations: [
    AppComponent,
    SlideNavComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
