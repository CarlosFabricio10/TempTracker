const claveApi = f09f370f20534f76ad963828262104;
    const idioma = es;
    const inpCiudad = document.getElementById(input-ciudad);

async function obtenerclima() {

    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert(Por favor, ingresa una ciudad);
        return;
    }
    
    const apiClimaActual = https://api.weatherapi.com/v1/current.json?key=${claveApi}&q=${ciudad}&lang=${idioma};
    
    const response =await fetch(apiClimaActual);
    const data =await response.json();

    mostrarClima(data);
}

function mostrarClima(data) {
    document.querySelector(,clima-icono).src = data.current.condition.icon;
    document.querySelector(clima-texto).innerHTML = data.current.condition.text;
    document.querySelector(,temp).innerHTML = data.current.temp_c + ºC;
    document.querySelector(,ciudad).innerHTML = data.location.name;
    document.querySelector(,humedad).innerHTML = data.current.humidity + %;
    document.querySelector(,viento).innerHTML = data.current.wind_kph + km/h
}
