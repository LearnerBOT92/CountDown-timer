const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Count-down timer

const eventDate = '30 June 2023';

function countdown() {
	const eventDateDay = new Date(eventDate);
	const currntDate = new Date();

	const totalSeconds = (eventDateDay - currntDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

// ------------------------------MAP API

// let mapOptions = {
// 	zoom: 14,
// 	center: { lat: 41.410957099004214, lng: 2.2205133423132692 },
// 	mapId: '1d61ca2f6b2e73eb',
// 	disableDefaultUI: true,
// };
// let map = new google.maps.Map(document.getElementById('map'), mapOptions);

// // OnClick Funnction
// let cordinates = {
// 	afterlife: { lat: 41.410957099004214, lng: 2.2205133423132692 },
// 	elrow: { lat: 41.2749, lng: 2.046 },
// 	offweek: { lat: 41.41033541778433, lng: 2.1965136779851657 },
// };

// let elrowEl = document.getElementById('elrow');
// let offweekEl = document.getElementById('offweek');
// let afterlifeEl = document.getElementById('afterlife');

// let elrowMarker = new google.maps.Marker({
// 	position: cordinates.elrow,
// 	animation: google.maps.Animation.BOUNCE,
// });
// let afterlifeMarker = new google.maps.Marker({
// 	position: cordinates.afterlife,
// 	animation: google.maps.Animation.BOUNCE,
// });
// let offweekMarker = new google.maps.Marker({
// 	position: cordinates.offweek,
// 	animation: google.maps.Animation.BOUNCE,
// });
// elrowEl.addEventListener('click', () => {
// 	elrowMarker.setMap(map);
// 	map.setZoom(14);
// 	map.setCenter(elrowMarker.getPosition());
// 	setTimeout(() => {
// 		elrowMarker.setAnimation(null);
// 	}, 1000);
// });

// offweekEl.addEventListener('click', () => {
// 	offweekMarker.setMap(map);
// 	map.setZoom(14);
// 	map.setCenter(offweekMarker.getPosition());
// 	setTimeout(() => {
// 		offweekMarker.setAnimation(null);
// 	}, 1000);
// });
// afterlifeEl.addEventListener('click', () => {
// 	afterlifeMarker.setMap(map);
// 	map.setZoom(14);
// 	map.setCenter(afterlifeMarker.getPosition());
// 	setTimeout(() => {
// 		afterlifeMarker.setAnimation(null);
// 	}, 1000);
// });
// -----------------------------------------------------------------
