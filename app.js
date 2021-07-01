//selectors

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputvalue')
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');




button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=3b3908bd755f1a9fe26766b6c04b9603`)
	.then(response => response.json())
	.then(data => {
		var nameValue = data['name'];
		var tempvalue = data['main']['temp'];
		var descValue = data['weather'][0]['description'];

		function clearText(){
			document.getElementById('myInput').innerHTML = "";
		}

		cityName.innerHTML ="City:"+ " " + nameValue;
		desc.innerHTML = " Description:"  + " " + descValue;
		var x = (tempvalue - 273);
		temp.innerHTML ="Temperature:"+ " "  +  x.toFixed(2) +  "°C" ;

	})


.catch(err => alert(' Wrong city match'))

})
