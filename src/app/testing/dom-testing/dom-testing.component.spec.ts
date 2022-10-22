import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DomTestingComponent} from './dom-testing.component';
import {By} from "@angular/platform-browser";

describe('DomTestingComponent', () => {
  let component: DomTestingComponent;
  let fixture: ComponentFixture<DomTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomTestingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not visible at first page opening', () => {
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  });

  it('should be visible on toggle click', () => {
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
    // const buttonElement = fixture.debugElement.query(By.css('button')); alternative way to select element
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    // buttonElement.triggerEventHandler('click', <Event>{}); alternative way to click over component
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    buttonElement.click();
    //buttonElement.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  });

  it('should be visible when variable isVisibel is TRUE', () => {
    component.isVisible = true;
    fixture.detectChanges();
    fixture.whenStable().then(() =>
      expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull()
    )
  });

});
