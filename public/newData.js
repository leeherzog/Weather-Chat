import {weatherApi} from './ajax.js'
import {render} from './render.js'

class DataLayer {
    constructor () { 
        this.dataArray = [];
    }

    createWeather(dataObj){
        this.dataArray.push(dataObj);
    }

    createComments(cityName, comment) {
        var input = {text: comment};
        for (let i = 0; i < this.dataArray.length; i++){
          if (cityName === this.dataArray[i].city){
              var index = i;
          }
      }
        this.dataArray[index].comments.push(input);
    }


}
const dataLayer = new DataLayer();
export {dataLayer}