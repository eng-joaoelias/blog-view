const dataHoje = new Date();

const diaHoje = dataHoje.getDay();
const mesAtual = dataHoje.getMonth();
const anoAtual = dataHoje.getFullYear();
let stringMes;
let diaHojeExtenso;
let localEscritaData = window.document.querySelector("#diaHoje");

switch (mesAtual) {
    case 0:
        stringMes = "janeiro"
        break;
    case 1:
        stringMes = "ferereiro"
        break;
    case 2:
        stringMes = "março"
        break;
    case 3:
        stringMes = "abril"
        break;
    case 4:
        stringMes = "maio"
        break;
    case 5:
        stringMes = "junho"
        break;
    case 6:
        stringMes = "julho"
        break;
    case 7:
        stringMes = "agosto"
        break;
    case 8:
        stringMes = "setembro"
        break;
    case 9:
        stringMes = "outubro"
        break;
    case 10:
        stringMes = "novembro"
        break;
    case 11:
        stringMes = "dezembro"
        break;
    default:
        break;
}

if (diaHoje < 10) {
    diaHojeExtenso = "0" + diaHoje + " de " + stringMes + " de " + anoAtual + ".";
} else {
    diaHojeExtenso = diaHoje + " de " + stringMes + " de " + anoAtual + ".";
}

localEscritaData.innerText = diaHojeExtenso;