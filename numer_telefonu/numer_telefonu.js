const check = document.getElementById('blr');
const span= document.querySelectorAll('span');

check.addEventListener('change', function(){
    if (this.checked){
span[0].classList.remove("skibidi")
span[1].classList.remove("skibidi")
span[2].classList.remove("skibidi")
}else{
span[0].classList.add("skibidi")
span[1].classList.add("skibidi")
span[2].classList.add("skibidi")
}
})