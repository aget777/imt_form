function imt(height, weight) {
    height = document.getElementById('inp_1').value;
    console.log(height);
    weight = document.getElementById('inp_2').value;
    console.log(weight);
    let message = "Итого";

    if (height < 100 || weight < 30) {
        if (height < 100) {
            alert('Напишите ваш рост в сантиметрах');
        }
        if (weight < 30) {
            alert('Напишите ваш ральный вес');
        }
    } else {

        height /= 100;

        let imt = weight / height ** 2;

        if (imt < 16) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас выраженный дефицит массы тела. Срочно в Макдональдс!!!';
        } else if (16 <= imt && imt < 18.5) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас недостаточная (дефицит) масса тела. Вам надо что-то поесть!';
        } else if (18.5 <= imt && imt < 25) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит ваш вес в норме. Так держать!!!';
        } else if (25 <= imt && imt < 30) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас избыточная масса тела (предожирение). Кому то пора в зал ;)';
        } else if (30 <= imt && imt < 35) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас ожирение. Походу пора тормозить с тортиками';
        } else if (35 <= imt && imt < 40) {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас ожирение резкое. Воувоувоу, палехче с холодосом!';
        } else {
            message = 'Индекс массы вашего тела равен ' + imt.toFixed(2) + '. Это значит у вас очень резкое ожирение. Даже не знаю, что сказать...';
        }
        document.getElementById('result').innerHTML = imt.toFixed(2)
        document.getElementById('resultMessage').innerHTML = message
    }
}

const field1 = document.getElementById('inp_1');
const textFirst = document.getElementById('text_1');

field1.oninput = (event) => {
    textFirst.textContent = event.target.value
}


const field2 = document.getElementById('inp_2');
const textSecond = document.getElementById('text_2');

field2.oninput = (event) => {
    textSecond.textContent = event.target.value
}
