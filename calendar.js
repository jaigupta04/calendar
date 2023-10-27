exports.date_check = (date,month,year) => {
   if (date > 31) {
      return "INVALID DATE";
   }
   if (date < 1) {
      return "INVALID DATE";
   }
   if (month > 12) {
      return "INVALID DATE";
   }
   if (month < 1) {
      return "INVALID DATE";
   }
   if (year < 1) {
      return "INVALID DATE";
   }
   
   if (year % 400 == 0) {
      if (date > 29 && month == 2) {
         return "INVALID DATE";
      }
   } else if (year % 400 != 0) {
      if (year % 4 == 0 && month == 2 && date > 29) {
         return "INVALID DATE";
      } else if (year % 4 != 0 && date > 28 && month == 2) {
         return "INVALID DATE";
      }
   }
   
   let d = year - 1;
   let a = d % 400;
   let b = a % 100;
   let c = a - b;
   
   let x = 0;
   if (c == 100) {
      x = x + 5;
   } else if (c == 200) {
      x = x + 3;
   } else if (c == 300) {
      x = x + 1;
   } else if (c == 400) {
      x = x + 0;
   }
   
   let y = Math.floor(b / 4);
   let z = b - y;
   let e = y * 2 + z;
   let f = e + x;
   
   let mon = month - 1;
   let m = 0;
   if (year % 4 !== 0) {
      if (mon === 0) { m = m + 0; } 
      else if (mon === 1) { m = m + 3; } 
      else if (mon === 2) { m = m + 3; } 
      else if (mon === 3) { m = m + 6; } 
      else if (mon === 4) { m = m + 8; } 
      else if (mon === 5) { m = m + 11; } 
      else if (mon === 6) { m = m + 13; } 
      else if (mon === 7) { m = m + 16; } 
      else if (mon === 8) { m = m + 19; } 
      else if (mon === 9) { m = m + 21; } 
      else if (mon === 10) { m = m + 24; } 
      else if (mon === 11) { m = m + 26; } 
   } else if (year % 4 === 0) {
      if (mon === 0) { m = m + 0; } 
      else if (mon === 1) { m = m + 3; } 
      else if (mon === 2) { m = m + 4; } 
      else if (mon === 3) { m = m + 7; } 
      else if (mon === 4) { m = m + 9; } 
      else if (mon === 5) { m = m + 12; } 
      else if (mon === 6) { m = m + 14; } 
      else if (mon === 7) { m = m + 17; } 
      else if (mon === 8) { m = m + 20; } 
      else if (mon === 9) { m = m + 22; } 
      else if (mon === 10) { m = m + 25; } 
      else if (mon === 11) { m = m + 27; } 
   }
   let odd = (m + date + f) % 7;
  switch (odd) {
     case 0: return "SUNDAY";
             break;
     case 1: return "MONDAY";
             break;
     case 2: return "TUESDAY";
             break;
     case 3: return "WEDNESDAY";
             break;         
     case 4: return "THURSDAY";
             break;
     case 5: return "FRIDAY";
             break;
     case 6: return "SATURDAY";
             break;
  }
 }