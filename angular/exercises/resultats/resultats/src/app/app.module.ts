import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { SuccessComponent } from './success/success.component';
import { OtherpageComponent } from './otherpage/otherpage.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SuccessComponent,
    OtherpageComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'resultats',
          component: ResultsComponent
        },
        {
          path: 'other',
          component: OtherpageComponent
        },
        {
          path: '',
          redirectTo: '/resultats',
          pathMatch: 'full'
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
