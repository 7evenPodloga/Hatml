var Snieg = document.getElementById('snieg');
var snieg1 = document.getElementById('smieci');
var czySnieg = true

Snieg.onclick = function() {
    if (czySnieg) {
        snieg1.style.background = "transparent"; 
        Snieg.innerText = "włącz snieg";
        czySnieg = false; 
    } else {
        snieg1.style.background = 'url("sniezek.gif")';
        Snieg.innerText = "wyłącz snieg";
        czySnieg = true;
    }
}