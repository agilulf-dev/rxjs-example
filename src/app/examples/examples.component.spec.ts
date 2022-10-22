import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExamplesComponent} from './examples.component';
import {ExamplesService} from "./examples.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ExamplesComponent', () => {
  let component: ExamplesComponent;
  let fixture: ComponentFixture<ExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamplesComponent],
      providers: [ExamplesService, HttpClient, HttpHandler]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
