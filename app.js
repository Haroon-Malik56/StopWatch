var hour = 0
var mint = 0
var sec = 0
var milisec = 0
var displayhour = document.getElementById('hour')
var displaymint = document.getElementById('mint')
var displaysec = document.getElementById('sec')
var displaymilisec = document.getElementById('milisec')
var timerplay;

function timer(){
    milisec++
    displaymilisec.innerHTML = milisec
    if(milisec == 100){
        sec++
        displaysec.innerHTML = sec
        milisec = 0
    }else if(sec == 60){
        mint++
        displaymint.innerHTML = mint
        sec = 0
    }else if(mint == 60){
        hour++
        displayhour.innerHTML = hour
        mint = 0
    }
}

function start(){
    var btn = document.getElementById('start').disabled = true
     timerplay = setInterval(timer, 10)
}

function stop(){
    clearInterval(timerplay)
}

function reset(){
    hour = "00"
    mint = "00"
    sec = "00"
    milisec = "00"
    displayhour.innerHTML = hour
    displaymint.innerHTML = mint
    displaysec.innerHTML = sec
    displaymilisec.innerHTML = milisec
}

