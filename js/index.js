
function rollTheDice(){
    let dice = [ ];
    for (i=0; i<6; i++){
        dice.push(getRandomArbitrary(1,6))
    }
    console.log(dice)
    const delement = document.getElementById("dice");
    delement.innerHTML = ' '
    for (const die of dice){
        delement.innerHTML += `<img class="img1" src="./img/dice${die}.png"></img>`
    }
    scoreRound(dice)
}
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function scoreRound(dice) {
    let points = {};
    let score = 0;
    let full_house = [1,2,3,4,5,6];

    for (i=0; i<dice.length; i++){
        points[i]=dice.filter(x=>x===i).length

    }
    console.log(points)
if (JSON.stringify(dice)===JSON.stringify(full_house)){
    score = 10000
    return score
}
console.log(score)
for (const [key, value] of Object.entries(points)){
    if (key === '1'){
        if (value >= 3){
            score += 1000
        }
        else{
            score += 100 * value
        }
    console.log(score)
    }
    
    else if(key === '5'){
        if (value >= 3){
            score += 500
        }
        else{
            score += 50 * value
        }
    console.log(score)
    }
    else if(value >= 3){
        score += parseInt(key) * 100
    }
}
document.getElementById('score').innerHTML = `Score: ${score}`
console.log(score)
}
