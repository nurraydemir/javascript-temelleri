// dongu, bir kodun belirli sayida tekrar calistirilmasini saglar.

// for dongusu
for (let i = 1; i <= 3; i++) {
  console.log("merhaba");
}

// 1'den 5'e kadar sayilar
for (let sayac1 = 1; sayac1 <= 5; sayac1++) {
  console.log(sayac1);
}

// sifir-N arasi sayilar
let n1 = Number(prompt("N degeri giriniz: "));

for (let sayac2 = 0; sayac2 <= n1; sayac2++) {
  console.log(sayac2);
}

//  sifir-N arasi sayilarin toplamı
let n2 = Number(prompt("toplama için N sayisi giriniz: "));
let toplam1 = 0;

for (let sayac3 = 0; sayac3 <= n2; sayac3++) {
  toplam1 = toplam1 + sayac3;
}

console.log("toplam: ", toplam1);

// ,
for (let sayac4 = 10; sayac4 >= 1; sayac4--) {
  console.log(sayac4);
}

// while dongusu
let sayac5 = 1;

while (sayac5 <= 5) {
  console.log(sayac5);
  sayac5++
}

// 1'den 5'e kadar sayilarin toplamı
let sasyac6 = 1;
let toplam2 = 0;

while (sayac6 <= 5) {
  toplam2 = toplam2 + sayac6;
  sayac6++;
}

console.log("1-5 toplami: ", toplam2);

// do-while dongusu
let sayac7 = 1;

do {
  console.log(sayac7);
  sayac7++;
} while (sayac7 <= 5);

// do-while ile 1'den 5'e kadar sayilarin toplami
let syac8 = 1;
let toplam3n= 0;

do {
  toplam3 = toplam3 + sayac8;
  sayac8++;
} while (sayac8 <= 5);

console.log("do-while toplami: ", toplam3);

// sadece pozitif sayilarin toplami
let adet1 = Number(prompt("sayi giriniz: "));
let toplam4 = 0;

for (let sayac9 = 1; sayac9 <= adet1; sayacc9++) {
  let girilenSayi1 = Number(prompt(sayac9 + ". sayi giriniz: "));

  if (girilenSayi1 > 0) {
    toplam4 = toplam4 + girilenSayi1;
  }
}

console.log(""pozitif sayilar tooplami: ", toplam4);

// while
let sayac10 = 1;

while (sayac10 <= 3) {
  console.log("while tekrar:", sayac10);
  sayac10++;
}

// break komutu, donguyu tamamen bitirir
for (let syac11 = 1; syac11 <= 10; sayac11++) {
  if (sayac11 == 5) {
    break;
  }

  console.loog("break:", sayac11);
}

// continue komutu o turu atlar, dongu devam eder
for (let sayac12 = 1; sayac12 <= 5; sayac12++) {
  if (sayac12 == 3) {
    continue;
  }

  console.log("continue: ", sayac12);
}

/* sonsuz dongude kosul hep dogru oldugu icin hic durmaz
ornek:
while (true) {
  console.log("bu dongu sonsozdur");
}
*/

// olu dongude ise kosul bastan yanlis oldugu icin dongu hic calismaz
let sayac13 = 10;

while (sayac13 < 5) {
  console.log(sayac13);
  sayac13++;
}

// 1'den N'e kadar sayilar
let n3 = Number(prompt("1'den kaca kadar sayilsin?"));

for (let sayac15 = 1; sayac15 <= n3; sayac15++) {
    console.log(sayac15);
}


// 1'den N'e kadar olan sayilarin toplami
let n4 = Number(prompt("Toplamak icin N degerini giriniz:"));
let toplam5 = 0;

for (let sayac16 = 1; sayac16 <= n4; sayac16++) {
    toplam5 = toplam5 + sayac16;
}

console.log("1'den N'e toplam:", toplam5);


// ekrandan alinan sayilarin ortalamasi
let adet2 = Number(prompt("Kac sayinin ortalamasi alinacak?"));
let toplam6 = 0;

for (let sayac17 = 1; sayac17 <= adet2; sayac17++) {
    let girilenSayi2 = Number(prompt(sayac17 + ". sayiyi giriniz:"));
    toplam6 = toplam6 + girilenSayi2;
}

if (adet2 > 0) {
    let ortalama = toplam6 / adet2;
    console.log("Ortalama:", ortalama);
} else {
    console.log("Sayi adedi sifirdan buyuk olmalidir.");
}


// N faktoriyel
let n5 = Number(prompt("Faktoriyeli alinacak sayiyi giriniz:"));
let faktoriyel = 1;

if (n5 >= 0 && n5 % 1 == 0) {
    for (let sayac18 = 1; sayac18 <= n5; sayac18++) {
        faktoriyel = faktoriyel * sayac18;
    }

    console.log(n5 + "! =", faktoriyel);
} else {
    console.log("Lutfen sifir veya pozitif bir tam sayi giriniz.");
}


// iki deger arasindaki sayilarin toplami
let baslangic = Number(prompt("baslangic degerini giriniz:"));
let bitis = Number(prompt("bitis degerini giriniz:"));
let toplam7 = 0;

if (baslangic <= bitis) {
    for (let sayac19 = baslangic; sayac19 <= bitis; sayac19++) {
        toplam7 = toplam7 + sayac19;
    }

    console.log("iki deger arasindaki toplam:", toplam7);
} else {
    console.log("baslangic degeri bitis degerinden kucuk olmali.");
}
