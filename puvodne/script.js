const selectPomucka = document.getElementById("select1");
const selectPocet = document.getElementById("select2");
const table = document.getElementById("evidenceTable");

document.getElementById("addBtn").addEventListener("click", () => {
    updateTable(1);
});

document.getElementById("removeBtn").addEventListener("click", () => {
    updateTable(-1);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    selectPomucka.value = "0";
    selectPocet.value = "0";
});

function updateTable(direction) {
    const value = selectPomucka.value;
    const text = selectPomucka.options[selectPomucka.selectedIndex].text;
    const count = parseInt(selectPocet.value);

    if (value === "0" || count === 0) return;

    let row = document.querySelector(`tr[data-item="${value}"]`);

    if (!row) {
        row = table.insertRow();
        row.dataset.item = value;
        row.insertCell().innerText = text;
        row.insertCell().innerText = 0;
    }

    let current = parseInt(row.cells[1].innerText);
    current += count * direction;

    if (current <= 0) {
        row.remove();
    } else {
        row.cells[1].innerText = current;
    }
}
