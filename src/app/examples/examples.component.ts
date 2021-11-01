import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      this.subscriberOf =
        this.ofObservable.subscribe(value => console.log('Value: [%s]', value));
    }
  }

  accordionIsOpen($event: boolean) {
    if (!$event) {
      this.subscriber.unsubscribe();
      this.subscriberWithError.unsubscribe();
      this.subscriberOf.unsubscribe();
    }
  }

  /**
   * To use the operators below is used pipe() function.
   * It is the assembly line from your observable data through your operators.
   */

  observableWithMap($event: MouseEvent): void {
    const numberForMap = 10;
    if ($event) {
      console.log('Sum up "%s" to values with map operator', numberForMap);
      of(1, 2, 3, 4, 5).pipe(map(value => value + numberForMap))
      .subscribe(value => console.log('Value: [%s]', value));
    }
  }

  /**
   * Filter operator exclude values that not match with the condition
   */
  observableWithFilter($event: MouseEvent): void {
    const excludedValue = 10;
    if ($event) {
      console.log('Exclude value "%s" with filter', excludedValue);
      of(10, 20, 10, 30, 40, 50).pipe(filter(value => value !== excludedValue))
      .subscribe(value => console.log('Value: [%s]', value));
    }
  }

  filterGreaterValues($event: MouseEvent): void {
    const threshold = 30;
    if ($event) {
      console.log('Print values greater than "%s" with filter', threshold);
      of(10, 15, 20, 25, 30, 40, 50).pipe(filter(value => value > threshold))
      .subscribe(value => console.log('Value: [%s]', value));
    }
  }
}
