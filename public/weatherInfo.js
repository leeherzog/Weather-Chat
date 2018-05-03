class renderComments {
  constructor (cityName, comments) {
    this.cityName = cityName;
    this.comments = comments;
  }
  createComments(cityName, comment) {
    var input = {text: comment};
    for (let i = 0; i < this.dataArray.length; i++){
      if (cityName === city[i]){
          var index = i;
      }
  }
    dataArray[index].comments.push(input);
};
renderComments(cityName){
  for (let i = 0; i < this.dataArray.length; i++){
      if (cityName === city[i]){
          var index = i;
      }
  }
  $(this).closest("ul").empty();
   for (let j = 0; j < this.array[index].comments.length; j++){
     $("ul").append("<li>" + this.array[index].comments.text[j] + "</li><br>");
   }
};
 weatherComments(comments){
  let weatherCommments = new weatherInfo(comments);
}

import {Data} from './data.js'
import {Comments} from './comments.js'
import {newComment} from './main.js'
 
export {renderComments}
  

 