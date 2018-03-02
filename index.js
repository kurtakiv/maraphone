var data = {
    sex: null,
    action: null,
    height: null,
    weight: null
};

function tryToCall() {
    var url ="https://c5541kbw26.execute-api.us-east-2.amazonaws.com/prod/";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.response);
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({form: "232"}));
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
    if (value === 4 ) return;
    $("#input" + (value + 1)).focus();
}