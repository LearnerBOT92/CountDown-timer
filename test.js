// Usinh the file to make test
let dateArray = [0, '02', 0];
const months = {
	1: ` January`,
	2: ` February`,
	3: ` March`,
	4: ` April`,
	5: ` May`,
	6: ` June`,
	7: ` July`,
	8: ` August`,
	9: ` September`,
	10: ` October`,
	11: ` November`,
	12: ` December`,
};

let keys = Object.keys(months);

keys.forEach(function (key) {
	// console.log(key, key == Number(dateArray[1].slice(1)));
	let check = Number(Object.keys(months)) == Number(dateArray[1]);
	console.log(check);
});
