import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./page-not-found.component";
import {HomeComponent} from './home/home.component';
import {ExamplesComponent} from './examples/examples.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ExamplesService} from "./examples/examples.service";
import {TestingComponent} from "./testing/testing.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ExamplesComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    HttpClientModule
  ],
  providers: [ExamplesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
