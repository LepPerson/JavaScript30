// https://codepen.io/LepPerson/pen/WzRooL?editors=0011

console.clear();

const people = [
	{ name: "Wes", year: 1988 },
	{ name: "Kait", year: 1986 },
	{ name: "Irv", year: 1970 },
	{ name: "Lux", year: 2015 }
];

const comments = [
	{ text: "Love this!", id: 523423 },
	{ text: "Super good", id: 823423 },
	{ text: "You are the best", id: 2039842 },
	{ text: "Ramen is my fav food ever", id: 123523 },
	{ text: "Nice Nice Nice!", id: 542328 }
];

/*
Q1: is at least one person 19 or older?

Array.prototype.some();
*/
const isAdult = people.some(
	person => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult + ", at least one person 19 or older");

/*
Q2: is everyone 19 or older?

Array.prototype.every();
*/
const allAdult = people.every(
	person => new Date().getFullYear() - person.year >= 19
);
console.log(allAdult + ", everyone 19 or older");

/*
Q3: find the comment with the ID of 823423;

Array.prototype.find(): 返回"第一個"符合謂語（predicate, 回傳 true 或 false 的函式）的元素的"值"，否則返回 undefined;
	與 filter() 不同之處在於，filter 是返回符合謂語的"陣列"（所以可以不只一個）;
	詳細：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/
const findComment = comments.find(comment => comment.id == 823423);
console.log(findComment);

/*
Q4: delete the comment with the ID of 823423;

Array.prototype.findIndex(): 返回"第一個"符合謂語的元素的"索引"，否則返回 -1;
	詳細：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/

const findCommentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(findCommentIndex);

/*
可用 Array.prototype.splice() 刪除;
也可用 Array.prototype.slice() 與 spread 語法把要被刪除元素之外的元素重新拼接成新陣列;

Spread: ...，陣列擴展語法;
	可將一個陣列轉成用逗號分隔的參數序列;
	詳細：
	https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator
	http://es6.ruanyifeng.com/#docs/array
*/

// comments.splice(findCommentIndex, 1);
// console.log(comments);
const newComments = [
	// 若不使用 spread，newComments 會變成 變成 [Array[], Array[]];
	...comments.slice(0, findCommentIndex),
	...comments.slice(findCommentIndex + 1)
];
console.log(newComments);
