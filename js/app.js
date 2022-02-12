function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }


}

function generatePin() {
    const pin = getPin()
    console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        } else if (number == '<') {
            calcInput.value = calcInput.value.slice(0, -1);
        }
    } else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    const lifespan = document.getElementById('life').innerText;
    console.log(lifespan);
    if (pin == typedNumbers) {

        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    } else {

        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
        const l = parseInt(lifespan) - 1;
        if (l > 0) {
            document.getElementById('life').innerText = l;
        } else {
            document.getElementById('life').innerText = l;
            document.getElementById('notify-life').style.display = 'block';
            failNotification.style.display = 'none';
            document.getElementById('button-id').disabled = true;
            document.getElementById('button-id').style.backgroundColor = 'red';
        }


    }

}