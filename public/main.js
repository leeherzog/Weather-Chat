import {renderComments} from './weatherInfo.js'
import {Comments} from './comments.js'
import {Data} from './data.js'

dataArray = [];

  $(".add-city").on("click", function(){
      var city = $("#city-name").val();
      let newData = new Data(city);
      newData.fetch(city);
  })

  $(".city-details").on("click", ".add-comment", function (){
    var $cityComment = $(this).closest(".comments");
    var comment = $cityComment.find("#city-comments").val();
    var cityName = $cityComment.find("#city-comments").data().name;
    let newComment = new Comments(comment);
    let newWeatherInfo = new renderComment(cityName);
    // newComment.createComments(comment);
    // weatherInfo.fullData(cityName);
    // weatherInfo.renderComments(cityName);
    // let weatherInfo = new weatherInfo(cityName,)
    //  createComments(comment);
    //  renderComments();
  })






  // var commentsArray = [];

// var createComments = function (comment) {
//     var comments = {text: comment};
//     commentsArray.push(comments);
// }

  // var renderComments = function(){
  //    // $(".comments").empty();
  //    $("ul").empty();
  //     for (let i = 0; i < commentsArray.length; i++){
  //       $("ul").append("<li>" + commentsArray[i].text + "</li><br>");
  //     }
  // }