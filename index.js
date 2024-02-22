// window.addEventListener("load", function () {
//     console.log(" bien ouej !!");
// })
// // const apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=d3c63080f29514c09fe0fbe19103afd7";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=montpellier&appid=d3c63080f29514c09fe0fbe19103afd7&units=metric";
// console.log(apiUrl);


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