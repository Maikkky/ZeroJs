// 1. Membentuk Kalimat
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

// 2. Akses Indeks - 1 per 1
let word2 = 'wow JavaScript is so cool';
let exampleFirstWord2 = word2[0] + word2[1] + word2[2];
let exampleSecondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let exampleThirdWord2 = word2[15] + word2[16];
let exampleFourthWord2 = word2[18] + word2[19];
let exampleFifthWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + exampleSecondWord2);
console.log('Third Word: ' + exampleThirdWord2);
console.log('Fourth Word: ' + exampleFourthWord2);
console.log('Fifth Word: ' + exampleFifthWord2);

// 3. Memecah Kalimat dengan Substring
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 24);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleSecondWord3);
console.log('Third Word: ' + exampleThirdWord3);
console.log('Fourth Word: ' + exampleFourthWord3);
console.log('Fifth Word: ' + exampleFifthWord3);

// 4. Memecah Kalimat dan Menghitung Panjang Kata
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let secondWord = word4.substring(4, 14);
let secondWordLength = secondWord.length;

let thirdWord = word4.substring(15, 17);
let thirdWordLength = thirdWord.length;

let fourthWord = word4.substring(18, 20);
let fourthWordLength = fourthWord.length;

let fifthWord = word4.substring(21, 24);
let fifthWordLength = fifthWord.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
