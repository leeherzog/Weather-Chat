import {Data} from './weatherInfo.js';

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


  $(".add-city").on("click", function(){
      var city = $("#city-name").val();
      new Data(city);
  })

  $(".city-details").on("click", ".add-comment", function (){
    var $cityComment = $(this).closest(".comments");
    var comment = $cityComment.find("#city-comments").val();
    //var cityName = $($cityComment).data().name;
     createComments(comment);
     renderComments();
  })