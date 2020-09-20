window.addEventListener('DOMContentLoaded', (event) => {
    console.log('dziala');
    window.scroll(0,-9999);
    document.getElementById('carousel1').style.display="block";
    }); 

timeLeft = 10;
obraz = 1;
popobraz = 5
nastobraz = 2
maxZdj = 6
but = 0
function countdown(but) {
    // timeLeft--;
    if(but >0){
        nastobraz = but + 1;
    }

    if(nastobraz == maxZdj){
        nastobraz = 1
    }
    if(obraz == maxZdj){
        obraz = 1
    }
    if(popobraz == maxZdj){
        popobraz = 1
    }
    console.log("pętla= " +timeLeft);
    console.log('obraz= '+obraz);
    console.log('popobraz= '+popobraz);
    console.log('nastobraz= '+nastobraz);
    document.getElementById('carousel'+popobraz).style.display="none"
    document.getElementById("carousel"+obraz).style.animation="slide-out-left 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    document.getElementById('carousel'+nastobraz).style.display="block"
    document.getElementById('carousel'+nastobraz).style.animation="slide-in-right 3.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    if (timeLeft > 0) {
        setTimeout(countdown, 5000);
    }
    obraz++
    nastobraz++
    popobraz++
    if(but>0){
        obraz = but;
        popobraz = but - 1;
    }

    but = 0;
};
setTimeout(countdown, 3000);