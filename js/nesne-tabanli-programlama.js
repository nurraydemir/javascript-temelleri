/* programlama teknikleri
yapisal (prosedurel) programlama: program adim adim yazilir
fonksiyonel programlama: fonksiyonlar on plandadir
nesne tabanli programlama: veriler ve islemler nesnelerle duzenlenir */

/* nesne tabanli programlama ozellikleri
sinif (class): nesne olusturmak icin kullanilan taslak
nesne (object): siniftan olusturulan ornek
ozellik (property): nesnenin verisi
metot (method): nesnenin yaptığı iş*/

// sinif ve nesne; sinif, bir taslak ve nesne bu taslaga gore olusturulan ornektir
class Ogrenci {
  constructor(ad, bolum) {
    this.ad = ad;
    this.bolum = bolum;
  }
}

let ogrenci1 = new Ogrenci("Nur", "Bilgisayar Programciligi");
let ogrenci2 = new Ogrenci("Yusuf", "İlkögretim Matematik Ogretmenligi");

document.write("<h3Sinif ve Nesne</h3>");
document.write("Ogrenci 1: " + ogrenci1.ad + " - " + ogrenci1.bolum + "<br>");
document.write("Ogrenci 2: " + ogrenci2.ad + " - " + ogrenci2.bolum + "<br>");

// yapici fonksiyon nedir
// constructor, new ile nesne olusturulurken calisir
// nesnenin baslangic ozellikklerini belirler
class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }
}

let araba1 = new Araba("Toyota", "Corolla");

document.write("<h3>Yapici Fonksiyon</h3>");
document.write(araba1.marka + " " + araba1.model + "<br>");

// sinif metotlari
class Selamlama {
  merhaba() {
    return "Merhaba!";
  }
}

let selam = new Selamlama();

document.write("<h3>Sinif Metotlari</h3>");
document.write(selam.merhaba() + "<br>");

// sinif ozellikleri
class Telefon {
  constructor(marka, fiyat) {
    this.marka = marka;
    this.fiyat = fiyat;
  }
}

let telefon1 = new Telefon("Samsung", 120000);

document.write("<h3>Sinif Ozellikleri</h3>");
document.write("Marka: " + telefon1.marka + "<br>");
document.write("Fiyat: " + telefon1.fiyat + "TL<br>");

// daire sinifi uygulama
class Daire {
  constructor(yaricap) {
    this.yaricap = yaricap;
  }

  alanHesapla() {
    return Math.PI * this.yaricap * this.yaricap;
  }

  cevreHesapla() {
    return 2 * Math.PI * this.yaricap;
  }
}

let daireYaricapi = Number(prompt("Dairenin yaricapini giriniz: "));

if (daireYaricapi > 0) {
  let daire1 = new Daire(daireYaricapi);

  document.write("<h3>Daire Uygulamasi</h3>");
  document.write("Yaricap: " + daire1.yaricap + "<br>");
  document.write("Alan: " + daire1.alanHesapla().toFixed(2) + "<br>");
  document.write("Cevre: " + daire1.cevreHesapla().toFixed(2) + "<br>");
} else {
  document.write("Yaricap sifirdan buyuk olmalidir!<br>");
}

// ucgen sinifi uygulama
class Ucgen {
  constructor(kenar1, kenar2, kenar3) {
    this.kenar1 = kenar1;
    this.kenar2 = kenar2;
    this.kenar3 = kenar3;
  }

  cevreHesapla() {
    return this.kenar1 + this.kenar2 + this.kenar3;
  }

  alanHesapla() {
    let yariCevre = this.cevreHesapla() / 2;

    return Math.sqrt(
      yariCevre *
      (yariCevre - this.kenar1) *
      (yariCevre - this.kenar2) *
      (yariCevre - this.kenar3) 
    );
  }
}

let kenar1 = Number(prompt("Ucgenin birinci kenarini giriniz: "));
let kenar1 = Number(prompt("Ucgenin ikinci kenarini giriniz: "));
let kenar1 = Number(prompt("Ucgenin ucuncu kenarini giriniz: "));

if (
  kenar1 > 0 &&
  kenar2 > 0 &&
  kenar3 > 0 &&
  kenar1 + kenar2 > kenar3 &&
  kenar1 + kenar3 > kenar2 &&
  kenar2 + kenar3 > kenar1
) {
  let ucgen1 = new Ucgen(kenar1, kenar2, kenar3);

  document.write("<h3>Ucgen Uygulamasi</h3>");
  document.write("Cevre: " + ucgen1.cevreHesapla() + "<br>");
  document.write("Alan: " + ucgen1.alanHesapla().toFixedd(2) + "<br>");
} else {
  document.write("Gecerli bir sayi giriniz!<br>");
}
