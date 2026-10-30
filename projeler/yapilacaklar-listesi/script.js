let gorevler = [];

function kayitlariYukle() {
    let kayit = localStorage.getItem("gorevlerim");

    if (kayit !== null) {
        try {
            gorevler = JSON.parse(kayit);

            if (!Array.isArray(gorevler)) {
                gorevler = [];
            }
        } catch (hata) {
            gorevler = [];
        }
    }

    gorevleriGoster();
}

function gorevleriKaydet() {
    localStorage.setItem("gorevlerim", JSON.stringify(gorevler));
}

function gorevEkle() {
    let kutu = document.getElementById("gorevInput");
    let metin = kutu.value.trim();
    let mesaj = document.getElementById("mesaj");

    if (metin === "") {
        mesaj.textContent = "Lütfen bir görev yaz.";
    } else {
        let yeniGorev = {
            metin: metin,
            tamamlandi: false
        };

        gorevler.push(yeniGorev);

        gorevleriKaydet();
        gorevleriGoster();

        kutu.value = "";
        mesaj.textContent = "Görev eklendi.";
    }
}

function gorevleriGoster() {
    let liste = document.getElementById("gorevListesi");

    liste.textContent = "";

    for (let i = 0; i < gorevler.length; i++) {
        let oge = document.createElement("li");
        oge.className = "gorev";

        let kutu = document.createElement("input");
        kutu.type = "checkbox";
        kutu.checked = gorevler[i].tamamlandi;

        kutu.onclick = function() {
            gorevTamamla(i);
        };

        let yazi = document.createElement("span");
        yazi.className = "gorev-metni";
        yazi.textContent = gorevler[i].metin;

        if (gorevler[i].tamamlandi) {
            yazi.className = "gorev-metni gorev-tamamlandi";
        }

        let sil = document.createElement("button");
        sil.textContent = "Sil";
        sil.className = "sil-butonu";

        sil.onclick = function() {
            gorevSil(i);
        };

        oge.appendChild(kutu);
        oge.appendChild(yazi);
        oge.appendChild(sil);

        liste.appendChild(oge);
    }

    istatistikGuncelle();
}

function gorevTamamla(sira) {
    gorevler[sira].tamamlandi = !gorevler[sira].tamamlandi;

    gorevleriKaydet();
    gorevleriGoster();

    document.getElementById("mesaj").textContent = "Görev silindi.";
}

function gorevSil(sira) {
    gorevler.splice(sira, 1);

    gorevleriKaydet();
    gorevleriGoster();

    document.getElementById("mesaj").textContent = "örev silindi";
}
function istatistikGuncelle() {
    let tamamlanan = 0;

    for (let i = 0; i < gorevler.length; i++) {
        if (gorevler[i].tamamlandi) {
            tamamlanan++;
        }
    }

    document.getElementById("gorevSayisi").textContent =
        "Toplam: " + gorevler.length;

    document.getElementById("tamamlananSayisi").textContent =
        "Tamamlanan: " + tamamlanan;
}

document.getElementById("ekleButonu").onclick = gorevEkle;

document.getElementById("gorevInput").onkeydown = function(olay) {
    if (olay.key === "Enter") {
        gorevEkle();
    }
};

kayitlariYukle();