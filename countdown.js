const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
// ---------------------------------------------------
let dateInput = document.querySelector('input[type="date"]');
// ---------------------------------------------------
let currentDate = '';
let setDate = '';
document.getElementById('btn').onclick = function click() {
	currentDate = dateInput.value;
	console.log(currentDate); // return a string value YYY-MM-DD

	// We need a function to take the set date and return the string in the set format String(Number(DAY) String(MONTH) Number(Year))
	let dateArray = currentDate.replace(/-/g, ' ').split(' '); // return array of the date [YY, MM, DD]
	console.log(dateArray);

	for (let i = 0; i < dateArray.length; i++) {
		if (i == 0) {
			setDate += dateArray[i];
		} else if (i == 1) {
			if (dateArray[1] === '01') {
				setDate += ` January`;
			} else if (dateArray[1] === '02') {
				setDate += ` February`;
			} else if (dateArray[1] === '03') {
				setDate += ` March`;
			} else if (dateArray[1] === '04') {
				setDate += ` April`;
			} else if (dateArray[1] === '05') {
				setDate += ` May`;
			} else if (dateArray[1] === '06') {
				setDate += ` June`;
			} else if (dateArray[1] === '07') {
				setDate += ` July`;
			} else if (dateArray[1] === '08') {
				setDate += ` August`;
			} else if (dateArray[1] === '09') {
				setDate += ` September`;
			} else if (dateArray[1] === '10') {
				setDate += ` October`;
			} else if (dateArray[1] === '11') {
				setDate += ` November`;
			} else if (dateArray[1] === '12') {
				setDate += ` December`;
			}
		} else if (i == 2) {
			setDate += dateArray[i];
		}
	}
};

// Count-down timer

function countdown() {
	const eventDateDay = new Date(setDate);
	const currntDate = new Date();

	const totalSeconds = (eventDateDay - currntDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	if (setDate == '') {
		daysEl.innerHTML = 0;
		hoursEl.innerHTML = 0;
		minsEl.innerHTML = 0;
		secondsEl.innerHTML = 0;
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

countdown();

setInterval(countdown, 1000);
