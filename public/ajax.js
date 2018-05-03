import {dataArray} from './main.js'
import {Render} from './render.js'

class Ajax {
    constructor () {
    }
    fetch(city) {
        $.ajax({
          method: "GET",
          url:"http://api.apixu.com/v1/current.json?key=9f42a96480b84863a76122532180205&q="+city,
        })
        .then (function success (data) {
            console.log(data);
            dataArray.push({city: data.location.name, temp: data.current.temp_c, comments: []});
            let newPost = new Render(dataArray);
            newPost.renderPost(dataArray);
          })
        .catch (function error (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
          });
        }
      }


const ajax = new Ajax();
export default {ajax}