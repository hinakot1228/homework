// 1
let text1 = document.getElementById('text1');
text1.textContent = 'ABC';

// 2
let text2 = document.getElementById('text2');
text2.style.color = 'red';

// 3
let text3 = document.getElementsByClassName('text3');
for (let i = 0; i < text3.length; i++) {
    text3.item(i).style.backgroundColor = 'skyblue'; 
}

// 4
let aList = document.getElementsByTagName('a');
aList.item(0).href = ('https://www.google.com');

// 5
let li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++) {
    li.item(i).style.fontSize = '35px';
}
