let weatherForm = document.querySelector("#weatherform");
let cityInput = document.querySelector("#cityInput");
let setTemp = document.querySelector("#temp");
let setWind = document.querySelector("#wind");
let setDescription = document.querySelector("#description");
let img = document.querySelector("#dogPic");
let dogButton = document.querySelector("#dogButton");


dogButton.addEventListener("click", function(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            //console.log(response.json());
            return(response.json());
        })
        .then(function(data){
            console.log(data);
            console.log(data.message); //
            console.log(data.status);
    
            console.log(3);
            img.src = data.message;
    
    
        })
    
        console.log(4);
})

weatherForm.addEventListener("submit",(event) =>
{
    event.preventDefault();
    let targetCity = "https://goweather.herokuapp.com/weather/"+ cityInput.value;
    fetch(encodeURI(targetCity))
    .then(function(response){
        //console.log(response.json());
        return(response.json());

    })
    .then(function(data){

        console.log(data);
        console.log(data.temperature); //
        console.log(data.wind);
        console.log(data.description);


        setTemp.innerHTML = data.temperature;
        setWind.innerHTML = data.wind;
        setDescription.innerHTML = data.description;
        setTemp.innerText = data.temperature;
        setWind.innerText = data.wind;
        setDescription.innerText = data.description;

    })
})
