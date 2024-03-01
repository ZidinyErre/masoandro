// window.addEventListener("load", function () {
//     console.log(" bien ouej !!");
// })
// import apiKey from './other.js'
// // const apiKey = process.env.KEY_API;
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=montpellier&appid=${apiKey}&units=metric`;


// fetch(apiUrl)
// .then(response =>{
//     if (!response.ok) {
//         throw new Error('Erreur de réseau lors de la requête!');
//     }

//     return response.json()
// })
// .then(data =>{
//     console.log( "données météo : ", data);
// })
// .catch(error =>{console.error('Erreur lors de la récupérations des données!',error);})

// const meteo = document.querySelector("#meteo");
// meteo.innerHTML = data.timezone;


import apiKey from './other.js'
// const apiKey = process.env.KEY_API;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=montpellier&appid=${apiKey}&units=metric`;

async function fetchData(){
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Erreur de réseau lors de la requête!');
        }
    
        const data = await response.json();
        console.log(data);
        manipulateData(data)
        return data;

    } catch (error) {
        console.error('Erreur lors de la récupérations des données!',error);
        throw error;
    }
}

fetchData();

function manipulateData(data){
    const meteo = document.querySelector("#meteo");
    meteo.innerHTML = data.name;
}

