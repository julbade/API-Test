// var jupiter;

// var api = 'https://api.nasa.gov/planetary/apod?api_key=' ;
// var apiKey = "q8r0Xtu0yBep7SZVA8tEhyy0FX77hWUpzKDkOSGt";


// function setup() {

// }

// function gotData (data) {
//     jupiter = data;
// }


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
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
}