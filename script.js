function imt(height, weight) {
    //let weight = Number(prompt('Укажите ваш вес'));
    if(isNaN(height) || height < 100) {
        if (isNaN(height)) {
            alert('Напишите ваш рост просто цифрами');
        }
        if (height < 100) {
            alert('Напишите ваш рост в сантиметрах');
        }
    }
   
   
    if(isNaN(weight)) {
        alert('Напишите ваш вес просто цифрами');
    }

    height /= 100;

    let imt = weight / height ** 2;

    if (imt < 16) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас выраженный дефицит массы тела. Срочно в Макдональдс!!!');
    } else if (16 <= imt && imt < 18.5) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас недостаточная (дефицит) масса тела. Вам надо что-то поесть!');
    } else if (18.5 <= imt && imt < 25) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит ваш вес в норме. Так держать!!!');
    } else if (25 <= imt && imt < 30) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас избыточная масса тела (предожирение). Кому то пора в зал ;)');
    } else if (30 <= imt && imt < 35) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас ожирение. Походу пора тормозить с тортиками');
    } else if (35 <= imt && imt < 40) {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас ожирение резкое. Воувоувоу, палехче с холодосом!');
    } else {
        alert('Индекс массы вашего тела равен ' + imt + '. Это значит у вас очень резкое ожирение. Даже не знаю, что сказать...');
    }

}

