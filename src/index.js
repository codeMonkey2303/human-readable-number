module.exports = function toReadable (number) {
  const a = ['','one ','two ','three ','four ','five ','six ','seven ','eight ','nine ','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const b = ['','','twenty ','thirty ','forty ','fifty ','sixty ','seventy ','eighty ','ninety ','hundred ']
let result = '';
let numStr = String(number);
let num = +numStr[0];
let num2 = +numStr[1];
let num3 = +numStr[2];
let num4 = Number(numStr[1] + numStr[2]);
//1 - 99
if (number === 0) {
  result = 'zero'
 } else if (number < 20) {
   result = a[number]
  } else if (number > 19 && number < 100 && number % 10) {
   result = b[num]+a[num2]
   } else if (number > 19 && number < 100 && number % 10 === 0) {
     result = b[num]
    };
//100 - 999
if (number > 99 && num2 < 2 && number % 100) {
   result = a[num] + b[10] + a[num4] 
 } else if (number > 99 && num2 >= 2 && number % 100) {
   result = a[num] + b[10] + b[num2] + a[num3] 
  } else if (number > 99 && num2 === 0 && number % 100 === 0) {
   result = a[num] + b[10]
   };
return result.trim();
}
