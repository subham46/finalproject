import { Component } from '@angular/core';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { ContactComponent } from './contact/app.contact';
import { FeedbackComponent } from './feedback/app.feedbackcomponent';



@Component({
  selector: 'app-rooted',
  templateUrl: './main.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
