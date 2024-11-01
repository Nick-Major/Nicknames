export let wrongUser1 = 'Игрок';
export let wrongUser2 = '_Player';
export let wrongUser3 = '-Player';
export let wrongUser4 = '1Player';
export let wrongUser5 = 'Player_';
export let wrongUser6 = 'Player-';
export let wrongUser7 = 'Player1';
export let wrongUser8 = '1234Player';
export let wrongUser9 = 'Player1234';

export default function validateUsername(userName) {
    let validCharacters = /[(a-z\_\-0-9)]/.test(userName);// eslint-disable-line
    let startsWithNumbersAndSymbols = /^[^\_\-0-9]/.test(userName);// eslint-disable-line
    let endsWithNumbersAndSymbols = /[^\_\-0-9]$/.test(userName);// eslint-disable-line
    let moreThanThreeNumbers = /(\d{4,})/.test(userName);
    return validCharacters && startsWithNumbersAndSymbols && endsWithNumbersAndSymbols && !moreThanThreeNumbers;
};

let correctSymbols = !validateUsername(wrongUser1) && !validateUsername(wrongUser2) && !validateUsername(wrongUser3);
let correctStart = !validateUsername(wrongUser2) && !validateUsername(wrongUser3) && !validateUsername(wrongUser4);
let correctEnd = !validateUsername(wrongUser5) && !validateUsername(wrongUser6) && !validateUsername(wrongUser7);
let correctOrderOfNumbers = !validateUsername(wrongUser8) && !validateUsername(wrongUser9);

console.log(correctSymbols);
console.log(correctStart);
console.log(correctEnd);
console.log(correctOrderOfNumbers);



