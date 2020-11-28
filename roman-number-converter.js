'use strict'

const convertToRoman = function(num) {
    const decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romanized = "";

    for (let i = 0; i < decimalNum.length; i++) {
        while (decimalNum[i] <= num) {
            romanized += romanNum[i];
            num -= decimalNum[i];
        }
    }

    return romanized;
};

// test here
console.log(convertToRoman(36));