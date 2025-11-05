function readFile(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
        const data = reader.result.trim();
        const rows = data.split(/\r?\n/);
        const table = document.getElementById("tabellaMigranti");
        table.innerHTML = "";

        rows.forEach((row, rowIndex) => {
            const tr = document.createElement("tr");
            const cells = row.split(",");

            cells.forEach(cell => {
                const cellElement = rowIndex === 0 ? document.createElement("th") : document.createElement("td");
                cellElement.textContent = cell.trim();
                tr.appendChild(cellElement);
            });

            table.appendChild(tr);
        });
    };
}