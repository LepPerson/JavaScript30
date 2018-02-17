// CodePen: https://codepen.io/LepPerson/pen/QQqxme/

function playSound(evt) {
	// 依據不同的事件來取得對應的 key_code(前"keydown"後"click");
	const KEYCODE = evt.keyCode || this.getAttribute("data-key");
	
	const AUDIO = document.querySelector(`audio[data-key="${KEYCODE}"]`);
	const KEY = document.querySelector(`div[data-key="${KEYCODE}"]`);
	console.log(AUDIO);
	console.log(KEY);
	// 若用戶點擊沒綁定音效的按鍵，便從函式退出;
	if (!AUDIO) return;

	KEY.classList.add("playing");
	// 重置音效，讓音效能連續播放;
	AUDIO.currentTime = 0;

	AUDIO.play();
}
/*
const: 常數，其值指定後不能再被改變;
僅在限定的 {} 內有效(block-scoped);
在"陣列"中用 push 推入值，或在"物件"中用".特性名稱"存取值，都不會發生錯誤，除非是用"陣列字面值"或"物件字面值"的方式存取值;
可用大寫區分常數與變數;

詳細：https://pjchender.blogspot.tw/2017/01/const.html
*/

/* 
Element.classList: 回傳 element 的 class 值(陣列);
後可加 .add(新增), .remove(移除), .toggle(依據 class 是否存在而新增或移除), .contains(偵測是否存在，返回 true/false);

詳細：https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

/*
MediaElement.currentTime: 指定播放秒數;
MediaElement.play: 播放音檔;

詳細：https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
*/

/*
e.key: 偵測使用者按下按鍵的"字母";
e.keyCode: 偵測使用者按下按鍵的"鍵碼";
*/

/*
template literals: 模版字符串;

詳細：https://pjchender.blogspot.tw/2017/01/javascript-es6-template-literalstagged.html
*/

window.addEventListener("keydown", playSound);

function removeTransition(evt) {
	/*
	if (evt.propertyName !== "transform") return;
	
	原本答案有這句，這是因為經歷 transition 的 css 屬性不只一個，為了不讓電腦重複移除 css 類別 playing，因此才加這句判斷：只在 propertyName 是 transform 時，才移除 playing，否則就跳出函式;
	不過，加上這句判斷後，當用戶按著鍵盤不放，playing 會被永久加在 key 上面，而不會被移除;
	bug 原因不明;
	而不加這句判斷，似乎不會有什麼壞處，所以我就不加這句判斷了;
	*/
	evt.target.classList.remove("playing");
	/*
	上句也等於 this.classList.remove("playing");
	this 意指"誰發出了這次事件";
	*/
}
/*
propertyName: 當 transitionend 事件發生，所返回的經歷 transition 的 css 屬性;
*/

const keys = Array.from(document.querySelectorAll(".key"));
/*
Array.from: 將陣列形式或遞迴物件轉為陣列;
querySelectorAll 返回的是 nodeList，而非 Array，因此無法存取 Array.prototype 的方法(比如等下會用到的 forEach);
*/

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
/*
上句也等於
for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener("transitionend", removeTransition);
}
*/

/*
forEach: 為每個 keys 陣列中的元素都添加事件監聽;
*/

/*
transitionend: 事件，在 css 完成 transition 後觸發;
*/

/*
箭頭函式

傳統寫法：
var func1 = function(arg) { console.log("Hi, " + arg); };

箭頭函式寫法：
var func2 = arg => console.log("Hi, " + arg);

如果沒有參數要傳，那要有"空括號"：
var func3 = () => console.log("Hi");

詳細：
https://codepen.io/LepPerson/pen/GQyNgW?editors=1010
https://pjchender.blogspot.tw/2017/01/es6-arrow-function.html
*/

// 將"click"事件綁定至每個 class="key";
keys.forEach(key => key.addEventListener("click", playSound));

/*
查閱鍵盤值與其對應的 ASCII 值：http://keycode.info/
*/
