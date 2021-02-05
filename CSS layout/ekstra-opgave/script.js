const d = new Date();
let ctime = d.toLocaleTimeString(["da"], {hour: '2-digit', minute:'2-digit'});

let output = document.querySelector("#output");

const breakStart = ["9.40", "11.30", "13.30"]
const breakEnd = ["10.00", "12.00", "13.40"]

function isBreak (){
    for (let i = 0; i < breakStart.length; i++) {
        const bS = breakStart[i];
        const bE = breakEnd[i];
        if (ctime >= bS && ctime <= bE){
            output.innerHTML = "Det er pause"
            output.style.color = "green"
            break;
        } else{
            output.innerHTML = "Det er ikke pause"
            output.style.color = "red"
        }
    }
}
isBreak()
const intervalId = window.setInterval(function(){
    isBreak();
}, 5000);
