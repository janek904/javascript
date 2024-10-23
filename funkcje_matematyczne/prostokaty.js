const przycisk = document.querySelector('button');
    const width= document.getElementById("#width");
    const height= document.getElementById("#height");
    const color= document.getElementById("#color");
    
    const div = document.querySelector('div');
    const p = document.querySelector('#info');
    const pp = document.querySelector('#info2')
    przycisk.addEventListener('click', function(){
let szerokosc= width.value;
let wysokosc= height.value;
let kolor= color.value;

let wysokoscc= parseFloat(szerokosc);
let szerokoscc= parseFloat(wysokosc);

div.style.width = szerokoscc + "cm";
div.style.height = wysokoscc + "cm";
div.style.backgroundColor = kolor;
p.innerHTML = "Obwód prostokąta jest równy" + (wysokoscc*2+szerokoscc*2)+" cm";
pp.innerHTML = "Pole prostokąta jest równe" + wysokoscc*szerokoscc+"cm<sup>2</sup"; 
})
    






