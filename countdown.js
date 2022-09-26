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

// ---------------------------------------------------
let dateInput = document.querySelector('input[type="date"]');
// ---------------------------------------------------

document.getElementById('btn').onclick = function click() {
	let newDate = '';
	currentDate = dateInput.value;
	console.log(currentDate); // return a string value YYY-MM-DD

	// We need a function to take the set date and return the string in the set format String(Number(DAY) String(MONTH) Number(Year))
	let dateArray = currentDate.replace(/-/g, ' ').split(' '); // return array of the date [YY, MM, DD]

	// setDate += ` ${dateArray[0]} ${dateArray[1]} ${dateArray[2]} `;

	// const months = {
	// 	1: ` January`,
	// 	2: ` February`,
	// 	3: ` March`,
	// 	4: ` April`,
	// 	5: ` May`,
	// 	6: ` June`,
	// 	7: ` July`,
	// 	8: ` August`,
	// 	9: ` September`,
	// 	10: ` October`,
	// 	11: ` November`,
	// 	12: ` December`,
	// };

	for (let i = 0; i < dateArray.length; i++) {
		if (i == 0) {
			newDate += ` ${dateArray[i]}`;
		} else if (i == 1) {
			if (dateArray[1] === '01') {
				newDate += ` January`;
			} else if (dateArray[1] === '02') {
				newDate += ` February`;
			} else if (dateArray[1] === '03') {
				newDate += ` March`;
			} else if (dateArray[1] === '04') {
				newDate += ` April`;
			} else if (dateArray[1] === '05') {
				newDate += ` May`;
			} else if (dateArray[1] === '06') {
				newDate += ` June`;
			} else if (dateArray[1] === '07') {
				newDate += ` July`;
			} else if (dateArray[1] === '08') {
				newDate += ` August`;
			} else if (dateArray[1] === '09') {
				newDate += ` September`;
			} else if (dateArray[1] === '10') {
				newDate += ` October`;
			} else if (dateArray[1] === '11') {
				newDate += ` November`;
			} else if (dateArray[1] === '12') {
				newDate += ` December`;
			}
		} else if (i == 2) {
			newDate += ` ${dateArray[i]}`;
		} else {
			break;
		}
	}
	setDate = newDate;
	console.log(dateArray);
	console.log(newDate);
	countdown(newDate);

	setInterval(countdown, 1000);
};
