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
            dataArray.push({city: data.location.name, temp: data.current.temp_c, comments: []});
          })
        .catch (function error (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
          });
        }
      }

export {Data}