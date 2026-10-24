// fonksiyon, belirli bir isi yapan ve ihtiyac duyuldugunda cagırılarak calıstırılabılen kod grubudur

// deger dondurmeyen parametresiz fonksıyonlar
function selamVer() {
  document.write("merhaba  <br>");
}

selamVer();

// deger dondurmeyen tek parametreli fonksiyonlar
function kisiBilgisi(ad, soyad) {
  document.write("Ad: " + ad + ", Soyad: " + soyad + "<br>");
}

kisiBilgisi("Nur", "Aydemir");

// deger donduren fonksiyonlar
function besDondur() {
  return 5;
}

document.write("dönen değer: " + besDondur() + "<br>");

// deger donduren tek parametreli fonksiyonlar
function kareAl(sayi) {
  return sayi * sayi;
}

document.write("4 sayisinin karesi: " + kareAl(4) + "<br>");

// deger donduren cok parametreli fonksiyonlar
function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

document.write("toplam: " + topla(10, 20) + "<br>");

// ,
function cizgiCiz() {
  document.write("--------------<br>");
}

cizgiCiz();
document.write("fonksiyon<br>");
cizgiCiz();

// yerel ve kuresel degiskenler
let okul = "Van YYÜ";

function okulBilgisi() {
  let bolum = "Bilgisayar Programcılığı";

  document.write("Okul: " + okul + "<br>");
  document.write("Bölüm: " + bolum + "<br>");
}

okulBilgisi();
// okul kuresel degiskendir, fonksiyonun disinda tanimlanmistir
// bolum yerel degiskendir, fonksiyonun icinde tanimlanmistir

// harici JavaScript dosyalari
// bu kod harici bir .js dosyasına yazilmistir
// HTML dosyası bu dosyayı script etiketiyle cagiracaktir

// yazdirma fonksiyonu
function yazdir (metin) {
  document.write(metin + "<br>");
}

yazdir("bu metin yazdir fonksiyonuyla yazildi");

// N defa merhaba yaz
function merhabaYaz(adet) {
  for (let i = 1; i <= adet; i++) {
    document.write("merhaba<br>");
  }
}

let merhabaAdedi = Number(prompt("tekrar sayisi giriniz: "));
merhabaYaz(merhabaAdedi);

// kare fonksiyonu
function kare(sayi) {
  return sayi * sayi;
}

let kareSayisi = Number(prompt("karesi alınacak sayı: "));
document.write(kareSayisi + " sayısının karesi: " + kare(kareSayisi) + "<br>");

// topla fonksiyonu
function ikiSayiTopla(a, b) {
  return a + b;
}

let ilkSayi = Number(prompt("birinci sayı: "));
let ikinciSayi = Number(prompt("ikinci sayı: "));

document.write("iki sayının toplamı: " + ikiSayiTopla(ilkSayi, ikinciSayi) + "<br>");

// sifirdan N'e kadar çift sayılar
function ciftSayilariYaz(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            document.write(i + "<br>");
        }
    }
}

let ciftSinir = Number(prompt("Çift sayılar için N değerini giriniz:"));
ciftSayilariYaz(ciftSinir);


// X ile Y arası sayılar
function aradakiSayilariYaz(x, y) {
    if (x <= y) {
        for (let i = x; i <= y; i++) {
            document.write(i + "<br>");
        }
    } else {
        document.write("X, Y değerinden küçük veya eşit olmalıdır.<br>");
    }
}

let x = Number(prompt("Başlangıç X değerini giriniz:"));
let y = Number(prompt("Bitiş Y değerini giriniz:"));
aradakiSayilariYaz(x, y);


// 1'den N'e kadar sayıların toplamı
function sayilariTopla(n) {
    let toplam = 0;

    for (let i = 1; i <= n; i++) {
        toplam = toplam + i;
    }

    return toplam;
}

let toplamSinir = Number(prompt("Toplama için N değerini giriniz:"));
document.write("1'den N'e kadar toplam: " + sayilariTopla(toplamSinir) + "<br>");


// N faktöriyel
function faktoriyelHesapla(n) {
    let sonuc = 1;

    for (let i = 1; i <= n; i++) {
        sonuc = sonuc * i;
    }

    return sonuc;
}

let faktoriyelSayisi = Number(prompt("Faktöriyeli alınacak sayıyı giriniz:"));

if (faktoriyelSayisi >= 0 && faktoriyelSayisi % 1 == 0) {
    document.write(
        faktoriyelSayisi + "! = " + faktoriyelHesapla(faktoriyelSayisi) + "<br>"
    );
} else {
    document.write("Lütfen sıfır veya pozitif bir tam sayı giriniz.<br>");
}


// gömülü JavaScript fonksiyonları
document.write("Mutlak değer: " + Math.abs(-8) + "<br>");
document.write("Karekök: " + Math.sqrt(25) + "<br>");
document.write("Üs alma: " + Math.pow(2, 3) + "<br>");
document.write("Sayıya dönüştürme: " + Number("15") + "<br>");
document.write("Tam sayıya dönüştürme: " + parseInt("12.8") + "<br>");
