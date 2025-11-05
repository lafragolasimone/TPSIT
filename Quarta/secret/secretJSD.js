let datiCifrati = localStorage.getItem("DatiCifrati");
const tabella = document.getElementById('tabellaTesto').querySelector('tbody');
let rigaNuova = tabella.insertRow();
let cellaCodificata = rigaNuova.insertCell(0);
cellaCodificata.textContent = datiCifrati;

function decodifica(){
    let datiDecifrati = "";
    let codice = document.getElementById("inputChiave").value;
    codice = parseInt(codice);
    for (let indice = 0; indice < datiCifrati.length; indice++){
        let simbolo = datiCifrati.charAt(indice);
        datiDecifrati += String.fromCharCode(simbolo.charCodeAt(0) - codice);
    }
    let rigaNuova1 = tabella.insertRow();
    let cellaDecodificata1 = rigaNuova1.insertCell(0);
    cellaDecodificata1.textContent = datiDecifrati;
}