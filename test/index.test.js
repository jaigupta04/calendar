const { returnDay } = require('../src/index');

const testArray = [
    ['04-07-2003', 'FRIDAY'  ],
    ['29-02-2003',  null     ], // not a leap year
    ['29-02-2024', 'THURSDAY'],
    ['29-02-1800',  null     ], // not a leap year
];

describe("Test Cases", () => {
    for (let [dateStr, day] of testArray){
      let [ date, month, year ] = dateStr.split('-');
      date  = parseInt(date);
      month = parseInt(month);
      year  = parseInt(year);
      test(dateStr, () => expect(returnDay(date, month, year)).toStrictEqual(day));
    }
});