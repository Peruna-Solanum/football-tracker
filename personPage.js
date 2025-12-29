    Chart.register(ChartDataLabels);
    Chart.register(window['chartjs-plugin-annotation']);
///////////////////////////////////////////////////////
async function populate() {
    const request = new Request('football2024.json');
    const response = await fetch(request);
    const stats = await response.json();
    const request2 = new Request('teamPicks2024.json');
    const response2 = await fetch(request2);
    const stats2 = await response2.json();
    file(stats);
    charts(stats, stats2);
    /////////////////says the file year in the nav////////////////////////////////////////////
    function file (obj) {
    const flLbl = document.getElementById('fileLbl');
    const fileName = obj.year;
    flLbl.textContent = "File: " + fileName;
    }
////////////////////////////////////////////////////////////////////////
function charts(obj, obj2 ) {
    //names of the people
    const p1 = obj.person[0].name;
    const p2 = obj.person[1].name;
    const p3 = obj.person[2].name;
    const p4 = obj.person[3].name;
    const p5 = obj.person[4].name;
    const p6 = obj.person[5].name;
    const p7 = obj.person[6].name;
    const p8 = obj.person[7].name;
    const p9 = obj.person[8].name;
    //The total points they got
    const p1Points = obj.person[0].points;
    const p2Points = obj.person[1].points;
    const p3Points = obj.person[2].points;
    const p4Points = obj.person[3].points;
    const p5Points = obj.person[4].points;
    const p6Points = obj.person[5].points;
    const p7Points = obj.person[6].points;
    const p8Points = obj.person[7].points;
    const p9Points = obj.person[8].points;
    let avgPoints = Math.round((p1Points + p2Points + p3Points + p4Points + p5Points + p6Points + p7Points + p8Points + p9Points) / 9);
    //the actual amount they got right regardless of points
    const p1Total = obj.person[0].totalRight;
    const p2Total  = obj.person[1].totalRight;
    const p3Total  = obj.person[2].totalRight;
    const p4Total  = obj.person[3].totalRight;
    const p5Total  = obj.person[4].totalRight;
    const p6Total  = obj.person[5].totalRight;
    const p7Total  = obj.person[6].totalRight;
    const p8Total  = obj.person[7].totalRight;
    const p9Total  = obj.person[8].totalRight;
    let avgTotal = Math.round((p1Total + p2Total + p3Total + p4Total + p5Total + p6Total + p7Total + p8Total + p9Total) / 9);
    //This should be the amount they get right week by week
    const p1Weekly = obj.person[0].rightWeekly;
    const p2Weekly = obj.person[1].rightWeekly;
    const p3Weekly = obj.person[2].rightWeekly;
    const p4Weekly = obj.person[3].rightWeekly;
    const p5Weekly = obj.person[4].rightWeekly;
    const p6Weekly = obj.person[5].rightWeekly;
    const p7Weekly = obj.person[6].rightWeekly;
    const p8Weekly = obj.person[7].rightWeekly;
    const p9Weekly = obj.person[8].rightWeekly;
    const gamesPerWeek = obj.gamesPerWeek;
    //ww
    let WW1 =  Math.round(100*(p1Total / 285));
    let WW2 =  Math.round(100*(p2Total / 285));
    let WW3 =  Math.round(100*(p3Total / 285));
    let WW4 =  Math.round(100*(p4Total / 285));
    let WW5 =  Math.round(100*(p5Total / 285));
    let WW6 =  Math.round(100*(p6Total / 285));
    let WW7 =  Math.round(100*(p7Total / 285));
    let WW8 =  Math.round(100*(p8Total / 285));
    let WW9 =  Math.round(100*(p9Total / 285));
    let WWAvg = Math.round((WW1 + WW2 + WW3 + WW4 + WW5 + WW6 + WW7 + WW8 + WW9) / 9);


Chart.defaults.color = 'white';
Chart.defaults.borderColor = 'rgba(180, 151, 108, 0.72)';
    ///////////////////////////ranking 
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

        //console.log(people[0].p)//just to remember how to sort
        let peoples =  [people[0].p, people[1].p, people[2].p, people[3].p, people[4].p, people[5].p, people[6].p, people[7].p, people[8].p];
        return peoples;
        }
        let people = winnerSort();
        let p1rank = people.indexOf(p1) + 1;
        let p2rank = people.indexOf(p2) + 1;
        let p3rank = people.indexOf(p3) + 1;
        let p4rank = people.indexOf(p4) + 1;
        let p5rank = people.indexOf(p5) + 1;
        let p6rank = people.indexOf(p6) + 1;
        let p7rank = people.indexOf(p7) + 1;
        let p8rank = people.indexOf(p8) + 1;
        let p9rank = people.indexOf(p9) + 1;
 
        function teamSort (d) {
        const cardinals = obj2.teams[0].arizonaCardinals;
        const falcons = obj2.teams[1].atlantaFalcons;
        const ravens = obj2.teams[2].baltimoreRavens;
        const bills = obj2.teams[3].buffaloBills;
        const panthers = obj2.teams[4].carolinaPanthers;
        const bears = obj2.teams[5].chicagoBears;
        const bengals = obj2.teams[6].cincinnatiBengals;
        const browns = obj2.teams[7].clevelandBrowns;
        const cowboys = obj2.teams[8].dallasCowboys;
        const broncos = obj2.teams[9].denverBroncos;
        const lions = obj2.teams[10].detroitLions;
        const packers = obj2.teams[11].greenBayPackers;
        const texans = obj2.teams[12].houstonTexans;
        const colts = obj2.teams[13].indianapolisColts;
        const jaguars = obj2.teams[14].jacksonvilleJaguars;
        const chiefs = obj2.teams[15].kansasCityChiefs;
        const raiders = obj2.teams[16].lasVegasRaiders;
        const chargers = obj2.teams[17].losAngelesChargers;
        const rams = obj2.teams[18].losAngelesRams;
        const dolphins = obj2.teams[19].miamiDolphins;
        const vikings = obj2.teams[20].minnesotaVikings;
        const patriots = obj2.teams[21].newEnglandPatriots;
        const saints = obj2.teams[22].newOrleansSaints;
        const giants = obj2.teams[23].nyGiants;
        const jets = obj2.teams[24].nyJets;
        const eagles = obj2.teams[25].philadelphiaEagles;
        const stealers = obj2.teams[26].pittsburghStealers;
        const fourtyNiners = obj2.teams[27].sanFrancisco49ers;
        const seaHawks = obj2.teams[28].seattleSeahawks;
        const buccaneers = obj2.teams[29].tampaBayBuccaneers;
        const titans = obj2.teams[30].tennesseeTitans;
        const commanders = obj2.teams[31].washingtonCommanders;
        let teams = [
            { n: "Cardinals", d: cardinals[d] },
            { n: "Falcons", d: falcons[d] },
            { n: "Ravens", d: ravens[d] },
            { n: "Bills", d: bills[d] },
            { n: "Panthers", d: panthers[d] },
            { n: "Bears", d: bears[d] },
            { n: "Bengals", d: bengals[d] },
            { n: "Browns", d: browns[d] },
            { n: "Cowboys", d: cowboys[d] },
            { n: "Broncos", d: broncos[d] },
            { n: "Lions", d: lions[d] },
            { n: "Packers", d: packers[d] },
            { n: "Texans", d: texans[d] },
            { n: "Colts", d: colts[d] },
            { n: "Jaguars", d: jaguars[d] },
            { n: "Chiefs", d: chiefs[d] },
            { n: "Raiders", d: raiders[d] },
            { n: "Chargers", d: chargers[d] },
            { n: "Rams", d: rams[d] },
            { n: "Dolphins", d: dolphins[d] },
            { n: "Vikings", d: vikings[d] },
            { n: "Patriots", d: patriots[d] },
            { n: "Saints", d: saints[d] },
            { n: "Giants", d: giants[d] },
            { n: "Jets", d: jets[d] },
            { n: "Eagles", d: eagles[d] },
            { n: "Stealers", d: stealers[d] },
            { n: "49rs", d: fourtyNiners[d] },
            { n: "Sea Hawks", d: seaHawks[d] },
            { n: "Buccaneers", d: buccaneers[d] },
            { n: "Titans", d: titans[d] },
            { n: "Commanders", d: commanders[d] }
        ]
            teams.sort(function(a,b){
                return b.d-a.d;
            });

            //const array = ["a", "b", "c"];
            let array = document.getElementsByClassName("team");
            //teams.forEach((element) => console.log(element));
            function teamFill(){
                for (let i = 0; i < 32; i++){
                    array[i].textContent = teams[i].n + ": " + teams[i].d;
                    

                }
            };
        teamFill();
            if (teams[0].d == teams[1].d) {
                return `${teams[0].n} and ${teams[1].n}`;
            } else {
            return teams[0].n;
            }
        }

         
         
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function weeklyWW2(gamesPerWeek, personData) {//non-cumulative amt
        let result = [//gets the win % week by week by dividing the games per week by the person's correct amt per week
            Math.round(100*(personData[0]/gamesPerWeek[0])), Math.round(100*(personData[1]/gamesPerWeek[1])), Math.round(100*(personData[2]/gamesPerWeek[2])), 
            Math.round(100*(personData[3]/gamesPerWeek[3])), Math.round(100*(personData[4]/gamesPerWeek[4])), Math.round(100*(personData[5]/gamesPerWeek[5])),
            Math.round(100*(personData[6]/gamesPerWeek[6])),  Math.round(100*(personData[7]/gamesPerWeek[7])), Math.round(100*(personData[8]/gamesPerWeek[8])),
            Math.round(100*(personData[9]/gamesPerWeek[9])),  Math.round(100*(personData[10]/gamesPerWeek[10])), Math.round(100*(personData[11]/gamesPerWeek[11])),
            Math.round(100*(personData[12]/gamesPerWeek[12])), Math.round(100*(personData[13]/gamesPerWeek[13])), Math.round(100*(personData[14]/gamesPerWeek[14])),
            Math.round(100*(personData[15]/gamesPerWeek[15])), Math.round(100*(personData[16]/gamesPerWeek[16])), Math.round(100*(personData[17]/gamesPerWeek[17])),
            Math.round(100*(personData[18]/gamesPerWeek[18])), Math.round(100*(personData[19]/gamesPerWeek[19])), Math.round(100*(personData[20]/gamesPerWeek[20])),
            Math.round(100*(personData[21]/gamesPerWeek[21]))  
        ]
        //console.log(Math.round(100*(pw14Cum/w14Cum)));//to show that the % multiplication actually works (it seems to)
       return result;
    }

        //the buttons
        const person1 = document.getElementById('p1');
        const person2 = document.getElementById('p2');
        const person3 = document.getElementById('p3');
        const person4 = document.getElementById('p4');
        const person5 = document.getElementById('p5');
        const person6 = document.getElementById('p6');
        const person7 = document.getElementById('p7');
        const person8 = document.getElementById('p8');
        const person9 = document.getElementById('p9');
        //basic stats to get shown off
        const personName = document.getElementById('personName');
        const playerPoints = document.getElementById('points');
        const totalRight = document.getElementById('totalRight');
        const WWStat = document.getElementById('WW');
        const playerRank = document.getElementById('rank');
        const faveTeam = document.getElementById('faveTeam');
        //sets the buttons to have dynamic names
        person1.textContent = p1; 
        person2.textContent = p2;
        person3.textContent = p3;
        person4.textContent = p4;
        person5.textContent = p5;
        person6.textContent = p6;
        person7.textContent = p7;
        person8.textContent = p8;
        person9.textContent = p9;
        let WWWeekly = "Doesn't Exist";

        function weeklyChart (gamesPerWeek, personData) {
            let data = weeklyWW2(gamesPerWeek, personData);
            //console.log(data);
            let week1 = data[0];
            let week2 = data[1];
            let week3 = data[2];
            let week4 = data[3];
            let week5 = data[4];
            let week6 = data[5];
            let week7 = data[6];
            let week8 = data[7];
            let week9 = data[8];
            let week10 = data[9];
            let week11 = data[10];
            let week12 = data[11];
            let week13 = data[12];
            let week14 = data[13];
            let week15 = data[14];
            let week16 = data[15];
            let week17 = data[16];
            let week18 = data[17];
            let wildCard = data[18];
            let divRound = data[19];
            let confChamp = data[20];
            let superBowl = data[21];
            //let weeklyAvg = sum(data);I don't need an avg line for this stuff where I'm going
            //console.log(weeklyAvg)
            const context = document.getElementById('WWThroughout').getContext('2d');//context of canvas
            WWWeekly = new Chart(context, {
         plugins: [ChartDataLabels, window['chartjs-plugin-annotation']],
         type: 'line', // The type of chart we want to create
         data: {
             labels: ["week1", "week2", "week3","week4","week5","week6","week7","week8","week9","week10","week11","week12","week13","week14","week15","week16","week17","week18","wildCard", "divRound","confChamp", "superBowl"], // Labels for the chart
            datasets: [{
                 datalabels: {
                     color: 'rgba(255, 255, 255, 1)' },
                 //barPercentage: 0.9,//how thick the bars are
                 label: 'Total Points for the Season',
                 data: [week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13, week14, week15, week16,week17, week18, wildCard,divRound,confChamp, superBowl], // Data points for the chart
                 backgroundColor: [
                     'black',
                 ],
                 borderColor: [
                     'black',
                 ],
                 borderWidth: 3
             }]
         },
     options: {
         plugins: {
            //  annotation: {
            //      annotations: {
            //          line1: {
            //          type: 'line',
            //          yMin: 0,//avgPoints,
            //          yMax: 0,//avgPoints,
            //          borderColor: 'black',
            //          borderWidth: 2,
            //          }
            //      }
            //      },
         datalabels: {
             color: '#36A2EB',
             anchor: 'end',
             align: 'top',
             font: { weight: 'normal' },
             formatter: (value) => value
         }
         },
             scales: {
                 y: {
                     //beginAtZero: false, // Start the y-axis at 0
                     max: 100,
                     min: 0,
                 }
             }
         }
     });
        }
        function personPicker(button, name, gamesPerWeek, personData, points, total, ww, rank,fave ) {
            button.addEventListener('click', ()=> {
                teamSort(fave);
            personName.textContent = name;
            playerPoints.textContent =  "Points: " + points;
            totalRight.textContent = "Total Right: " + total;
            WWStat.textContent = "Percentage Correct: " + ww + "%";
            playerRank.textContent = "Player Ranking: " + rank;
            faveTeam.textContent = "Favorite Team: " + teamSort(fave);

            if (WWWeekly === "Doesn't Exist") {
                personName.textContent = name;
        
            weeklyChart(gamesPerWeek, personData);
            } else if (WWWeekly !== "Doesn't Exist") {
                //console.log("Chart already exists");
                WWWeekly.destroy();
                weeklyChart(gamesPerWeek, personData);
            } else {
                console.log("Error: The chart neither exists nor doesn't exist and the world will explode in a few seconds..." )
            }
            
        });
        }      
         personPicker(person1, p1, gamesPerWeek, p1Weekly, p1Points, p1Total, WW1, p1rank, 0);
         personPicker(person2, p2, gamesPerWeek, p2Weekly, p2Points, p2Total, WW2, p2rank, 1);
         personPicker(person3, p3, gamesPerWeek, p3Weekly, p3Points, p3Total, WW3, p3rank, 2);
         personPicker(person4, p4, gamesPerWeek, p4Weekly, p4Points, p4Total, WW4, p4rank, 3);
         personPicker(person5, p5, gamesPerWeek, p5Weekly, p5Points, p5Total, WW5, p5rank, 4);
         personPicker(person6, p6, gamesPerWeek, p6Weekly, p6Points, p6Total, WW6, p6rank, 5);
         personPicker(person7, p7, gamesPerWeek, p7Weekly, p7Points, p7Total, WW7, p7rank, 6);
         personPicker(person8, p8, gamesPerWeek, p8Weekly, p8Points, p8Total, WW8, p8rank, 7);
         personPicker(person9, p9, gamesPerWeek, p9Weekly, p9Points, p9Total, WW9, p9rank, 8);
}}

populate()
