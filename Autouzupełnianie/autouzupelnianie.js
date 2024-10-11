const przycisk = document.getElementById('button');
const hidden = document.getElementById('hidden');
const mr = document.createElement('br');
const mr2 = document.createElement('br');
const div = document.querySelector('div');

button.addEventListener('click', function(){
console.log (hidden.dataset);
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

input1.setAttribute('value', hidden.dataset.song1);
input2.setAttribute('value', hidden.dataset.song2);
input3.setAttribute('value', hidden.dataset.song3);


div.innerHTML='';


div.appendChild(input1);
div.appendChild(mr);
div.appendChild(input2);
div.appendChild(mr2);
div.appendChild(input3);













})





