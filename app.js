let target_ms = new Date("2024-06-27T00:00:00").getTime();
function timer() {
	let current_ms = new Date().getTime();
	let diff = target_ms - current_ms;
	let seconds = Math.floor(diff / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	let days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	setTimeout(timer, 1000);
}
timer();
