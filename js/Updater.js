function update() {
    let xCheckbox = document.getElementsByName("x-value");
    let xvalue;
    for (let i = 0; i < xCheckbox.length; i++) {
        if (xCheckbox[i].checked) {
            xvalue = xCheckbox[i].value;
        }
    }
    let yvalue = $("#y-value").val();
    let rvalue;
    let rCheckboxes = document.getElementsByName('r-value');
    for (let i = 0; i < rCheckboxes.length; i++) {
        // alert(rCheckboxes[i].value)
        // alert(rCheckboxes[i].checked)
        if (rCheckboxes[i].checked) {
            rvalue = rCheckboxes[i].value;

        }
    }

    if (validateVariables(xvalue, yvalue, rvalue)) {
        // alert(xvalue)
        // alert(yvalue)
        // alert(rvalue)
        $.ajax({
            method: "GET",
            url: "../php/index.php",
            async: false,
            data: {"x": xvalue.trim(), "y": yvalue.trim(), "r": rvalue.trim()},
            success: function (data) {
                updateTable(data);
            },
            error: function (data) {
                alert(data);
            }
        });


        console.log(xvalue, yvalue, rvalue);
    }
}
