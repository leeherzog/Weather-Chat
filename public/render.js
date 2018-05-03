import {dataArray} from './main.js'

class Render {
    constructor (cityName, dataArray){
        this.cityName = cityName;
        this.dataArray = dataArray;
    }
    renderPost (dataArray) {
        $(".city-details").empty();
        var obj = {dataArray}
        var source = $("#weather-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(obj);
        $(".city-details").append(newHTML);
    }
    renderComments(cityName, dataArray, current){
        for (let i = 0; i < this.dataArray.length; i++){
            if (cityName === dataArray[i].city){
                var index = i;
            }
        }
        $(current).closest('.comments').find('ul').empty();
         for (let j = 0; j < dataArray[index].comments.length; j++){
             $(current).closest('.comments').find('ul').append("<li>" + dataArray[index].comments[j].text + "</li><br>");
         }
      };
}

export {Render}