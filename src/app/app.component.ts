import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'Test-004';
}