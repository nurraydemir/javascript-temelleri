// if komutu koşul doğru ise beelirtilen kodu çalıştırır.
let yas = 20;

if (yas >= 18) {
  console.log("18 yasindan buyuksun.");
}

let sayi = 10;

// if uygulamaları
let sayi = 10;

if (sayi > 0) {
  console.log("sayi pozitiftir.");
}

// ,
let sicaklik = 30;

if (sicaklik > 25) {
  console.log("hava sicak.");
}

// if else komutu, koşul doğru değil ise çalışır.
let not = 45;

if (not >= 50) {
  console.log("gectiniz.");
} else {
  console.log("kaldiniz.");
}

// ,
let sayiKontrol = Number(prompt("bir sayi giriniz:"));

if (sayiKontrol > 0) {
  alert("girdiğiniz sayi pozitiftir.");
} else {
  alert("girdiğiniz sayi pozitif degildir.");
}

// girilen sayinin tek veya cift oldugunu bulma
let tekCift = Number(prompt("bir sayi giriniz: "));

if (tekCift % 2 == 0) {
  alert("sayi cifttir.");
} else {
  alert("sayi tektir.");
}

// if elseif else uygulama
// sayinin pozitif, negatif veya sifir oldugunu bulma
let durumSayisi = Number(prompt("bir sayi giriniz:"));

if (durumSayisi > 0) {
  alert("sayi pozitiftir.");
} else if (durumSayisi < 0) {
  alert("sayi negatiftir.");
} else {
  alert("sayi sifirdir.");
}

// sadece pozitif sayilarin karesi
let kareSayisi = Number(prompt("karesini bulmak uzere bir sayi giriniz: "));

if (kareSayisi > 0) {
  let kare = kareSayisi * kareSayisi;
  alert("sayinin karesi: " + kare);
} else {
  alert("lutfen pozitif bir sayi giriniz.");
}

// dairenin alani ve cevresi
let yaricap = Number(prompt("dairenin yaricapini giriniz: "));

if (yaricap > 0) {
  let pi = 3.14;
  let daireAlani = pi * yaricap * yaricap;
  let daireCevresi = 2 * pi * yaricap;

  alert("dairenin alani: " + daireAlani);
  alert("dairenin cevresi: " + daireCevresi);
} else {
  alert("yaricap pozitif olmalidir!");
}

// iki sayidan büyük olani bulma
let sayi1 = Number(prompt("ilk sayiyi giriniz: "));
let sayi2 = Number(prompt("ikşnci sayiyi giriniz: "));

if (sayi1 > sayi2) {
  alert("buyuk sayi: " + sayi1);
} else if (sayi2 > sayi1) {
  alert("buyuk sayi: " + sayi2);
} else {
  alert("iki sayi birbirine esittir.");
}

// gecti-kaldi programi
let sinavNotu = Number(prompt("sinav notunuzu giriniz: "));

if sinavNotu >= 50) {
  alert("gectiniz.");
} else {
  alert("kaldiniz.");
}
