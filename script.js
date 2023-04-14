//your JS code here. If required.
function displayTimer(){
	var date=new Date();
	var time=date.toLocaleTimeString();
	var options={day:'numeric' ,month:'long', year:'numeric'};
	var today=date.toLocaleDateString(undefined , options);	
	document.getElementById("timer").innerHTML=today + time;
}
setInterval(displayTimer, 1000);