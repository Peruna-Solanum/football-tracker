/////////////////////////////////d/
import confetti from "https://cdn.skypack.dev/canvas-confetti";
//https://www.npmjs.com/package/canvas-confetti
async function populate() {
    const request = new Request('football2024.json');
    
    const response = await fetch(request);
    const stats = await response.json();
    file(stats);
    mainPage(stats);
    /////////////////////////////////////////////////////////////
    function file (obj) {
    const flLbl = document.getElementById('fileLbl');
    const fileName = obj.year;
    flLbl.textContent = "File: " + fileName;
    }
////////////////////////////////////////////////////////////////////////
function mainPage(obj) {
    //names
    const p1 = obj.person[0].name;
    const p2 = obj.person[1].name;
    const p3 = obj.person[2].name;
    const p4 = obj.person[3].name;
    const p5 = obj.person[4].name;
    const p6 = obj.person[5].name;
    const p7 = obj.person[6].name;
    const p8 = obj.person[7].name;
    const p9 = obj.person[8].name;
    //points
    const p1Points = obj.person[0].points;
    const p2Points = obj.person[1].points;
    const p3Points = obj.person[2].points;
    const p4Points = obj.person[3].points;
    const p5Points = obj.person[4].points;
    const p6Points = obj.person[5].points;
    const p7Points = obj.person[6].points;
    const p8Points = obj.person[7].points;
    const p9Points = obj.person[8].points;

    let firstPlace = document.getElementById('firstPlace');
    let secondPlace = document.getElementById('secondPlace');
    let thirdPlace = document.getElementById('thirdPlace');
    let fourthPlace = document.getElementById('fourthPlace');
    let fifthPlace = document.getElementById('fifthPlace');
    let sixthPlace = document.getElementById('sixthPlace');
    let seventhPlace = document.getElementById('seventhPlace');
    let eighthPlace = document.getElementById('eighthPlace');
    let ninthPlace = document.getElementById('ninthPlace');
    //////////////////////////////////////////////
  const button = document.querySelector("button");
  const confettiFire = (evt) => {
  const direction = Math.sign(lastX - evt.clientX);
  lastX = evt.clientX;
  const particleCount = r(122, 245);
  const confettiCanvas = document.getElementById('confettiCanvas');

  let myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true,//it breaks and constantly resets if I don't use this
  })

   myConfetti({
    particleCount,
    direction,
    angle: 90,
    spread: 75,
    origin: {y: .5},

   });
};
const confettiOnClick = (evt) => {
  confettiFire(evt);
  
  ////////////////filling the actual tier list
function winnerSort() {
        let people = [
            { p: p1, n: p1Points},
            { p: p2, n: p2Points},
            { p: p3, n: p3Points},
            { p: p4, n: p4Points},
            { p: p5, n: p5Points},
            { p: p6, n: p6Points},
            { p: p7, n: p7Points},
            { p: p8, n: p8Points},
            { p: p9, n: p9Points},
        ]
        //leaderBoard.sort((a, b) => b - a);//this sorts to have highest first, and actually sorts numbers not strings (I got rid of the data here)
        people.sort((a, b) => b.n - a.n);
        firstPlace.textContent = people[0].p;
        secondPlace.textContent = people[1].p;
        thirdPlace.textContent = people[2].p;
        fourthPlace.textContent = '4. ' + people[3].p;
        fifthPlace.textContent = '5.  ' + people[4].p;
        sixthPlace.textContent = '6. ' + people[5].p;
        seventhPlace.textContent = '7. ' +people[6].p;
        eighthPlace.textContent = '8. ' + people[7].p;
        ninthPlace.textContent = '9. ' + people[8].p;
    };
    winnerSort();
    button.textContent = "Celebrate!!";
};

let lastX = 0;
button.addEventListener("click", confettiOnClick);

function r(min, max) {//random number
  return parseInt(Math.random() * (max - min) + min);
}
}}
populate()//makes everything work ,can't access the data otherwise
