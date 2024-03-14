var inputvalue = document.querySelector('#Cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = 'a9cf3707624c86a1175af3ba1afc4a94'

function convertion(val)
{
    return (val -273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+ '&appid='+apik)
    .then(res => res.json())

    .then(data =>{
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temparature = data['main']['temp']
        var windspeed = data['wind']['speed']


        city.innerHTML = `Weather of <span> ${nameval}</span>`
        temp.innerHTML = `Temperature: <span>${convertion(temparature)}c   <img src="assets/temp.png" alt=""></span>`
        description.innerHTML = `Sky Condition: <span>${descrip}         <img src="assets/img.webp" alt=""></span>`
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h    <img src="assets/wind.png" alt="">`
    })

    .catch(err => alert('You entered wrong city name'))
})