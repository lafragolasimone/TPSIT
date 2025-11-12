let persone = [];

// Carica JSON automaticamente all'apertura
window.addEventListener("DOMContentLoaded", function() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Persone.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            persone = JSON.parse(this.responseText);
            mostraTabella(persone);
        }
    };
});

// Mostra tabella principale
function mostraTabella(lista) {
    let html = `<table class="tabellaAnagrafica"><tr>
        <th>Nome</th><th>Cognome</th><th>Età</th><th>Nazionalità</th>
        <th>Scuola</th><th>Data di nascita</th><th>Generazione</th>
    </tr>`;
    for (let i = 0; i < lista.length; i++) {
        const p = lista[i];
        const generazione = calcolaGenerazione(p.data_nascita);
        html += `<tr>
            <td>${p.nome}</td>
            <td>${p.cognome}</td>
            <td>${p.eta}</td>
            <td>${p.nazionalita}</td>
            <td>${p.scuola}</td>
            <td>${p.data_nascita}</td>
            <td>${generazione}</td>
        </tr>`;
    }
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
}

// Calcola generazione
function calcolaGenerazione(data) {
    if (!data) return "Sconosciuta";
    const anno = parseInt(data.split("-")[0]);

    if (anno >= 2025) return "Generazione Beta";
    if (anno >= 2012 && anno < 2025) return "Generazione Alpha";
    if (anno >= 1997 && anno < 2012) return "Generazione Z";
    if (anno >= 1981 && anno < 1996) return "Millennials (Gen Y)";
    if (anno >= 1965 && anno < 1980) return "Generazione X";
    if (anno >= 1946 && anno < 1964) return "Baby Boomers";
    if (anno >= 1928 && anno < 1945) return "Generazione Silenziosa";
    if (anno >= 1901 && anno < 1927) return "Greatest Generation";

    return "Sconosciuta";
}
