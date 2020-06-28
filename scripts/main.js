var mainHeading = document.getElementById('logo');
mainHeading.classList.add('changesSize');

var time = new Date();
var played = '';

function hexClock() {
	var clock = document.getElementById('clock');
	var time = new Date();
	var hours = time.getHours().toString();

	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2){
		hours = '0' + hours;
	}

	if (minutes.length < 2){
		minutes = '0' + minutes;
	}

	if (seconds.length < 2){
		seconds = '0' + seconds;
	}

	var clockStr = hours + ' : ' + minutes + ' . ' + seconds;

	clock.textContent = clockStr;
	
}

function printDate() {
	var months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
	var days = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
	var dates = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];

	// get date
	var month = time.getMonth();
  	var day = time.getDay();
  	var date = time.getDate();

	document.getElementById("datum").innerHTML = days[day] + " " + dates[date] + " " + months[month] + " " + time.getFullYear();
}


function dayNight(){
	var time = new Date().getHours();

	if (time < 20){
		document.getElementById('dagnacht').innerHTML = 'een fijne dag gewenst!';
	}
	else{
		document.getElementById('dagnacht').innerHTML = 'Een fijne avond gewenst!';
	}
	if (time < 20){
		document.images["zon"].src="images/zonnetje.png";
	}
	else{
		document.images["maan"].src="images/maan.png";
	}

}


printDate();

// print time each second
hexClock();
setInterval(hexClock, 1000);

dayNight();
