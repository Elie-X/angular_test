import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeRecetteComponent } from './components/liste-recette/liste-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeRecetteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
