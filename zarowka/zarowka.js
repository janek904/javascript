const light = document.getElementById('light');
const toggleLabel = document.getElementById('toggleLabel');
const powerOn = document.getElementById('powerOn');
const powerOff = document.getElementById('powerOff');
const radioOn = document.getElementById('radioOn');
const radioOff = document.getElementById('radioOff');
const toggleCheck = document.getElementById('toggleCheck');
powerOn.addEventListener('click', function() {
    light.src = 'zarowkawlaczona.jpg';
    if (light.src.includes('zarowkawlaczona.jpg')) {
        toggleCheck.checked = true;
        toggleLabel.textContent = 'Włączone';
        radioOn.checked = true;
        radioOff.checked = false;
    }
});
powerOff.addEventListener('click', function() {
    light.src = 'zarowka1.jpg';
    if (light.src.includes('zarowka1.jpg')) {
        toggleCheck.checked = false;
        toggleLabel.textContent = 'Wyłączone';
        radioOn.checked = false;
        radioOff.checked = true;
    }
});
radioOn.addEventListener('click', function() {
    light.src = 'zarowkawlaczona.jpg';
    if (light.src.includes('zarowkawlaczona.jpg')) {
        toggleCheck.checked = true;
        toggleLabel.textContent = 'Włączone';
    }
});
radioOff.addEventListener('click', function() {
    light.src = 'zarowka1.jpg';
    if (light.src.includes('zarowka1.jpg')) {
        toggleCheck.checked = false;
        toggleLabel.textContent = 'Wyłączone';
    }
});
toggleCheck.addEventListener('change', function() {
    if (toggleCheck.checked) {
        light.src = 'zarowkawlaczona.jpg';
        toggleLabel.textContent = 'Włączone';
        radioOn.checked = true;
        radioOff.checked = false;
    } else {
        light.src = 'zarowka1.jpg';
        toggleLabel.textContent = 'Wyłączone';
        radioOn.checked = false;
        radioOff.checked = true;
    }
});