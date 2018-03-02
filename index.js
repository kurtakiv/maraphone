function tryToCall() {
    var url ="https://c5541kbw26.execute-api.us-east-2.amazonaws.com/prod/";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.result);
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({form: "232"}));
}