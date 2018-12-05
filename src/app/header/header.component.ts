import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: string;
  login;
  admin;
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }

      if (this.route === '/login') {
        this.login = true;
        this.admin = false;
      }
      if (this.route === '/admin') {
        this.login = false;
        this.admin = true;
      }
    });
  }

  ngOnInit() {
  }

}
