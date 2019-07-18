//Dice roll

//Global Variables
let card;

//Event listerners
document.getElementById('play-btn').addEventListener('click', roll);
document.getElementById('purchase-btn').addEventListener('click', rich);
//Event functions
function roll() {
    //Hosue roll

    let house = Math.floor(6*Math.random())+1;

    if (house == '1') {
        document.getElementById('house-die').src = 'images/1.png';
    } else if (house == '2') {
        document.getElementById('house-die').src = 'images/2.png';
    } else if (house == '3') {
        document.getElementById('house-die').src = 'images/3.png';
    } else if (house == '4') {
        document.getElementById('house-die').src = 'images/4.png';
    } else if (house == '5') {
        document.getElementById('house-die').src = 'images/5.png';
    } else if (house == '6') {
        document.getElementById('house-die').src = 'images/6.png';
    }

    let player = Math.floor(6*Math.random())+1;

    if (player == '1') {
        document.getElementById('player-die').src = 'images/1.png';
    } else if (player == '2') {
        document.getElementById('player-die').src = 'images/2.png';
    } else if (player == '3') {
        document.getElementById('player-die').src = 'images/3.png';
    } else if (player == '4') {
        document.getElementById('player-die').src = 'images/4.png';
    } else if (player == '5') {
        document.getElementById('player-die').src = 'images/5.png';
    } else if (player == '6') {
        document.getElementById('player-die').src = 'images/6.png';
    }

    let earn = document.getElementById('bet-input').value;
    //Process
    if (player > house) {
        let result = earn - -5000;
        document.getElementById('funds').innerHTML = result;
    } else if (house > player) {
        let result = 5000 - earn;
        document.getElementById('funds').innerHTML = result;
    } else  {
        let result = 5000 + 0;
        document.getElementById('funds').innerHTML = result;
    }      
}

function rich() {
    let money = document.getElementById('funds').value;
    let random = Math.floor(12*Math.random())+1;
    if (money < 1000) {
        document.getElementById('loot').src = 'images/socks.png';
    } else if (money > 1000 && money < 5000) {
        if (random <= 4) {
            document.getElementById('loot').src = 'images/ring.png';
        } else if (random <= 8) {
            document.getElementById('loot').src = 'images/trip.png';
        } else {
            document.getElementById('loot').src = 'images/bike.png';  
        }

    } else {
        if (random <= 3) {
            document.getElementById('loot').src = 'motocycle/ring.png';
        } else if (random <= 6) {
            document.getElementById('loot').src = 'house/trip.png';
        } else if (random <= 9) {
            document.getElementById('loot').src = 'boat/bike.png';
        } else {
            document.getElementById('loot').src = 'car.png';
        }
    }
}
