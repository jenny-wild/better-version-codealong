// Das ist eine Information
// Commentar
// Comment

// Test

// so funny
// nochmal Test

// Theresa is messing with your code
// lalalalalal

// Test neu

import { compareAsc, format } from 'date-fns';
// nochmal Test
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//=> '2014-02-11'

const dates = [
  new Date(2000, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 2000 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
console.log('These are the dates:', dates);
