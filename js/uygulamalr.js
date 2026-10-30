<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Uygulamalari</title>
</head>
<body>

    <h1>JavaScript Uygulamalari</h1>
    <p>Sonuclari gormek icin acilan pencerelere deger giriniz.</p>

    <script>
        // JavaScript icinde HTML kullanimi
        document.write("<h2>JavaScript Konu Uygulamalari</h2>");

        // ad yazdirma uygulamasi
        let kullaniciIsmi = prompt("Adinizi giriniz:");
        document.write("<p>Merhaba " + kullaniciIsmi + "!</p>");

        // girilen sayinin karesi
        let kareSayisi = Number(prompt("Karesini bulmak icin bir sayi giriniz:"));
        let kareSonucu = kareSayisi * kareSayisi;
        alert("Sayinin karesi: " + kareSonucu);

        // iki sayinin toplami
        let ilkSayi = Number(prompt("Birinci sayiyi giriniz:"));
        let ikinciSayi = Number(prompt("Ikinci sayiyi giriniz:"));
        let toplamSonucu = ilkSayi + ikinciSayi;
        alert("Iki sayinin toplami: " + toplamSonucu);

        // uc sayinin ortalamasi
        let ortSayi1 = Number(prompt("Birinci sayiyi giriniz:"));
        let ortSayi2 = Number(prompt("Ikinci sayiyi giriniz:"));
        let ortSayi3 = Number(prompt("Ucuncu sayiyi giriniz:"));
        let ortalama = (ortSayi1 + ortSayi2 + ortSayi3) / 3;
        alert("Uc sayinin ortalamasi: " + ortalama);

        // dikdortgen alani ve cevresi
        let kisaKenar = Number(prompt("Dikdortgenin kisa kenarini giriniz:"));
        let uzunKenar = Number(prompt("Dikdortgenin uzun kenarini giriniz:"));
        let dikdortgenAlani = kisaKenar * uzunKenar;
        let dikdortgenCevresi = 2 * (kisaKenar + uzunKenar);

        alert("Dikdortgenin alani: " + dikdortgenAlani);
        alert("Dikdortgenin cevresi: " + dikdortgenCevresi);

        // dairenin alani ve cevresi
        let yaricap = Number(prompt("Dairenin yaricapini giriniz:"));
        let pi = 3.14;
        let daireAlani = pi * yaricap * yaricap;
        let daireCevresi = 2 * pi * yaricap;

        alert("Dairenin alani: " + daireAlani);
        alert("Dairenin cevresi: " + daireCevresi);

        // degisken konu tekrari
        let tekrarSayi = 10;
        tekrarSayi = 20;
        const tekrarOkul = "Van YYU";

        console.log(tekrarSayi);
        console.log(tekrarOkul);

        document.write("<p>Degiskenler, veri tipleri ve hesaplama uygulamalari tamamlandi.</p>");
    </script>

</body>
</html>
