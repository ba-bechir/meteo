
function recevoirTemperature(ville)
{
    
let requete = new XMLHttpRequest();

document.querySelector('#ville').textContent = ville;        
 
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=ef1ae87e1e47ead3970d4fae89f60092&units=metric';

requete.open('POST', url); 
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
requete.responseType = 'json';

requete.send('ville='+ville);

requete.onload = function () {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200){
            let response = requete.response;
            let temperature = response.main.temp_max;
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
         }
        else {
            alert("Erreur");
         }
        }
    }
}

recevoirTemperature(ville = "Paris");

let boutonChangerDeVille = document.querySelector('#changer');

boutonChangerDeVille.addEventListener('click', () => {
    let ville = prompt("Taper le nom d'une ville");
    recevoirTemperature(ville);
})