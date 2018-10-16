import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e133ad6429b649086da1c6a3503ed04d`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Celsius is ${response.main.temp}.`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }

        
      });
    });
  });