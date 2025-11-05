let contenutoTesto = "";
    
function caricaFile(elementoInput) {
    let fileSelezionato = elementoInput.files[0];
    let lettore = new FileReader();
        
    lettore.readAsText(fileSelezionato);
    lettore.onload = function() {
        const tabella = document.getElementById('tabellaTesto').getElementsByTagName('tbody')[0];
        let nuovaRiga = tabella.insertRow();
        let cella = nuovaRiga.insertCell(0);
        cella.textContent = lettore.result;
        contenutoTesto = lettore.result;
    }
}
    
function cifraTesto() {
    let testoCifrato = "";
    let valoreChiave = document.getElementById("inputChiave").value;
    valoreChiave = parseInt(valoreChiave);
    
    for (let indice = 0; indice < contenutoTesto.length; indice++) {
        let carattereCorrente = contenutoTesto.charAt(indice);
        testoCifrato += String.fromCharCode(carattereCorrente.charCodeAt(0) + valoreChiave);
    }
    
    localStorage.setItem("DatiCifrati", testoCifrato);
    window.location.href = "secretD.html";
}
