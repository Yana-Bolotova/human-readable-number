const numbers = { 
    1: 'one', 
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

module.exports = function toReadable (number) {
    let result = '';

    if (number === 0) {
        return 'zero';
    };

    if (number < 20) {
        result += numbers[number]; 
    };

    if (number % 10 === 0 && number >= 20 && number <= 90) {
       result += numbers[Math.trunc(number / 10) * 10];
    };

    if (number % 10 !== 0 && number > 20 && number <= 99) {
        result += numbers[Math.trunc(number / 10) * 10] + ' ' + numbers[number % 10];
    };

    if (number % 100 === 0 && number >= 100 && number <= 900) {
        result += numbers[number / 100] + ' hundred';
    };

    if (number % 100 !== 0 && number >= 100 && number <= 999) {
        if (number % 100 <= 19)  {
            result += numbers[Math.trunc(number / 100)] + ' hundred ' + numbers[number % 100];
        } else if (number % 10 !== 0 && number % 100 > 19) {
            result += numbers[Math.trunc(number / 100)] + ' hundred ' + numbers[Math.trunc((number % 100) / 10) * 10] + ' ' + numbers[number % 10];
        } else if (number % 10 === 0 && number % 100 > 19) {
            result += numbers[Math.trunc(number / 100)] + ' hundred ' + numbers[Math.trunc((number % 100) / 10) * 10];
        };
    };

    return result;
}
