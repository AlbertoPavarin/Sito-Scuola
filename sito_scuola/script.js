let giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', ' Giovedì', 'Venerdì', ' Sabato'];
let mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
const data = new Date();
let giorno = giorni[data.getDay()];
let giornoN = data.getDate();
if (giornoN < 10)
{
    giornoN = '0' + giornoN;
}
const mese = mesi[data.getMonth()];
const anno = data.getFullYear();
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#date').innerHTML = giorno + ', ' + giornoN.toString() + ' ' + mese + ' ' + anno.toString();
});