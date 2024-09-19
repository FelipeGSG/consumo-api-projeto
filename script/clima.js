async function getWeather(){
    var cidade = document.getElementById("city").value


    // pegar API de tempo
    var response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    // pegar dado especifico
    var tempCelsius = response.data.main.temp
    // levar para o Front End
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(2)}ºC`
}
