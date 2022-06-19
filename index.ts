import './style.css';

import { of, map, Observable, from } from 'rxjs';

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
