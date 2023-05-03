//your JS code here. If required.
// function displayTimer(){
// 	var date=new Date();
// 	var time=date.toLocaleTimeString();
// 	var options={day:'numeric' ,month:'long', year:'numeric'};
// 	var today=date.toLocaleDateString(undefined , options);	
// 	document.getElementById("timer").innerHTML=today + time;
// }
// setInterval(displayTimer, 1000);

const time=new Date();
let daystring = `${time.getMonth() +1}/${time.getDate()}/${time.getFullYear()}`;
let hr=time.getHours();
let timestring="";
if(hr>=12)
{
	hr=hr-12;
	timestring=`, ${hr}:${time.getMinutes()}:${time.getSeconds()} PM`;
}
else{
	timestring=`hr: ${time.getMinutes()}:${time.getSeconds()} AM`;
}
let ptimer=document.getElementById("timer");
ptimer.innerText=daystring+timestring;