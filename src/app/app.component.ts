import { Component } from '@angular/core';
import { DUMMY_USERS } from './data/users/dummy-users';
import { HeaderComponent } from './header/header.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { RightDisplayComponent } from './right-display/right-display.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [HeaderComponent, LeftNavbarComponent, RightDisplayComponent,FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'Test-004';
}