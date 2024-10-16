const guzik = document.getElementById("guzik");
const ukryj = document.getElementById("ukryj");


guzik.addEventListener('click', function(){
    if(ukryj.style.display === "inline"){
        ukryj.style.display = "none";
        guzik.value = 'Pokaż wynik';
    }else{
        ukryj.style.display = "inline";
        guzik.value='Ukryj wynik';
        }})