function checkInput(x) {
    let validationInfoPanel = document.querySelector('.validationInfo');
    var validationInfo = '';
    var isXCorrect = false;


    validationInfoPanel.classList.remove("show");

    if (!(x.trim() === "")) {
        if (/-?\d[\.е]\d+|-?\d/.test(x)) {
            if ((parseInt(x) > -5) && (parseInt(x) < 3)) {
                isXCorrect = true;
            } else validationInfo += "<span>X должен быть в интервале (-5..3)!</span>";
        } else validationInfo += "<span>X должен быть числом!</span>";
    } else validationInfo += "<span>Введите X!</span>";


    validationInfoPanel.innerHTML = validationInfo;
    validationInfoPanel.classList.add("show");

    return isXCorrect;
}


function validateTextField() {
    $('.x-text').on('input', function() {
        $(this).val($(this).val().replace(/[^.-\d]/, ''));
    });
}