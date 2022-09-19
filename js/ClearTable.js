function clearTable() {
    $('#table').html(`<tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Текущее время</th>
        <th>Время работы скрипта</th>
        <th>Результат</th>
        </tr>`);
    window.localStorage.removeItem('tableData');
}