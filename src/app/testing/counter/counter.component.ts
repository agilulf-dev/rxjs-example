import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  currentCounter = 0;
  private readonly MAX_COUNTER = 10;
  private interval$: Observable<number> = interval(1000);
  private intervalSubscription: Subscription = Subscription.EMPTY;

  ngOnInit(): void {
    this.startCounter()
  }

  private startCounter(): void {
    this.intervalSubscription = this.interval$.subscribe((value) => {
      if (value >= this.MAX_COUNTER) {
        this.currentCounter = 0;
      } else {
        this.currentCounter++;
      }
      console.log('interval() ', value);
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
