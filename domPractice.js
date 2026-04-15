// Night Table Lamp - DOM Selectors and Manipulation
// We will use the document object to access the HTML elements and manipulate them.

const lamp = document.getElementById('lamp');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');

// Add event listener to the ON button
onBtn.addEventListener('click', function(){
    lamp.classList.add('on');
    console.log('Lamp is ON');
});

// Add event listener to the OFF button
offBtn.addEventListener('click', function(){
    lamp.classList.remove('on');
    console.log('Lamp is OFF');
});