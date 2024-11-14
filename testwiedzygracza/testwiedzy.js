const p1 = document.getElementById('p1');
const sp1 = document.getElementById('sp1');
const str1 = document.getElementById('str1');
const odp1 = document.getElementById('odp1');
odp1.addEventListener('click', function(){
let zad1 = prompt("Podaj odpowiedź");
if (zad1 == "lag")
{
    str1.hidden = false
    odp1.remove()
}
 })

 const p2 = document.getElementById('p2');
const sp2 = document.getElementById('sp2');
const str2 = document.getElementById('str2');
const odp2 = document.getElementById('odp2');
odp2.addEventListener('click', function(){
    let zad2 = prompt("Podaj odpowiedź");
    if (zad2 == "loot")
    {
        str2.hidden = false
        odp2.remove()
    }
     })

 const p3 = document.getElementById('p3');
const sp3 = document.getElementById('sp3');
const str3 = document.getElementById('str3');
const odp3 = document.getElementById('odp3');
odp3.addEventListener('click', function(){
    let zad3 = prompt("Podaj odpowiedź");
    if (zad3 == "noob")
    {
        str3.hidden = false
        odp3.remove()
    }
     })
const p4 = document.getElementById('p4');
const sp4 = document.getElementById('sp4');
const str4 = document.getElementById('str4');
const odp4 = document.getElementById('odp4');
odp4.addEventListener('click', function(){
    let zad4 = prompt("Podaj odpowiedź");
    if (zad4 == "aimbot")
    {
        str4.hidden = false
        odp4.remove()
    }
     })
const p5 = document.getElementById('p5');
const sp5 = document.getElementById('sp5');
const str5 = document.getElementById('str5');
const odp5 = document.getElementById('odp5');
odp5.addEventListener('click', function(){
    let zad5 = prompt("Podaj odpowiedź");
    if (zad5 == "fanboy")
    {
        str5.hidden = false
        odp5.remove()
    }
     })
const p6 = document.getElementById('p6');
 const sp6 = document.getElementById('sp6');
const str6 = document.getElementById('str6');
const odp6 = document.getElementById('odp6');
odp6.addEventListener('click', function(){
 let zad6 = prompt("Podaj odpowiedź");
 if (zad6 == "hitbox")
 {
    str6.hidden = false
    odp6.remove()
 }
 })
 const p7 = document.getElementById('p7');
 const sp7 = document.getElementById('sp7');
const str7 = document.getElementById('str7');
const odp7 = document.getElementById('odp7');
odp7.addEventListener('click', function(){
 let zad7 = prompt("Podaj odpowiedź");
 if (zad7 == "camping")
 {
    str7.hidden = false
    odp7.remove()
 }
 })
 const p8 = document.getElementById('p8');
 const sp8 = document.getElementById('sp8');
const str8 = document.getElementById('str8');
const odp8 = document.getElementById('odp8');
odp8.addEventListener('click', function(){
 let zad8 = prompt("Podaj odpowiedź");
 if (zad8 == "respawn")
 {
    str8.hidden = false
    odp8.remove()
 }
 })

 let gwiazdka1 = 0;
 p1.addEventListener('click', function(){
    gwiazdka1++;
    if(gwiazdka1 == 1){
        p1.innerHTML = "&blk34;";
        sp1.innerText = "* (3)";
    }
    if(gwiazdka1 == 2){
        p1.innerHTML = "&blk12;";
        sp1.innerText = "l** (3)"
    }
    if(gwiazdka1 == 3){
        p1.innerHTML = "&blk14;";
        sp1.innerText = "l*g (3)";
    }
    if(gwiazdka1 == 4){
        p1.remove();
        sp1.innerText = (strong1.hidden=false);
        odp1.remove();
    }
 })
let gwiazdka2 = 0;
 p2.addEventListener('click', function(){
    gwiazdka2++;
    if(gwiazdka2 == 1){
        p2.innerHTML = "&blk34;";
        sp2.innerText = "** (4)";
    }
    if(gwiazdka2 == 2){
        p2.innerHTML = "&blk12;";
        sp2.innerText = "l*** (4)";
    }
    if(gwiazdka2 == 3){
        p2.innerHTML = "&blk14;";
        sp2.innerText = "l**t (4)";
    }
    if(gwiazdka2 == 4){
        p2.remove();
        sp2.innerText = (strong2.hidden=false);
        odp2.remove();
    }
    
 })
let gwiazdka3 = 0;
 p3.addEventListener('click', function(){
    gwiazdka3++;
    if(gwiazdka3 == 1){
        p3.innerHTML = "&blk34;";
        sp3.innerText = "** (4)";
    }
    if(gwiazdka3 == 2){
        p3.innerHTML = "&blk12;";
        sp3.innerText = "n*** (4)";
    }
    if(gwiazdka3 == 3){
        p3.innerHTML = "&blk14;";
        sp3.innerText = "n**b (4)";
    }
    if(gwiazdka3 == 4){
        p3.remove();
        sp3.innerText = (strong3.hidden=false);
        odp3.remove();
    }
 })
let gwiazdka4 = 0;
 p4.addEventListener('click', function(){
    gwiazdka4++;
    if(gwiazdka4 == 1){
        p4.innerHTML = "&blk34;";
        sp4.innerText = "**** (6)";
    }
    if(gwiazdka4 == 2){
        p4.innerHTML = "&blk12;";
        sp4.innerText = "a***** (6)";
    }
    if(gwiazdka4 == 3){
        p4.innerHTML = "&blk14;";
        sp4.innerText = "a****t (3)";
    }
    if(gwiazdka4 == 4){
        p4.remove();
        sp4.innerText = (strong4.hidden=false);
        odp4.remove();
    }
 })
let gwiazdka5 = 0;
 p5.addEventListener('click', function(){
    gwiazdka5++;
    if(gwiazdka5 == 1){
        p5.innerHTML = "&blk34;";
        sp5.innerText = "**** (6)";
    }
    if(gwiazdka5 == 2){
        p5.innerHTML = "&blk12;";
        sp5.innerText = "f***** (6)";
    }
    if(gwiazdka5 == 3){
        p5.innerHTML = "&blk14;";
        sp5.innerText = "f****y (6)";
    }
    if(gwiazdka5 == 4){
        p5.remove();
        sp5.innerText = (strong5.hidden=false);
        odp5.remove();
    }
 })
let gwiazdka6 = 0;
 p6.addEventListener('click', function(){
    gwiazdka6++;
    if(gwiazdka1 == 1){
        p6.innerHTML = "&blk34;";
        sp6.innerText = "**** (6)";
    }
    if(gwiazdka6 == 2){
        p6.innerHTML = "&blk12;";
        sp6.innerText = "h***** (6)";
    }
    if(gwiazdka6 == 3){
        p6.innerHTML = "&blk14;";
        sp6.innerText = "h****x (6)";
    }
    if(gwiazdka6 == 4){
        p6.remove();
        sp6.innerText = (strong6.hidden=false);
        odp6.remove();
    }
 })
let gwiazdka7 = 0;
 p7.addEventListener('click', function(){
    gwiazdka7++;
    if(gwiazdka7 == 1){
        p7.innerHTML = "&blk34;";
        sp7.innerText = "***** (7)";
    }
    if(gwiazdka7 == 2){
        p7.innerHTML = "&blk12;";
        sp7.innerText = "c****** (7)";
    }
    if(gwiazdka7 == 3){
        p7.innerHTML = "&blk14;";
        sp7.innerText = "c*****g (3)";
    }
    if(gwiazdka7 == 4){
        p7.remove();
        sp7.innerText = (strong7.hidden=false);
        odp7.remove();
    }
 })
let gwiazdka8 = 0;
 p8.addEventListener('click', function(){
    gwiazdka8++;
    if(gwiazdka8 == 1){
        p8.innerHTML = "&blk34;";
        sp8.innerText = "***** (7)";
    }
    if(gwiazdka8 == 2){
        p8.innerHTML = "&blk12;";
        sp8.innerText = "r****** (7)";
    }
    if(gwiazdka8 == 3){
        p8.innerHTML = "&blk14;";
        sp8.innerText = "r*****n (7)";
    }
    if(gwiazdka8 == 4){
        p8.remove();
        
    }
 })
 
 
     