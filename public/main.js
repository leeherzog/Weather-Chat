import {Ajax} from './ajax.js'
import {Render} from './render.js'
import {newData} from './newData.js'


var dataArray = [];

  $(".add-city").on("click", function(){
      var city = $("#city-name").val();
      let newData = new Ajax(city);
      newData.fetch(city);
  })

  $(".city-details").on("click", ".add-comment", function (){
    var $cityComment = $(this).closest(".comments");
    var comment = $cityComment.find("#city-comments").val();
    var cityName = $cityComment.find("#city-comments").data().name;
    let newComment = new newData(cityName, comment);
    newComment.createComments(cityName, comment);
    let renderComment = new Render (cityName, dataArray);
    renderComment.renderComments(cityName, dataArray, this);
  })


  export {dataArray}