// formlarda fonksiyon kullanimi
function mesajGoster() {
    document.getElementById("mesaj").textContent = "Butona tikladin!";
}

// degisken veya deger yazdirma
function degerYazdir() {
    let isim = "Nur";
    document.getElementById("degerSonuc").textContent = isim;
}

// formdan veri okuma ve yazma
function veriOkuYaz() {
    let isim = document.getElementById("isim").value;
    document.getElementById("veriSonuc").textContent =
        "Merhaba " + isim;
}

// sayinin karesi
function kareHesapla() {
    let sayi = Number(document.getElementById("sayi").value);
    document.getElementById("kareSonuc").textContent =
        "Sayinin karesi: " + (sayi * sayi);
}

// iki sayinin toplami
function sayilariTopla() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
    document.getElementById("toplamSonuc").textContent =
        "Toplam: " + (sayi1 + sayi2);
}

// kontrollu kare hesabi
function kontrolluKareHesapla() {
    let deger = document.getElementById("kontrolluSayi").value;

    if (deger === "") {
        document.getElementById("kontrolluSonuc").textContent =
            "Lutfen bir sayi giriniz.";
    } else if (isNaN(Number(deger))) {
        document.getElementById("kontrolluSonuc").textContent =
            "Girdiginiz deger bir sayi olmalidir.";
    } else {
        let sayi = Number(deger);
        document.getElementById("kontrolluSonuc").textContent =
            "Sayinin karesi: " + (sayi * sayi);
    }
}

// kullanici dostu kare hesabi
function kullaniciDostuKare() {
    let deger = document.getElementById("dostSayi").value;
    let sonuc = document.getElementById("dostSonuc");

    if (deger.trim() === "") {
        sonuc.textContent = "Bir sayi yazmayi unuttun!";
        return;
    }

    if (isNaN(Number(deger))) {
        sonuc.textContent = "Lutfen sadece sayi gir.";
        return;
    }

    let sayi = Number(deger);
    sonuc.textContent = sayi + " sayisinin karesi " +
        (sayi * sayi) + " olarak hesaplandi.";
}

// form tekrari
function formTekrari() {
    let sayi = Number(document.getElementById("tekrarSayi").value);
    let sonuc = document.getElementById("tekrarSonuc");

    if (document.getElementById("tekrarSayi").value === "") {
        sonuc.textContent = "Lutfen bir sayi giriniz.";
    } else {
        sonuc.textContent = "Girilen sayi: " + sayi +
            " | Karesi: " + (sayi * sayi);
    }
}
