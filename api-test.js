const claveApi = f09f370f20534f76ad963828262104;
const idioma = es;
const ciudad = Huancayo;

const apiClimaActual = https://api.weatherapi.com/v1/current.json?key=${claveApi}&q=${ciudad}&lang=${idioma};


const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data.location.localtime);
