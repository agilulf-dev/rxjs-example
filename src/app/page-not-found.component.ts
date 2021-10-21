import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `<div (click)="goToHomepage()">
    <h1>404 Page not found!</h1></div>
    `
})
export class PageNotFoundComponent {
  constructor(private router: Router) { }

  goToHomepage() {
    this.router.navigate(['']);
  }
}
