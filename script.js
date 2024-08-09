var settingsmenu = document.querySelector(".settings");
var darkBtn = document.getElementById("dark-btn")

function settingstoggle(){
    settingsmenu.classList.toggle("settings-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}


var character = document.getElementById("character");
var block = document.getElementById("block")
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

        block.style.animation = "none";
        block.style.display = "none";
        localStorage.setItem('mostRecentScore', score)
         window.location.assign('end.html')