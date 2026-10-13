const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteToDisplay() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {

        if (display.value.includes('/0')) {
            display.value = 'Nulou nelze dělit!';

        } else {
            display.value = eval(display.value);
        }

        } catch (error) {
            display.value = 'Chyba!';
        }
}