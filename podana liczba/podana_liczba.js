let Liczba = prompt("Podaj dowolną liczbę rzeczywistą");
let licz= parseFloat(Liczba);
if(isNaN(licz)){
    document.querySelector('h1').textContent = "Błąd: Nie poprawna liczba";
}else{
    
    document.getElementById("podliczb").innerText = "Podana liczba: " + licz;
    document.getElementById("abs").innerText = "abs("+ licz + ") = " + Math.abs(licz);
    document.getElementById("ceil").innerText = "ceil("+ licz + ") = " + Math.ceil(licz);
    document.getElementById("floor").innerText = "floor("+ licz + ") = " + Math.floor(licz);
    document.getElementById("max").innerText = "max("+ licz + ") = " + Math.max(licz);
    document.getElementById("min").innerText = "min("+ licz + ") = " + Math.min(licz);
    document.getElementById("pow").innerText = "pow("+ licz + ", 2) = " + Math.pow(licz, 2);
    document.getElementById("round").innerText = "round("+ licz + ") = " + Math.round(licz);
    document.getElementById("sqrt").innerText = "sqrt("+ licz + ") = " + Math.sqrt(licz);


}
  