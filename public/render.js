import {dataLayer} from './newData.js'
import {weatherApi} from './ajax.js'

class Render {
    constructor (){  
    }
    renderPost (dataArray) {
        $(".city-details").empty();
        var obj = {dataArray}
        var source = $("#weather-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(obj);
        $(".city-details").append(newHTML);
    }

    renderComments(cityName, dataArray, $currentBtn){
        for (let i = 0; i < dataLayer.dataArray.length; i++){
            if (cityName === dataArray[i].city){
                var index = i;
            }
        }
        $currentBtn.closest('.comments').find('ul').empty();
         for (let j = 0; j < dataLayer.dataArray[index].comments.length; j++){
             $currentBtn.closest('.comments').find('ul').append("<li>" + dataLayer.dataArray[index].comments[j].text + "</li><br>");
         }
      };
}
const render = new Render();
export {render}