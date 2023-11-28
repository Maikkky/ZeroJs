const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop + ": " + obj[prop]);
}

/*
Looping for...in digunakan untuk mengulang melalui properti-properti dari sebuah objek. 
Di contoh ini, loop akan mengambil setiap properti dari objek obj dan mencetak nama properti beserta nilainya.
*/