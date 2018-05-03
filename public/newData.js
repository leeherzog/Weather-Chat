import {dataArray} from './main.js'

class newData {
    constructor (cityName, comment) {
        this.cityName = cityName;
        this.comment = comment;
    }
    createComments(cityName, comment) {
        var input = {text: comment};
        for (let i = 0; i < dataArray.length; i++){
          if (cityName === dataArray[i].city){
              var index = i;
          }
      }
        dataArray[index].comments.push(input);
    };
}

export {newData}