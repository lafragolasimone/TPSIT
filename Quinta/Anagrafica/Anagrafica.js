document.getElementById("fileInput").addEventListener("change", function() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);

      let html = `
        <table class="tabellaAnagrafica">
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Età</th>
            <th>Nazionalità</th>
            <th>Scuola di appartenenza</th>
          </tr>
      `;

      data.forEach(p => {
        html += `
          <tr>
            <td>${p.nome}</td>
            <td>${p.cognome}</td>
            <td>${p.eta}</td>
            <td>${p.nazionalita}</td>
            <td>${p.scuola}</td>
          </tr>
        `;
      });

      html += "</table>";
      document.getElementById("demo").innerHTML = html;

    } catch (err) {
      document.getElementById("demo").innerHTML =
        "<p style='color:#ff8080'>Errore: il file non è un JSON valido.</p>";
      console.error(err);
    }
  };

  reader.readAsText(file);
});
