function startTime() {
	var today = new Date();
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    var dayname = days[today.getDay()];
	var h = today.getHours();
	var m = today.getMinutes();
    var day = today.getDate();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
	m = checkTime(m);
	document.getElementById('clock').innerHTML = h + ":" + m;
	document.getElementById('calendar').innerHTML = day + "/" + month + "/" + year;
	document.getElementById('name').innerHTML = dayname;
	var t = setTimeout(startTime, 3000);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i}; 
	return i;
}
