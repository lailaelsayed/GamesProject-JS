
window.onload = function(){
    setTimeout(removeLoader, 500)
 }
function removeLoader(){
         document.getElementById("loading").style.display = "none";
         document.getElementById('game').classList.remove('d-none');
}
for(var i =0 ; i<document.querySelectorAll('.nav-link').length ; i++){
    document.querySelectorAll('.nav-link')[i].addEventListener('click',function(){
        document.getElementById("loading").style.display = "block";
        document.getElementById('game').classList.add('d-none');
        setTimeout(removeLoader,500);
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        let x = new test(); 
     
    })
}

let y = new test();



import {test} from './ui.js';


document.getElementById('exit').addEventListener('click',function(){
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('details').classList.add('d-none');
    
})





