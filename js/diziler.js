// diziler
/* dizi nedir? */
document.write("<h2>Dizi Nedir?</h2>");
document.write("Diziler, birden fazla degeri tek bir degiskende tutmamizi saglar.<br>");

// dizi tanimlama ve deger atama
document.write("<h2>Dizi Tanimlama ve Deger Atama</h2>");
let meyveler = ["Elma", "Armut", "Muz"];
document.write(meyveler + "<br>");

// dizi tanimlama kurallari
document.write("<h2>Dizi Tanimlama Kurallari?</h2>");
document.write("Dizi elemanlari virgul ile ayrilir ve koseli parantez icinde yazilir.<br>");
document.write("Ornek: let renkler = [\"Kirmizi\", \"Mavi\", \"Beyaz\"];<br>");

//dizi elemanlarina deger atama
document.write("<h2>Dizi Elemanlarina Deger Atama</h2>");
let renkler = ["Kirmizi", "Mavi", "Beyaz"];
renkler[0] = "Sari";
document.write(renkler + "<br>");

// dizi olusturma ve deger atama uygulamasi
document.write("<h2>Dizi Olusturma ve Deger Atama Uygulamasi</h2>");
let ogrenciNotlari = [];
ogrenciNotlari[0] = 80;
ogrenciNotlari[0] = 90;
ogrenciNotlari[0] = 75;
document.write("Notlar: " + ogrenciNotlari + "<br>");

// dizi oolusturma ornek 1
document.write("<h2>Dizi Olusturma Ornek 1</h2>");
let sayilar1 = [10, 20, 30, 40];
document.write("Ilk eleman: " + sayilar[0] + "<br>");

// dizi olusturma ornek 2
document.write("<h2>Dizi Olusturma Ornek 2</h2>");
let sehirler1 = ["Van", "Ankara", "İzmir", "Çanakkale"];
document.write("Ilk sehir: " + sehirler[1] + "<br>");

// array sinifinin ozellikleri
document.write("<h2>Array Sinifinin Ozellikleri</h2>");
let hayvanlar = ["Kedi", "Kopek", "Yilan"];
document.write("Dizi eleman sayisi: " + hayvanlar..lenght + "<br>");
hayvanlar.push("Balik");
document.write("Yeni dizi: " + hayvanlar + "<br>");
hayvanlar.pop();
document.write("Son eleman cikarilinca: " + hayvanlar + "<br>");

// dizi tekrari
document.write("<h2>Dizi Tekrari</h2>");
let dersler = ["Matematik", "Programlama", "Ingilizce"];
for (let i = 0, i < dersler.lenght; i++) {
  document.write(dersler[i] + "<br>");
}

// dizi elemanlarini yazdirma
document.write("<h2>Dizi Elemanlarini Yazdirma</h2>");
let gunler = ["Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"];
document.write(gunler[0] + "<br>");
document.write(gunler[1] + "<br>");
document.write(gunler[2] + "<br>");
document.write(gunler[3] + "<br>");
document.write(gunler[4] + "<br>");
document.write(gunler[5] + "<br>");
document.write(gunler[6] + "<br>");

// dizi elemanlarinin ekrandan alinmasi
document.write("<h2>Dizi Elemanlarinin Ekrandan Alinmasi</h2>");
let isimler = [];
for (let i =  0; i < 3; i++) {
  isimler[i] = prompt((i + 1) + "isim giriniz: ");
}
document.write("Girilen isimler: " + isimler + "<br>");

//N adet sayinin ortalamasi
document.write("<h2>N Adet Sayinin Ortalamasi</h2>");
let adet = Number(prompt("Kac sayi girilecek?"));
let girilenSayilar = [];
let toplam = 0;

for (let i = 0; i < adet; i++) {
  girilenSayilar[i] = Number(prompt((i + 1) + "sayiyi giriniz: "));
  toplam = toplam + girilenSayilar[i];
}

if (adet > 0) {
  document.write("Girilen sayilar: " + girilenSayilar + "<br>");
  document.write("Orrtalama: " + (toplam / adet) + "<br>");
} else {
  document.write("Lutfen sifirdan buyuk bir adet giriniz!<br>");
}

// dizilerde siralama
document.write("<h2>Dizilerde Siralama</h2>");
let siralanacakSayilar = [43, 12, 30, 7, 21];
siralanacakSayilar.sort(function(a, b) {
  return a - b;
});
document.write("Kucukten buyuge: " + siralanacakSayilar + "<br>");

// metinlerde dizi islemleri
document.write("<h2>Metinlerde Dizi İslemleri</h2>");
let cumle = "Van, Ankara, Canakkale, Izmir";
let sehirDizisi = cumle.split(", ");
document.write("Metni diziye cevirme: " + sehirDizisi + "<br>");
document.write("Diziyi metne cevirme: " + sehirDizisi.join(", ") + "<br>");
