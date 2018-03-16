// https://codepen.io/LepPerson/pen/rdLObX?editors=0011

console.clear();

const inventors = [
	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
	"Beck, Glenn",
	"Becker, Carl",
	"Beckett, Samuel",
	"Beddoes, Mick",
	"Beecher, Henry",
	"Beethoven, Ludwig",
	"Begin, Menachem",
	"Belloc, Hilaire",
	"Bellow, Saul",
	"Benchley, Robert",
	"Benenson, Peter",
	"Ben-Gurion, David",
	"Benjamin, Walter",
	"Benn, Tony",
	"Bennington, Chester",
	"Benson, Leana",
	"Bent, Silas",
	"Bentsen, Lloyd",
	"Berger, Ric",
	"Bergman, Ingmar",
	"Berio, Luciano",
	"Berle, Milton",
	"Berlin, Irving",
	"Berne, Eric",
	"Bernhard, Sandra",
	"Berra, Yogi",
	"Berry, Halle",
	"Berry, Wendell",
	"Bethea, Erin",
	"Bevan, Aneurin",
	"Bevel, Ken",
	"Biden, Joseph",
	"Bierce, Ambrose",
	"Biko, Steve",
	"Billings, Josh",
	"Biondo, Frank",
	"Birrell, Augustine",
	"Black, Elk",
	"Blair, Robert",
	"Blair, Tony",
	"Blake, William"
];

/*
1. filter the list of inventors for those who were born in the 1500's;

Array.prototype.filter();

console.table: 按照表格輸出陣列;
*/
const bornIn1500s = inventors.filter(
	inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.table(bornIn1500s);

/*
2. give us an array of the inventors' first and last names;

Array.prototype.map();
*/
const fullNames = inventors.map(
	inventor => `${inventor.first} ${inventor.last}`
);

console.log(fullNames);

/*
3. sort the inventors by birthdate, oldest to youngest;

Array.prototype.sort();
*/
const birthOrder = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(birthOrder);

/*
4. how many years did all the inventors live?

Array.prototype.reduce();
*/
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

/*
5. sort the inventors by years lived;
*/
const yearOrder = inventors.sort((a, b) => {
	const aYear = a.passed - a.year;
	const bYear = b.passed - b.year;
	return aYear > bYear ? -1 : 1;
});

console.table(yearOrder);

/*
6. create a list of Boulevards in Paris that contain 'de' anywhere in the name;
https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
*/
const links = Array.from(document.querySelectorAll(".mw-category a"));

const deText = links
	.map(link => link.textContent)
	.filter(streetName => streetName.includes("de"));

/*
7. Sort Exercise: sort the people alphabetically by last name;
*/
const alphaOrder = people.sort((lastOne, nextOne) => {
	const [aLast, aFirst] = lastOne.split(", ");
	const [bLast, bFirst] = nextOne.split(", ");
	return aLast > bLast ? 1 : -1;
});

console.log(alphaOrder);

/*
8. Reduce Exercise: sum up the instances of each of these;
*/
const data = [
	"car",
	"car",
	"truck",
	"truck",
	"bike",
	"walk",
	"car",
	"van",
	"bike",
	"walk",
	"car",
	"van",
	"car",
	"truck"
];

const itemSum = data.reduce((obj, item) => {
	if (!obj[item]) obj[item] = 0;
	obj[item]++;
	return obj;
}, {});

console.log(itemSum);

// 統計 people 中各英文單字共出現次數;
const strCount = people.reduce((obj, person) => {
	const peoStr = person.match(/[a-zA-Z]/g, "");
	peoStr.forEach(str => {
		if (!obj[str]) obj[str] = 0;
		obj[str]++;
	});
	return obj;
}, {});

console.log(strCount);
