import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public showNav = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsedNav() {
    if (this.showNav === false) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }

  hideNav() {
    if (this.showNav === true) {
      this.showNav = false;
    } else {
      return;
    }
  }
}
