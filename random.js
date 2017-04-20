var ranNum;
var arrow = document.getElementById("wrapper");

function randomNumber(){
    ranNum = Math.floor((Math.random()*2) +1);

    if (ranNum === 1){
        arrow.className = "left"
    } else {
        arrow.className = "right";
    }
}

arrow.addEventListener("click", randomNumber);

randomnumber();
