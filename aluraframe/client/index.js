var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    var tr = document.createElement('tr');
    var tbody = document.querySelector('table tbody');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVol = document.createElement('td');
    tdVol.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVol);
    tbody.appendChild(tr);

    document.getElementById('form').reset();
    campos[0].focus();
});
