import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { UserFormComponent } from '../userform/app.userform';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'form',
        component: UserFormComponent
      }
    ])
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AllotmentModule { }
