import './style.css';

import { of, map, Observable, from, fromEvent, timer, interval } from 'rxjs';

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

//   // w/o the teardown logic, the console.log('Event callback leaked?') will run, thus you have a memory leak
//   return () => {
//     fromEventBtn.removeEventListener('click', clickHandlerFn);
//   };
// }).subscribe((event) => console.log(event.type, event.x, event.y));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   fromEventBtn$.unsubscribe();
// }, 5000);

// ------- timer operator ---------
// console.log('App started');

// const timer$ = timer(2000).subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('Completed'),
// });

// // if you want the timer to finsih early, you can unsubscribe, else you can omit this
// setTimeout(() => {
//   console.log('unsubscribe');
//   timer$.unsubscribe();
// }, 1000);

// manual creation
// console.log('App started');

// const timer$ = new Observable<number>((subscriber) => {
//   const timeoutId = setTimeout(() => {
//     console.log('Timeout');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);

//   // w/o the teardown logic, the console.log('Timeout') will run, thus you have a memory leak
//   return () => clearTimeout(timeoutId);
// }).subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('Completed'),
// });

// setTimeout(() => {
//   console.log('unsubscribe');
//   timer$.unsubscribe();
// }, 1000);

// ------- interval operator ---------
// console.log('App started');

// const interval$ = interval(1000).subscribe((val) => console.log(val));

// setTimeout(() => {
//   console.log('unsubscribe');
//   interval$.unsubscribe();
// }, 5000);

// // manual creation
// console.log('App started');

// const interval$ = new Observable<number>((subscriber) => {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('Leaked?');
//     subscriber.next(counter++);
//   }, 1000);

//   // w/o the teardown logic, the console.log('Leaked?') will run, thus you have a memory leak
//   return () => clearInterval(intervalId);
// }).subscribe((val) => console.log(val));

// setTimeout(() => {
//   console.log('unsubscribe');
//   interval$.unsubscribe();
// }, 5000);
