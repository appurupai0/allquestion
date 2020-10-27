// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6
 var clickMe = document.querySelector('#q6-text');
 clickMe.addEventListener('click',function(){
 	this.style.color = 'blue';
 })

// function changeColor(){
// 	document.querySelector('#q6-text').style.color = 'green';
// }

// Q 7
document.getElementById('q7-text').addEventListener('mouseover',function(){
	console.log('q7');
	this.style.backgroundColor = 'pink';
	this.style.color = 'orange';
})
// Q 8
var q8_text = document.querySelector('#q8-text');
q8_text.addEventListener('mouseover',function(){
	console.log('q8');
	this.style.backgroundColor = 'navy';
	this.style.color = 'yellow';
})
q8_text.addEventListener('mouseleave',function(){
	console.log('q8');
	this.style.backgroundColor = '';
	this.style.color = '';
})

// Q 9
// 自分でやった回答
// function check(){
// 	var input_message = document.querySelector('#q9-input').value;
// 	document.getElementById('q9-result').innerHTML = input_message;
// }

// 模範解答--------------------------------------------------------
// ボタンが押された時のイベントを追加するための変数
let q9_btn = document.querySelector('#q9-btn');
q9_btn.addEventListener('click',function(){
	// 入力された文字を取得するための変数
	var q9_input = document.querySelector('#q9-input');

	// 文字を表示するための変数
	var q9_result = document.querySelector('#q9-result');
	q9_result.textContent = q9_input.value;
})
// ----------------------------------------------------------------


// Q 10
function button(){

	// 60歳以上の場合、「60歳以上のの方は、半額です」と表示してください
	var old = document.querySelector('#q10-input').value;
	if(old >= 60){
		var old60 = '60歳以上の方は半額です。'
		document.getElementById('q10-result').innerHTML = old60;
	}else if(old >= 20){
		document.getElementById('q10-result').innerHTML = old;
	}else{
		var oldNot = '20歳未満の方の利用は禁止です'
		document.getElementById('q10-result').innerHTML = oldNot;
	}
}

//　Q 10の問題や　Q9の問題を模範解答のやり方でもう一回やってみる、自分でやってたのは模範解答とは違うやり方


