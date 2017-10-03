import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { ContactComponent } from './contact/app.contact';
import { UserFormComponent } from './userform/app.userform';
import { FeedbackComponent } from './feedback/app.feedbackcomponent';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent, AboutComponent,
    ContactComponent, UserFormComponent, FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'userform',
        component: UserFormComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
