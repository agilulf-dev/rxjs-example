import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExamplesComponent} from "./examples.component";

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExamplesModule {
}
