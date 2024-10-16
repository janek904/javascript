const button = document.getElementById("okno");
button.addEventListener('click', function(){
const imie = prompt('Podaj swoje imię:');
if (imie){
    alert('Witaj' + imie);
}else{
    alert('Anulowałeś akcję, a okienko zwróciło:' + imie);
}
});