$(document).ready(function () {
    const URL="https://api.weatherapi.com/v1/current.json";
    $('.card').hide();

    $('#search').submit(function(e){
        e.preventDefault();

        let key = $('#api_key').val();
        let q = $('#city').val();
        let aqi = $('#aqi').is(':checked');
        getWeatherData(key,q,(aqi?'yes':'no'))
    })

    function getWeatherData(key,q,aqi){
        let url = `${URL}?key=${key}&q=${q}&aqi=${aqi}`
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            cors: true ,
            contentType:'application/json',
            secure: true,
            headers: {
              'Access-Control-Allow-Origin': '*',
            }, success: function (result) {
                $("#name").html(`<b>${result.location.name}</b>`);
                $("#country").html(`Country: <b>${result.location.country}</b>`);
                $("#temp").html(`Temp(C): <b>${result.current.temp_c}</b>`);
                $("#wind_speed").html(`Wind Speed(KPH): <b>${result.current.wind_kph}</b>`);
                $("#pressure").html(`Pressure(pA): <b>${result.current.pressure_in}</b>`);
                $("#description").html(`Below are the location details for ${result.location.name}:`);
                $("#region").html(`Region: <b>${result.location.region}</b>`);
                $("#location").html(`Location: <b>${result.location.lat},${result.location.lon}</b>`);
                $("#time").html(`Time: <b>${result.location.localtime}</b>`);
                $('.card').show();
            }
        });
    }

}); 