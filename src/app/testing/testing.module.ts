import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TestingComponent} from "./testing.component";
import {CounterComponent} from './counter/counter.component';
import {DomTestingComponent} from './dom-testing/dom-testing.component';

const routes: Routes = [
  {
    path: '',
    component: TestingComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'dom-testing',
    component: DomTestingComponent
  }
];

@NgModule({
  declarations: [
    CounterComponent,
    DomTestingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestingModule {
}
