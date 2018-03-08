var data = {
    sex: null,
    action: null,
    height: null,
    weight: null,
    wrist: null,
    age: null
};
var url = "https://c5541kbw26.execute-api.us-east-2.amazonaws.com/prod/";
function submit() {
    $("#error-message2").addClass("hide-table");
    if (!validate()) return;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var response = JSON.parse(xhr.response);
            console.log(response);
            if (response.errorMessage === "403" ) {
                $("#calculation-panel").addClass("calculation-panel");
                $("#error-message3").removeClass("hide-label");
                $("#login-form").removeClass("hide-label");
                return;
            }


           var result = response.result;
            $("#vvotd").text(result.vvo + " кКал");
            $("#snbtd").text(result.snb + " г");
            $("#sngtd").text(result.sng + " г");
            $("#snutd").text(result.snu + " г");
            $("#snsutd").text(result.snsu + " г");
            $("#oetd").text(result.oe + " кКал");
            $("#table").removeClass("hide-table");
        }
        if (xhr.status !== 200) {
            $("#error-message2").removeClass("hide-table");
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data.pass = sessionStorage.getItem("pass");
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

function login(pass) {
  var el =  document.getElementById("passwordInput");
   if (pass) el.value = pass;
   var data = {
     pass: el.value,
     authRequest: true
   };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var result = JSON.parse(xhr.response);
            if (!result.errorMessage) {
                $("#calculation-panel").removeClass("calculation-panel");
                $("#error-message3").addClass("hide-label");
                $("#login-form").addClass("hide-label");
                sessionStorage.setItem('pass', el.value);
            } else {
                if (pass !== null) {
                    $("#error-message3").removeClass("hide-label");
                }
            }
        }
        if (xhr.status !== 200) {
            $("#error-message2").removeClass("hide-table");
        }
    };

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(data));
}

window.onload = function (ev) {
    var pass = sessionStorage.getItem("pass");
    login(pass);
};