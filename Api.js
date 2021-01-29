

window.onload=function MostrarDados(){
$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=London&appid=8b0245bacfd58548a14ef58b55479d27",
    type:"GET",
    datatype:"json"
    }).done(function(data){
         //callback(data);
         $("#atual").val(data.main.temp);
         $("#maxima").val(data.main.temp_max);
         $("#minima").val(data.main.temp_min);

    }).fail(function(data){
        alert("Erro na Requisicao");

});
}




