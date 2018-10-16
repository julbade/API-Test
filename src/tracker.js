
let response;

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        response = JSON.parse(this.responseText);
    }
}

request.open("GET", url, true);
request.send();
getElements(response);


const getElements = function (response) {
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Celsius ${response.main.temp} degrees.`);
}