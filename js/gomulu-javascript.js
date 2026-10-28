// gomulu javascript sisinflari
// javascript'in kendi icinde hazir olarak sundugu siniflar ve nesneler vardir. bunlari kullanarak matematik, metin, sayi ve tarih islemleri yapilabilir

// degisken veri tiplerini hatirlayalim
let metin = "merhaba";
let sayi = 25;
let ondalikliSayi = 12.4;
let dogruMu = true;
let bosDeger = null;
let tanimsiz;

document.write("<h3>Degisken Veri Tipleri</h3>");
document.write("Metin: " + typeof metin + "<br>");
document.write("Sayi: " + typeof sayi + "<br>");
document.write("Ondalikli Sayi: " + typeof ondalikliSayi + "<br>");
document.write("Mantiksal Deger: " + typeof dogruMu + "<br>");
document.write("Bos Deger: " + typeof bosDeger + "<br>");
document.write("Tanimlanmamis Deger: " + typeof tanimsiz + "<br>");

// math sinifi
document.write("<h3>Math Sinifi</h3>");
document.write("Pi sayisi: " + Math.PI + "<br>");
document.write("Mutlak deger: " + Math.abs(-8) + "<br>");
document.write("Yukari yuvarlama: " + Math.ceil(4.2) + "<br>");
document.write("Asagi yuvarlama: " + Math.floor(4.8) + "<br>");
document.write("En yakin tam sayi: " + Math.round(4.6) + "<br>");
document.write("Karekok: " + Math.sqrt(25) + "<br>");
document.write("2'nin 3. kuvveti: " + Math.pow(2, 3) + "<br>");
document.write("Buyuk sayi: " + Math.max(5, 12, 7) + "<br>");
document.write("Kucuk sayi: " + Math.min(2, 5, 10) + "<br>");

// math sinifi uygulama
let sayi = Number(prompt("Bir sayi giriniz:"));

document.write("<h3>Math Sinifi Uygulamasi</h3>");
document.write("Girilen sayi: " + sayi + "<br>");
document.write("Mutlak degeri: " + Math.abs(sayi) + "<br>");
document.write("Karesi: " + Math.pow(sayi, 2) + "<br>");
document.write("Karekoku: " + Math.sqrt(Math.abs(sayi)) + "<br>");
document.write("Yukari yuvarlama: " + Math.ceil(sayi) + "<br>");
document.write("Asagi yuvarlama: " + Math.floor(sayi) + "<br>");
document.write("En yakin tam sayi: " + Math.round(sayi) + "<br>");

// string sinifi. string, metinlerle calismamizi saglar
let isim = "Nur Aydemir";

document.write("<h3>String Sinifi</h3>");
document.write("Metin: " + isim + "<br>");
document.write("Metnin uzunlugu: " + isim.lenght + "<br>");
document.write("Buyuk harf: " + isim.toUpperCase() + "<br>");
document.write("Kucuk harf: " + isim.toLowerCase() + "<br>");

// stribg sinifi uygulama
let cumle = "JavaScript ogreniyorum";

documnet.write("<h3>String Sinifi Uygulama</h3>");
document.write("Cumle: " + cumle + "<br>");
document.write("Ilk karakter: " + cumle.charAt(0) + "<br>");
document.write("Ilk 10 karakter: " + cumle.slice(0, 10) + "<br>");
documnet.write("JavaScript kelimesi var mi: " + cumle.includes("JavaScript") + "<br>");
document.write("Kelime degistirme: " + cumle.replace("JavaScript", "Programlama") + "<br>");

// number sinifi. number, sayisal degerlerle calismak icin kullanilir
let fiyat 
= 24.5678;

document.write("<h3>Number Sinifi</h3>");
document.write("Sayi: " + fiyat + "<br>");
document.write("Iki basamakli ondalik: " + fiyat.toFixed(2) + "<br>");
document.write("Metinden sayiya: " + Number("124") + "<br>");
document.write("Sayi mi: " + Number.isNaN(Number("abc")) + "<br>");

// number ve string fonksiyonlari
let metinSayi = "45";
let gercekSayi = Number(metinSayi);
let sayidanMetin = String(gercekSayi);

document.write("<h3>Number ve String Fonksiyonları</h3>");
document.write("Metin olarak gelen deger: " + metinSayi + "<br>");
document.write("Number ile sayiya cevirme: " + gercekSayi + "<br>");
document.write("String ile metne cevirme: " + sayidanMetin + "<br>");
document.write("parseInt ile tam sayi: " + parseInt("18.7") + "<br>");
document.write("parseFloat ile ondalikli sayi: " + parseFloat("18.7") + "<br>");

// number sinifi tekar
let girilenDeger = prompt("Bir sayi giriniz: ");
let donusturulenSayi = Number(girilenDeger);

document.write("<h3>Number Sinifi Tekrar</h3>");

if (girilenDeger != && !Number.isNaN(donusturulenSayi)) {
  document.write("Girdiginiz sayinin iki kati: " + (donusturulenSayi * 2) + "<br>");
} else {
  document.write("Gecerli bir sayi girmediniz.<br>");
}

// date sinifi. date, tarih ve saat bilgileriyle calismamizi saglar
let simdi = new Date();

document.write("<h3>Date Sinifi</h3>");
document.write("Su anki tarih ve saat: " + simdi + "<br>");

// date sinifinin metotlari
document.write("<h3>Date Sinifi Tekrar</h3>");
document.write("Yil: " + simdi.getFullYear() + "<br>");
document.write("Ay (0-11): " + simdi.getMonth() + "<br>");
document.write("Ay (1-12): " + (simdi.getMonth() + 1) + "<br>");
document.write("Ayın gunu: " + simdi.getDate() + "<br>");
document.write("Haftanin gunu (0-6): " + simdi.getDay() + "<br>");
document.write("Saat: " + simdi.getHours() + "<br>");
document.write("Dakika: " + simdi.getMinutes() + "<br>");
document.write("Saniye: " + simdi.getSeconds() + "<br>");

// date sinifi uygulama
let dogumYili = Number(prompt("Dogum yilinizi giriniz: "));
let buYil = new Date().getFullYear();

document.write("<h3>Date Uygulamasi</h3>");

if (dogumYili > 0 && dogumYili <= buYil) {
  document.write("Dogum yiliniz: " + dogumYili + "<br>");
  document.write("Yaklasik yasiniz: " + (buYil - dogumYili) + "<br>");
} else {
  document.write("Gecerli bir dogum yili giriniz.<br>");
}

// date sinifi tekrar
let belirliTarih = new Date(2026, 10, 28);

document.write("<h3>Date Sinifi Tekrari</h3>");
document.write("Olusturulan tarih: " + belirliTarih.getDate() + "/" +
               (belirliTarih.getMonth() + 1) + "/" +
               belitliTarih.getFullYear() + "<br>");
