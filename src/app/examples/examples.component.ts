import {Component} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {

  subscriber = new Subscription();
  subscriberWithError = new Subscription();
  subscriberOf = new Subscription();

  /**
   * 'of' allows you to deliver values in a sequence
   * In this case, it will emit 1,2,3,4,5 in order.
   *  */
  ofObservable = of(1, 2, 3, 4, 5);

  startObservable($event: MouseEvent): void {
    const observable$ = new Observable(subscriber => {
      subscriber.next('first value');
      subscriber.next('second value');
      subscriber.next('third value');
      subscriber.complete();
    });
    if ($event) {
      this.subscriber = observable$.subscribe({
        next(value) {
          console.log('Value: [%s]', value);
        },
        error(err) {
          console.error('Something wrong occurred: [%s]', err);
        },
        complete() {
          console.log('Observable completed!');
        }
      });
    }
  }

  observableWithError($event: MouseEvent): void {
    const observableWithError$ = new Observable(subscriber => {
      subscriber.next('first value');
      subscriber.next('second value');
      subscriber.error('ERROR');
      subscriber.next('third value, never emitted');
      subscriber.complete();
    });
    if ($event) {
      this.subscriberWithError = observableWithError$.subscribe({
        next(value) {
          console.log('Value: [%s]', value);
        },
        error(err) {
          console.error('Something wrong occurred: "%s"', err);
        },
        complete() {
          console.log('Completed!');
        }
      });
    }
  }

  observableOf($event: MouseEvent): void {
    if ($event) {
      this.subscriberOf = this.ofObservable.subscribe({
        next(value) {
          console.log('Value: [%s]', value);
        },
        error(err) {
          console.error('Something wrong occurred: "%s"', err);
        },
        complete() {
          console.log('Completed!');
        }
      });
    }
  }

  accordionIsOpen($event: boolean) {
    if (!$event) {
      this.subscriber.unsubscribe();
      this.subscriberWithError.unsubscribe();
      this.subscriberOf.unsubscribe();
    }
  }
}
