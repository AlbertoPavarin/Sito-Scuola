// Array che contengono i giorni e i mesi
let giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', ' Giovedì', 'Venerdì', ' Sabato'];
let mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
// Variabile data
const data = new Date();
// Viene salvato nella variabile giorno il nome del giorno attuale
// Il numero del giorno della settimana è l'indice dell'array giorni
let giorno = giorni[data.getDay()];
// Viene preso il numero del giorno del mese
let giornoN = data.getDate();
if (giornoN < 10)
{
    giornoN = '0' + giornoN;
}
// Viene salvato il nome del mese utilizzando lo stesso ragionamento dei giorni
const mese = mesi[data.getMonth()];
// Viene preso l'anno
const anno = data.getFullYear();
// Nel momento in cui tutto il documento viene caricato viene scritta la data nella div con tag date
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#date').innerHTML = giorno + ', ' + giornoN.toString() + ' ' + mese + ' ' + anno.toString();
});