class weatherInfo {
  constructor (data, comments) {
    this.data = data;
    this.comments = comments;
  }
}

class Data {
  constructor (city) {
    this.city = city;
  }
    fetch(city) {
      $.ajax({
        method: "GET",
        url:"http://api.apixu.com/v1/current.json?key=9f42a96480b84863a76122532180205&q="+city,
      })
      .then (function success (data) {
          console.log(data);
          var source = $("#weather-template").html();
          var template = Handlebars.compile(source);
          var newHTML = template(data);
          $(".city-details").append(newHTML);
        })
      .catch (function error (jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        });
    }; 
    weatherData(data) {
      new weatherInfo(data);
    }
    }
 
class Comments {
  constructor(comments){
    this.comments = [];
  }
 createComments(comment) {
    var input = {text: comment};
    comments.push(input);
};
renderComments(){
  $("ul").empty();
   for (let i = 0; i < comments.length; i++){
     $("ul").append("<li>" + comments[i].text + "</li><br>");
   }
};
  weatherComments(comments);
   new weatherInfo(comments);
}
  

 export {Data}