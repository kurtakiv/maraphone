var data = {
    sex: null,
    action: null,
    height: null,
    weight: null,
    wrist: null,
    age: null
};

function submit() {
    if (!validate()) return;
    var url ="https://c5541kbw26.execute-api.us-east-2.amazonaws.com/prod/";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
           var result = JSON.parse(xhr.response).result;
            $("#vvotd").text(result.vvo);
            $("#snbtd").text(result.snb);
            $("#sngtd").text(result.sng);
            $("#snutd").text(result.snu);
            $("#snsutd").text(result.snsu);
            $("#table").removeClass("hide-table");
        }

    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(data));
}

function selectSex(param) {
    data.sex = param.value;
    $("#dropdownSex").text(param.title);
}

function selectAction(param) {
    data.action = param.value;
    $("#dropdownAction").text(param.title);
}

function handleKey(event, value) {
    if (event.which === 13) {
        setFocusToNextInput(value);
    }
}

function setFocusToNextInput(value) {
    if (value === 4 ) {
        $("#input" + value).blur();
        return;
    }
    $("#input" + (value + 1)).focus();
}

function changeData(event, field, value) {
  data[field] = value;
}

function validate() {
    var labelId = "#error-message";
    for (var key in data) {
        if (!data[key]) {
            $(labelId).removeClass("hide-label");
            return false;
        }
    }
    if (!$(labelId).hasClass("hide-label")) {
        $(labelId).addClass("hide-label");
    }
    return true;
}