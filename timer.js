var darkmodestatus = 0;
function odliczanie() {
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;

    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;

    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML =
        godzina + ":" + minuta + ":" + sekunda;

    document.getElementById("kalendarz").innerHTML =
        dzien + "/" + miesiac + "/" + rok;

    if (darkmodestatus==0){
        if (godzina >= 20 || godzina < 6){
            darkmode();
            darkmodestatus = 1;
        }
    }
    setTimeout("odliczanie()", 1000);
}

