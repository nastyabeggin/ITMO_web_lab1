function update() {

    let xval = document.getElementById("x-value").value;

    let yvals = document.getElementById("y-values");
    var yval = yvals.options[yvals.selectedIndex].text;

    let rvals = document.getElementById("r-values");
    var rval = rvals.options[rvals.selectedIndex].text;

    checkInput(xval);
    if (checkInput(xval)) {
        $.ajax({
            type: "POST",
            url: '../php/index.php',
            async: false,
            data: { "x": xval, "y": yval, "r": rval },
            success: function (data) {
                updateTable(data);
            },
            error: function (xhr, textStatus, err) {
                alert("readyState: " + xhr.readyState + "\n"+
                "responseText: " + xhr.responseText + "\n"+
                "status: " + xhr.status + "\n"+
                "text status: " + textStatus + "\n" +
                "error: " + err);
            }
        });

        console.log(xval, yval, rval);
    }
}


function updateTable(data) {
    let storage = window.localStorage;
    storage.setItem('tableData', (storage.getItem('tableData') != null ? storage.getItem('tableData') : '') + data);
    $('#table tr:last').after(data);
}