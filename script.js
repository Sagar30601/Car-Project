const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea")
let player = {speed: 5};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
}

function playGame(){
    let car = document.querySelector(".car")
    let road = gameArea.getBoundingClientRect();

    if(player.start){
        if (keys.ArrowUp && player.y > road.top) {
          player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < road.bottom) {
          player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
          player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
          player.x += player.speed;
        }
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        window.requestAnimationFrame(playGame);
    }

}

function start() {
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");     
    player.start = true;
    for(let x=0; x<5; x++){
      let div = document.createElement("div");
      div.classList.add("line");
      div.style.top = (x*150) + "px";
      gameArea.appendChild(div); 
    }
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.innerText = "car";
    car.setAttribute("class","car");
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
    gameArea.appendChild(car);
}


function pressOn(e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}