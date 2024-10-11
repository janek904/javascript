
const input = document.querySelector('input')
const nacisniety = document.querySelector('button').onclick
const button = document.querySelector('button')
let value = ''
button.addEventListener('click',function(){
input.toggleAttribute('disabled')
if(input.hasAttribute('disabled')){
    button.innerHTML = "Edycja jest teraz niemożliwa"
     value = input.value
    input.value ='Przykładowy tekst'

}else{
    button.innerHTML = "Można edytować"
    input.value = value


}
    






})





