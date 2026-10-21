/* operatör nedir?
operatörler değerler üze3rinde islem yapabilmemizi sağlar. */
let a = 10;
let b = 5;

console.log(a + b);

// aritmetik operatörler
let sayi1 = 10;
let sayi2 = 3;

console.log("toplama:", sayi1 + sayi2);
console.log("cikarma:", sayi1 - sayi2);
console.log("carpma:", sayi1 * sayi2);
console.log("bolme:", sayi1 / sayi2);
console.log("kalan:", sayi1 % sayi2);
console.log("ussu:", sayi1 ** sayi2);

// artirma ve azaltma operatörleri
let sayac = 5;

sayac++;
console.log("artirma:", sayac);

sayac--;
console.log("azaltma:", sayac);

//esitlik ve iliski operatörleri
let sayiA = 10;
let sayiB = 5;

console.log("esit mi:", sayiA == sayiB);
console.log("esit degil mi:", sayiA != sayiB);
console.log("buyuk mu:", sayiA > sayiB);
console.log("kucuk mu:", sayiA < sayiB);
console.log("buyuk veya esit mi:", sayiA >= sayiB);
console.log("kucuk veya esit mi:", sayiA <= sayiB);

// deger ve veri tipi karsilastirmasi
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");

// atama operatörleri
let puan = 10;
console.log("ilk deger:", puan);

puan += 5;
console.log("+= sonrasi:", puan);

puan -= 3;
console.log("-= sonrasi:", puan);

puan *= 2;
console.log("*= sonrasi:", puan);

puan /= 4;
console.log("/= sonrasi:", puan);

puan %= 7;
console.log("%= sonrasi:", puan);

// operatör öncelik sirasi
let sonuc1 = 2 + 3 * 2;
console.log("carpma once:", sonuc1);

let sonuc2 = (2 + 3) * 5;
console.log("parantez once:", sonuc2);

let sonuc3 = 10 - 4 / 2;
console.log("bolme once:", sonuc3);

let sonuc4 = 2 ** 3 * 2;
console.log(us alma once:", sonuc4);
