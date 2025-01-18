import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../data/users/dummy-users';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-left-navbar-button',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './left-navbar-button.component.html',
  styleUrl: './left-navbar-button.component.css'
})
export class LeftNavbarButtonComponent {
 users = DUMMY_USERS;
 
 selectedUserName: string | null = null;
 
 displayUserName(name: string): void {
  this.selectedUserName = name;
 }

}
