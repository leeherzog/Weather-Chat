import {weatherApi} from './ajax.js'
import {render} from './render.js'
import {dataLayer} from './newData.js'



  $(".add-city").on("click", function(){
      var city = $("#city-name").val();
      weatherApi.fetch(city).then((dataObj)=>{
        dataLayer.createWeather(dataObj);
        render.renderPost(dataLayer.dataArray);
      });
  })

  $(".city-details").on("click", ".add-comment", function (){
    var $cityComment = $(this).closest(".comments");
    var comment = $cityComment.find("#city-comments").val();
    var cityName = $cityComment.find("#city-comments").data().name;
    dataLayer.createComments(cityName, comment);
    render.renderPost(dataLayer.dataArray);
    //render.renderComments(cityName, dataLayer.dataArray, $(this));
  })

