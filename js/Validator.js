function validateVariables(x, y, r) {
    // НЕ НУЖНО
    // const openPopUp = document.getElementById('open_pop_up')

    const popUp = document.getElementById('pop_up')
    const closePopUp = document.getElementById('close_pop_up')

    let xIsCorrect = false;
    let yIsCorrect = false;
    let rIsCorrect = false;
    let dataIsValid;
    let validationInfo = '';

    if (x === '' || x === undefined) {
        validationInfo += "<p>X не определен!</p>";
    } else {
        xIsCorrect = true;
    }

    if (!(y.trim() === "")) {
        if (/-?\d[\.е]\d+|-?\d/.test(y)) {
            if ((parseInt(y) > -3) && (parseInt(y) < 3)) {
                yIsCorrect = true;
            } else validationInfo += "<p>Y должен быть в интервале (-3 ... 3)!</p>";
        } else validationInfo += "<p>Y обязан быть числом!</p>";
    } else validationInfo += "<p>Y не был определен!</p>";

    if (r === '' || r === undefined) {
        validationInfo += "<p>R не был определен!</p>";
    } else {
        rIsCorrect = true;
    }

    dataIsValid = xIsCorrect && yIsCorrect && rIsCorrect;

    if (!dataIsValid) {
        $('.pop_up_text').html(validationInfo);
        popUp.classList.add('active');
    }

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active')
    })

    return dataIsValid;

}

function validateTextField() {
    $('.y-text').on('input', function () {
        $(this).val($(this).val().replace(/[^.-\d]/, ''))
    });
}