// DOM nedir?
document.getElementById("domSonuc").textContent =
    "DOM, HTML sayfasindaki ogelere erismemizi ve onlari degistirmemizi saglar.";

// DOM tekrari
document.getElementById("tekrar").textContent = "Bu yazi JavaScript ile degistirildi.";

// document nesnesi
document.getElementById("documentBilgi").textContent =
    "Sayfanin document nesnesi kullaniliyor.";

// document ozellikleri
document.getElementById("ozellikler").textContent =
    "Sayfa basligi: " + document.title;

// document metotlari
document.getElementById("metotlar").textContent =
    "getElementById metodu ile bu oge secildi.";

// nesne secme ve deger atama
document.getElementById("baslik").textContent = "Yeni DOM Basligi";

// document dizileri
let paragraflar = document.getElementsByTagName("p");
document.getElementById("diziBilgi").textContent =
    "Sayfadaki paragraf sayisi: " + paragraflar.length;

// document tekrari
document.getElementById("tekrarSonuc").textContent =
    "document ile HTML ogelerine erisebiliriz.";

// HTML olaylari
// HTML olaylari; tiklama, sayfanin yuklenmesi gibi durumlardir.

// OnClick olayi ile fonksiyon calistirma
function selamVer() {
    document.getElementById("olaySonuc").textContent = "Merhaba!";
}

// 12. OnClick olayi ile CSS kodu uygulama
function renkDegistir() {
    document.getElementById("renkliYazi").style.color = "red";
    document.getElementById("renkliYazi").style.fontSize = "24px";
}

// OnClick olayi ile this nesnesi
function kendiniDegistir(oge) {
    oge.textContent = "Bu yaziyi tiklayarak degistirdin.";
    oge.style.color = "blue";
}

// HTML olaylari ile nesnelere deger atama
function degerAta() {
    document.getElementById("sonucKutusu").value = "JavaScript degeri";
}

// onload olayi ile fonksiyon calistirma
function sayfaYuklendi() {
    document.getElementById("yuklenme").textContent =
        "Sayfa yuklendi ve onload fonksiyonu calisti.";
}

// HTML olaylari tekrari
function olayTekrari() {
    document.getElementById("olayTekrarSonuc").textContent =
        "Butona tiklama olayi gerceklesti.";
}

// window nesnesi
document.getElementById("windowBilgi").textContent =
    "Tarayici penceresinin genisligi: " + window.innerWidth;

// window nesnesi ile baglanti acmak
function baglantiAc() {
    window.open("https://www.google.com", "_blank");
}

// SetTimeout ile gecikmeli kod calistirma
function gecikmeliCalistir() {
    document.getElementById("zamanSonuc").textContent = "3 saniye bekleniyor...";

    setTimeout(function() {
        document.getElementById("zamanSonuc").textContent =
            "3 saniye sonra bu yazi gorundu.";
    }, 3000);
}

// SetInterval ile periyodik kod calistirma
let sayac = 0;
let zamanlayici;

function sayaciBaslat() {
    clearInterval(zamanlayici);
    sayac = 0;
    document.getElementById("sayac").textContent = sayac;

    zamanlayici = setInterval(function() {
        sayac++;
        document.getElementById("sayac").textContent = sayac;
    }, 1000);
}

function sayaciDurdur() {
    clearInterval(zamanlayici);
}

// window tekrari
function pencereBilgisi() {
    alert("Pencere genisligi: " + window.innerWidth);
}

// navigator nesnesi
document.getElementById("navigatorBilgi").textContent =
    "Tarayici bilgisi: " + navigator.userAgent;

// screen nesnesi
document.getElementById("screenBilgi").textContent =
    "Ekran genisligi: " + screen.width +
    ", ekran yuksekligi: " + screen.height;

// location nesnesi
document.getElementById("locationBilgi").textContent =
    "Sayfa adresi: " + window.location.href;

// history nesnesi
document.getElementById("historyBilgi").textContent =
    "Tarayici gecmisi kayit sayisi: " + history.length;

// JavaScript referansi
document.getElementById("referans").innerHTML =
    'JavaScript kaynaklari: <a href="https://developer.mozilla.org/tr/docs/Web/JavaScript" target="_blank">MDN JavaScript</a>';

window.onload = sayfaYuklendi;
