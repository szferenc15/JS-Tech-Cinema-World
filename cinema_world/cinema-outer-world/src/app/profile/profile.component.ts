import { User } from './../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor() { }

  activeUser: User = {username: '', email: '', phoneNumber: ''};

  ngOnInit() {
    this.activeUser = JSON.parse(sessionStorage.getItem('user'));
  }
}
