var heart1 = document.getElementById("heart1")
var heart2 = document.getElementById("heart2")
var heart3 = document.getElementById("heart3")
var over = document.getElementById("over")
var jumpsong = document.getElementById("jumpsong");
var oof = document.getElementById("oof");
var backmusic = document.getElementById("backmusic");
var character = document.getElementById("character");
var block = document.getElementById("block")

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate")
        jumpsong.play();
        backmusic.play();
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}




const scoreText = document.querySelector('#score');
let score = 0
let health = 0
const HEALTH_POINTS = 1
const SCORE_POINTS = 1
var game = document.getElementById("game")

startGame = () => {
    score = 0
    health = 0
}

var checkDead = setInterval (function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<150 && blockLeft>0 && characterTop>=210){
        incrementScore(SCORE_POINTS)
    }
    if(blockLeft<10 && blockLeft>0 && characterTop>=210){
        incrementHealth(HEALTH_POINTS)

    }

    incrementScore = num => {
        score +=num
        scoreText.innerText = score
        
    }

    incrementHealth = num => {
        health +=num
    }


    if(score > 300){
        game.style.backgroundImage = "url('imageshtml1/night\ back1.png')";
    }

    if(score > 700){
        game.style.backgroundImage = "url('imageshtml1/day\ back1.jpg')";
    }

    if(score > 1000){
        game.style.backgroundImage = "url('imageshtml1/night\ back1.png')";
    }

    if(score > 1500){
        game.style.backgroundImage = "url('imageshtml1/day\ back1.jpg')";
    }

    if(score > 2000){
        game.style.backgroundImage = "url('imageshtml1/night\ back1.png')";
    }

    if(health > 2){
        heart1.remove();
    }

    if(health > 5){
        heart2.remove();
    }

    if(health > 8){
        heart3.remove();
        over.classList.toggle("text-on");
        block.style.animation = "none";
        block.style.display = "none";
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }


},10);

let img = document.querySelector('#character');
let btn1 = document.querySelector('#btnsteve');
let btn2 = document.querySelector('#btnalex');

btn1.addEventListener('click', () => {
    img.src = 'imageshtml1/steve minecraft1.png'
})

btn2.addEventListener('click', () => {
    img.src = 'imageshtml1/Alex minecraft1.png'
})



startGame()



