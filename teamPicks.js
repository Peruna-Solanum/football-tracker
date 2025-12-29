//////////////////////////////////
    Chart.register(ChartDataLabels);
    Chart.register(window['chartjs-plugin-annotation']);
///////////////////////////////////////////////////////
/////////////////////////////////d/
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
    function charts(obj, obj2) {
    let right = [
        obj.person[0].totalRight, obj.person[1].totalRight, obj.person[2].totalRight, obj.person[3].totalRight, obj.person[4].totalRight, 
        obj.person[5].totalRight, obj.person[6].totalRight, obj.person[7].totalRight, obj.person[8].totalRight, 
    ]
        let avgRight = Math.round(
            (right.reduce((acc, currVal) => {
                return acc + currVal
            }, 0)
            )/9);
////////////////////////////////////////////////////////////////////////
Chart.defaults.color = 'white';
Chart.defaults.borderColor = 'rgba(180, 151, 108, 0.72)';

    ///////////////////////////ranking 
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
        
        function reducer(team) {
            let result = team.reduce((accumulator, currentValue)=> {return accumulator + currentValue}, 0);
            //console.log(result);
            return result;
        }
        let teams = [
            { n: "Cardinals", d:reducer(cardinals) },
            { n: "Falcons", d: reducer(falcons)},
            { n: "Ravens", d: reducer(ravens)},
            { n: "Bills", d: reducer(bills)},
            { n: "Panthers", d: reducer(panthers)},
            { n: "Bears", d: reducer(bears)},
            { n: "Bengals", d: reducer(bengals)},
            { n: "Browns", d: reducer(browns)},
            { n: "Cowboys", d: reducer(cowboys)},
            { n: "Broncos", d: reducer(broncos)},
            { n: "Lions", d: reducer(lions)},
            { n: "Packers", d: reducer(packers)},
            { n: "Texans", d: reducer(texans)},
            { n: "Colts", d: reducer(colts)},
            { n: "Jaguars", d: reducer(jaguars)},
            { n: "Chiefs", d: reducer(chiefs)},
            { n: "Raiders", d: reducer(raiders)},
            { n: "Chargers", d: reducer(chargers)},
            { n: "Rams", d: reducer(rams)},
            { n: "Dolphins", d: reducer(dolphins)},
            { n: "Vikings", d: reducer(vikings)},
            { n: "Patriots", d: reducer(patriots)},
            { n: "Saints", d: reducer(saints)},
            { n: "Giants", d: reducer(giants)},
            { n: "Jets", d: reducer(jets)},
            { n: "Eagles", d: reducer(eagles)},
            { n: "Stealers", d: reducer(stealers)},
            { n: "49rs", d: reducer(fourtyNiners)},
            { n: "Sea Hawks", d: reducer(seaHawks)},
            { n: "Buccaneers", d: reducer(buccaneers)},
            { n: "Titans", d: reducer(titans)},
            { n: "Commanders", d: reducer(commanders)}
        ]

            teams.sort(function(a,b){
                return b.d-a.d;
            });
       
            let array = document.getElementsByClassName("team");
            function teamFill(){
                for (let i = 0; i < 32; i++){
                    array[i].textContent = teams[i].n + ": " + teams[i].d;
                }
            };
             teamFill();

            let names = [
            teams[0].n, teams[1].n, teams[2].n, teams[3].n, teams[4].n, teams[5].n, teams[6].n, teams[7].n, teams[8].n, teams[9].n, teams[10].n, teams[11].n, teams[12].n,
            teams[13].n, teams[14].n, teams[15].n, teams[16].n, teams[17].n, teams[18].n, teams[19].n, teams[20].n, teams[21].n, teams[22].n, teams[23].n,
            teams[24].n, teams[25].n, teams[26].n, teams[27].n, teams[28].n, teams[29].n, teams[30].n, teams[31].n
            ]
            let teamData = [
            teams[0].d, teams[1].d, teams[2].d, teams[3].d, teams[4].d, teams[5].d, teams[6].d, teams[7].d, teams[8].d, teams[9].d, teams[10].d, teams[11].d, teams[12].d,
            teams[13].d, teams[14].d, teams[15].d, teams[16].d, teams[17].d, teams[18].d, teams[19].d, teams[20].d, teams[21].d, teams[22].d, teams[23].d,
            teams[24].d, teams[25].d, teams[26].d, teams[27].d, teams[28].d, teams[29].d, teams[30].d, teams[31].d
            ]
        return [names, teamData];
        } teamSort();
let results = teamSort();
            

    const teamBreakdown = document.getElementById('teamBreakdown').getContext('2d');

 Chart.defaults.color = 'white';
 Chart.defaults.borderColor = 'rgba(180, 151, 108, 0.72)';
    function makeChart(context, title, names, data, chartName) {
          chartName = new Chart(context, {
         plugins: [ChartDataLabels, window['chartjs-plugin-annotation']],
         type: 'bar', // The type of chart we want to create
         data: {
             labels: [names[0], names[1], names[2], names[3], names[4], names[5], names[6], names[7], names[8], names[9], names[10], names[11], names[12], names[13], names[14], names[15], names[16], names[17], names[18], names[19], names[20], names[21], names[22], names[23], names[24], names[25], names[26], names[27], names[28], names[29], names[30], names[31]], // Labels for the chart
             datasets: [{
                 datalabels: {
                     color: 'white'},
                 barPercentage: 0.9,//how thick the bars are
                 label: title,
                 data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31]], // Data points for the chart
                 backgroundColor: [
                     'rgba(223, 155, 54, 0.72)',

                 ],
                 borderColor: [
                     'rgba(143, 98, 73, 1)',

                 ],
                 borderWidth: 3
             }]
         },
     options: {
         plugins: {
             annotation: {
                //  annotations: {
                //      line1: {
                //      type: 'line',
                //      yMin: avg,
                //      yMax: avg,
                //      borderColor: 'rgba(250, 250, 250, 1)',
                //      borderWidth: 2,
                //      }
                // }
                //  },         
                datalabels: {
             color: 'white',
             anchor: 'end',
             align: 'top',
             font: { weight: 'normal' },
             formatter: (value) => value
         }
         },
             scales: {
                 y: {
                     beginAtZero:true, // Start the y-axis at 0
                     min: 0,
                     max: 165,
                 }
             }
         }
     }});
     }
    makeChart(teamBreakdown, "Team", results[0], results[1]);//technically have chartName off in function but it's technically there or else it breaks
}}
populate()//call everything]