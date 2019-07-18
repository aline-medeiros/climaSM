function requestWeather (city_name) {
    $.getJSON ({
        url: "https://api.hgbrasil.com/weather",
        data:{
            key:'aff79565',
            format:'json-cors',
            city_name: city_name
        },
        success: function (result ) {

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
    })
}
requestWeather("São Miguel dos Campos");