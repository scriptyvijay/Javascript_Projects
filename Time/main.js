let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let session = "AM";

if (h > 12) {
	h = h - 12;
	session = "PM";
}

if (h == 12) {
	h = 12;
	Selection = "PM";
}

if (m < 9) {
	m = "0" + m;
}

let divTime = document.getElementById("time");
let fullTime = h + " " + ":" + m + " " + ":" + s + session;
divTime.textContent = fullTime;
