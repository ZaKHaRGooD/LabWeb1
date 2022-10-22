function cleanFields() {
    $('').prop('checked', false);
    errase();
}

function cleanTable() {
    let emptyTable = `<tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Текущие время</th>
            <th>Время запуска</th>
            <th>Результат</th>
        </tr>`;
    $('#table').html(emptyTable);
    window.localStorage.removeItem('tableData');
}

function errase() {
    document.getElementById("r-values").value = "";
    document.getElementById("x-values").value = "";
    document.getElementById("-r").innerHTML = "-R";
    document.getElementById("-r2").innerHTML = "-R/2";
    document.getElementById("r").innerHTML = "R";
    document.getElementById("r2").innerHTML = "R/2";
    document.getElementById("-R").innerHTML = "-R";
    document.getElementById("-R2").innerHTML = "-R/2";
    document.getElementById("R").innerHTML = "R";
    document.getElementById("R2").innerHTML = "R/2";

}