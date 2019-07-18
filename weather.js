function requestWeather (city_name) {

   
    var input_value = $('#input_city').val();
    if(input_value != "") {
        city_name = input_value
    }

   $.getJSON ({
       url: "https://api.hgbrasil.com/weather",
       data:{
           key:'a788b23a',
           format:'json-cors',
           city_name: city_name
       },
       success: function (result) {

                
        if(result.by === "default"){
        alert("Cidade não reconhecida");
        return false;
        }

        else{


           data = result.results;
           city_name = data.city_name;

           $ ("#city").html ("Clima em " + city_name);
           $ ("#temp").html ("Temperatura atual: " + data.temp + "°C" );
           $ ("#status").html ("Descrição: " + data.description);
           $ ("#wind").html ("Velocidade do vento: " + data.wind_speedy);
           $ ("#sunrise").html("Nascer do sol: " + data.sunrise);
           $ ("#sunset").html("Por do sol:" + data.sunset);
           var url_img = "https://assets.hgbrasil.com/weather/images/" + data.img_id + ".png";
           $ ("#weather-img").attr("src",url_img);
        }
       }
   });
}

$ ( document ).ready(function() {
   $ ('#input_city').on('keypress',function(e) {
       if(e.which == 13){
            requestWeather();
       }
   });
   $ ('#button').on('click',function(e) {
         requestWeather(); 
    });
    requestWeather("São Miguel dos Campos");
});