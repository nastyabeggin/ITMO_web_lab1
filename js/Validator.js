function checkInp() {
    var x = document.forms["simpleForm"]["x-value"].value;
    if (isNaN(x)) {
        alert("Поле X должно содержать только числа!");
        return false;
    } else if ((x <= -5) || (x >= 3)) {
        alert("Введенный X должен быть в диапазоне (-5; 3)!")
    }
}