/**
Get the number of days in a year.

@param yearOrDate - Default: `new Date()`.

@example
```
import yearDays = require('year-days');

yearDays(2014);
//=> 365

yearDays(2016);
//=> 366
```
*/
declare function yearDays(yearOrDate?: number | Date): number;

export = yearDays;
