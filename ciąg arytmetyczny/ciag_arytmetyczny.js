const jeden = document.getElementById('pierwwyraz');
const dwa = document.getElementById('drugiwyraz');
const sumaciagu = document.getElementById('sumciag');
const przycisk = document.getElementById('przycisk');
const wyraz = document.getElementById('wyraz');
przycisk.addEventListener("click", function(){
    console.log("jeden");
    let jedenwyraz = parseFloat(jeden.value);
    let dwawyraz = parseFloat(dwa.value);
    let r = dwawyraz - jedenwyraz;
    let sumciag = parseFloat(sumaciagu.value);
    let ul = document.createElement('ul');
    //ul.innerHTML="<li>a<sub>1</sub> = "+ jedenwyraz + "</li>" + "<li>a<sub>2</sub> = "+ dwawyraz + "</li>";
    wyraz.innerHTML="";
    wyraz.appendChild(ul);
    if (sumciag >=1){
        ul.innerHTML="<li>a<sub>1</sub> = "+ jedenwyraz + "</li>"
    }
    if (sumciag >=2){
      ul.innerHTML += "<li>a<sub>2</sub> = "+ dwawyraz + "</li>"
    }
    if (sumciag >=3){
        ul.innerHTML += "<li>a<sub>2</sub> = "+ (dwawyraz + r) + "</li>"
      }
      if (sumciag >=4){
        ul.innerHTML += "<li>a<sub>2</sub> = "+ (dwawyraz + r + 1) + "</li>"
      }

})






    





