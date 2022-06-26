import './style.css';

import { of, map, Observable, from, fromEvent, timer } from 'rxjs';

// ------- of operator ---------
// of(1, 2, 3).subscribe({
//   next: (res) => console.log(res),
//   error: (res) => console.log(res),
//   complete: () => console.log('complete'),
// });

// ------- from operator ---------
// from(['alice', 'ben', 'charlie']).subscribe({
//   next: (res) => console.log(res),
//   error: (res) => console.log(res),
//   complete: () => console.log('completed'),
// });

// ------- from operator (converting a promise to an observable) ---------
// const somePromise = new Promise((resolve, reject) => {
//   resolve('resolved!');
//   reject('Rejected!');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: (res) => console.log(res),
//   error: (err) => console.log('Error: ', err),
//   complete: () => console.log('Completed'),
// });

// ------- fromEvent operator ---------
// const fromEventBtn = document.querySelector('.fromEventBtn');

// as the first parameter, you provide the event target which in this case is the fromEventBtn
// as the seconde parameter, you provide the event type which in this case is the click event
// there will be a typing issue because by default the type of emitted values is set to 'Event'
// use <MouseEvent> type
// const fromEventBtn$ = fromEvent<MouseEvent>(fromEventBtn, 'click').subscribe(
//   (event) => console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribe');
//   fromEventBtn$.unsubscribe();
// }, 5000);

// manual creation
// const fromEventBtn$ = new Observable<MouseEvent>((subscriber) => {
//   const clickHandlerFn = (event) => {
//     console.log('Event callback leaked?');
//     subscriber.next(event);
//   };

//   fromEventBtn.addEventListener('click', clickHandlerFn);

//   // teardown logic
//   return () => {
//     fromEventBtn.removeEventListener('click', clickHandlerFn);
//   };
// }).subscribe((event) => console.log(event.type, event.x, event.y));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   fromEventBtn$.unsubscribe();
// }, 5000);

// ------- timer operator ---------
// console.log('App started')

// timer(2000).subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('Completed'),
// });

// manual creation
// console.log('App started');

// const timer$ = new Observable<number>((subscriber) => {
//   const timeoutId = setTimeout(() => {
//     subscriber.next(0), subscriber.complete();
//   }, 2000);

//   return () => clearTimeout(timeoutId);
// }).subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('Completed'),
// });

// setTimeout(() => {
//   timer$.unsubscribe();
// }, 1000);
