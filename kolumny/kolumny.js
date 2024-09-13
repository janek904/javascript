document.querySelector('header').style.backgroundColor = 'Yellow';

const myheader = document.querySelector('header h1');
console.log(myheader);
myheader.style.fontFamily = 'Arial';
myheader.textContent = 'Preambuła';
 let myset = document.querySelectorAll('section');
 console.log(myset);
 myset[0].style.border = '2px solid brown';
 myset[1].style.border = '2px solid brown';
 myset[2].style.border = '2px solid brown';
 document.querySelector('.main_column h1').textContent = 'Specjalność szefa:';

const kol = document.querySelector('.main_column');
const para = document.createElement('p');
para.textContent = 'Kebab na frytkach _-_';
kol.appendChild(para);
const footer = document.querySelector('footer');
const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.padding ='10px';
div.style.textAlign ='center';
const xyz = document.createElement('p');
xyz.innerHTML = '&copy';
footer.appendChild(div);
div.appendChild(xyz);

const kolumna = document.querySelector('#eee h1');
kolumna.remove();
const head = document.querySelector('header');
const pgf= document.createElement('p');
const pgff = document.createElement('p');
pgf.innerHTML = '<i> Pochylony tekst </i>';
pgff.innerText = '<i> Pochylony tekst </i>';
head.appendChild(pgf);
head.appendChild(pgff);
const bod = document.querySelector('body');
const sec = document.createElement('section');
sec.style.border = '2px dotted blue';
sec.style.padding = ' 10px 20px'; 
sec.textContent = 'zderzak';
bod.appendChild(sec);




