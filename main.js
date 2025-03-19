const form = document.getElementById('formulario');
const table = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let nome = document.getElementById('nome-contato').value.trim();
    let numero = document.getElementById('telefone-contato').value.trim();

    let clearNumber = numero.replace(/\D/g, "");

    if (clearNumber.length < 10 || clearNumber.length >= 11) {
        alert("O número deve conter entre 10 e 11 dígitos.");
        return;
    }

    let contatos = document.querySelectorAll('#tabela-contatos tr td:nth-child(2)');
    for (let contato of contatos) {
        if (contato.textContent === clearNumber) {
            alert("Esse número já existe!");
            return;
        }
    }

    let linha = table.insertRow();
    let tableName = linha.insertCell(0);
    let tableNumber = linha.insertCell(1);

    tableName.textContent = nome;
    tableNumber.textContent = numero;

    form.reset();
});