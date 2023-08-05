window.onload = function(){
    getrandomNumber();
}
function getrandomNumber(){
    var btn = document.getElementById("btn");
    var RandomNum = document.getElementById("randomNumber");
    btn.onclick = function(){
        var rand= Math.floor(Math.random()*10001);
  
        RandomNum.textContent=rand;

    }
}