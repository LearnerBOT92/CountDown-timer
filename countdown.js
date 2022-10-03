const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Count-down timer
let setDate = '';
let currentDate = '';

function countdown() {
	const eventDateDay = new Date(setDate);
	const currntDate = new Date();

	const totalSeconds = (eventDateDay - currntDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	if (setDate == '') {
		daysEl.innerHTML = '00';
		hoursEl.innerHTML = '00';
		minsEl.innerHTML = '00';
		secondsEl.innerHTML = '00';
	} else {
		daysEl.innerHTML = days;
		hoursEl.innerHTML = formatTime(hours);
		minsEl.innerHTML = formatTime(mins);
		secondsEl.innerHTML = formatTime(seconds);
	}
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

// -------------------------------------------Date input
let dateInput = document.querySelector('input[type="date"]');

// --------------------------------------------Button

document.getElementById('btn').onclick = function click() {
	let newDate = '';
	currentDate = dateInput.value;

	let dateArray = currentDate.replace(/-/g, ' ').split(' ');

	alert(typeof dateArray[0]);

	alert(dateArray);

	for (let i = 0; i < dateArray.length; i++) {
		if (i == 0) {
			newDate += ` ${dateArray[i]}`;
		} else if (i == 1) {
			if (dateArray[1] === '01' || dateArray[1] === 1) {
				newDate += ` January`;
			} else if (dateArray[1] === '02' || dateArray[1] === 2) {
				newDate += ` February`;
			} else if (dateArray[1] === '03' || dateArray[1] === 3) {
				newDate += ` March`;
			} else if (dateArray[1] === '04' || dateArray[1] === 4) {
				newDate += ` April`;
			} else if (dateArray[1] === '05' || dateArray[1] === 5) {
				newDate += ` May`;
			} else if (dateArray[1] === '06' || dateArray[1] === 6) {
				newDate += ` June`;
			} else if (dateArray[1] === '07' || dateArray[1] === 7) {
				newDate += ` July`;
			} else if (dateArray[1] === '08' || dateArray[1] === 8) {
				newDate += ` August`;
			} else if (dateArray[1] === '09' || dateArray[1] === 9) {
				newDate += ` September`;
			} else if (dateArray[1] === '10' || dateArray[1] === 10) {
				newDate += ` October`;
			} else if (dateArray[1] === '11' || dateArray[1] === 11) {
				newDate += ` November`;
			} else if (dateArray[1] === '12' || dateArray[1] === 12) {
				newDate += ` December`;
			} else {
				newDate += ` ${dateArray[1]}`;
			}
		} else if (i == 2) {
			newDate += ` ${dateArray[i]}`;
		} else {
			break;
		}
	}
	setDate = newDate;
	countdown(newDate);

	setInterval(countdown, 1000);
};
