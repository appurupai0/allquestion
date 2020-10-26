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
// Q 7
var q7_text = document.getElementById('q7-text');
q7_text.addEventListener('mouseover',function(){
	this.style.backgroundColor = 'pink',
	this.style.color = 'orange';
})
// Q 8
var q8_text = document.querySelector('#q8-text');
q8_text.addEventListener('mouseover',function(){
	this.style.backgroundColor = 'navy',
	this.style.color = 'yellow';
})
q8_text.addEventListener('mouseleave',function(){
	this.style.backgroundColor = '';
	this.style.color = '';
})

// Q 9
function check(){
	var input_message = document.querySelector('#q9-input').value;
	document.getElementById('q9-result').innerHTML = input_message;
}

// Q 10
function button(){
	var old = document.querySelector('#q10-input').value;
	if(old >= 20){
		document.getElementById('q10-result').innerHTML = old;
	}else{
		var oldNot = '20歳未満の方の利用は禁止です。'
		document.getElementById('q10-result').innerHTML = oldNot;
	}
}
