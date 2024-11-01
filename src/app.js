let user = '-Player'

function validateUsername(userName) {
    let validCharacters = /[(a-z\_\-0-9)]/.test(userName);
    let startsWithNumbersAndSymbols = /^[^\_\-0-9]/.test(userName);
    let endsWithNumbersAndSymbols = /[^\_\-0-9]$/.test(userName);
    let moreThanThreeNumbers = /(\d{4,})/.test(userName);
    return validCharacters && startsWithNumbersAndSymbols && endsWithNumbersAndSymbols && !moreThanThreeNumbers;
};

console.log(validateUsername(user));
