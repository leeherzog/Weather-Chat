import {dataLayer} from './newData.js'
import {render} from './render.js'

class WeatherApi {
    constructor () {
    }
    fetch(city) {
        return $.ajax({
          method: "GET",
          url:"http://api.apixu.com/v1/current.json?key=9f42a96480b84863a76122532180205&q="+city,
        })
        .then (function success (data) {
            console.log(data);
            return {city: data.location.name, temp: data.current.temp_c, comments: []};
          })
        .catch (function error (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
          });
        }
      }


const weatherApi = new WeatherApi();
export {weatherApi}