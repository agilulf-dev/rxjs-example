import {Component} from '@angular/core';

@Component({
  template: `
    <blockquote>404 Page not found!</blockquote>
    <button type="button" class="btn btn-link" routerLink="/home">Home</button>
  `
})
export class PageNotFoundComponent {
}
