//////////////////////////////////
    Chart.register(ChartDataLabels);
    Chart.register(window['chartjs-plugin-annotation']);
///////////////////////////////////////////////////////
/////////////////////////////////d/
async function populate() {
    const request = new Request('football2024.json');
    
    const response = await fetch(request);
    const stats = await response.json();
    file(stats);
    mainPage(stats)
    //chartExample(stats);

    /////////////////////////////////////////////////////////////
    function file (obj) {
    const flLbl = document.getElementById('fileLbl');
    const fileName = obj.year;
    flLbl.textContent = "File: " + fileName;
    }
////////////////////////////////////////////////////////////////////////
function mainPage(obj) {
    const names = [
        obj.person[0].name, obj.person[1].name, obj.person[2].name, obj.person[3].name, obj.person[4].name, obj.person[5].name, 
        obj.person[6].name, obj.person[7].name, obj.person[8].name
    ];
    let points = [//gets the points of each person, p1-p9. I figured out that there was no reason to const 500 things
        obj.person[0].points, obj.person[1].points, obj.person[2].points, obj.person[3].points, obj.person[4].points, 
        obj.person[5].points, obj.person[6].points, obj.person[7].points, obj.person[8].points, 
    ]
        let avgPoints = Math.round(
            (points.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
                }, 0)
            )/9);//the 0 is the initial value. This allows u to reduce whole array into a single # with your own function of course. 
        // can label it any way u want. I then divided it by 9 and rounded it
    let right = [
        obj.person[0].totalRight, obj.person[1].totalRight, obj.person[2].totalRight, obj.person[3].totalRight, obj.person[4].totalRight, 
        obj.person[5].totalRight, obj.person[6].totalRight, obj.person[7].totalRight, obj.person[8].totalRight, 
    ]
        let avgRight = Math.round(
            (right.reduce((acc, currVal) => {
                return acc + currVal
            }, 0)
            )/9);

    let WWData = [Math.round(100*(right[0] / 285)), Math.round(100*(right[1] / 285)), Math.round(100*(right[2] / 285)), Math.round(100*(right[3] / 285)), 
    Math.round(100*(right[4] / 285)), Math.round(100*(right[5] / 285)), Math.round(100*(right[6] / 285)), Math.round(100*(right[7] / 285)), Math.round(100*(right[8] / 285)), ];
        let WWAvg = Math.round(
            (WWData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
                }, 0)
            )/9); 
 
    const totalPointsChart = document.getElementById('totalPoints').getContext('2d');
    const totalRightChart = document.getElementById('totalRight').getContext('2d');
    const WW = document.getElementById('WW').getContext('2d');

Chart.defaults.color = 'white';
Chart.defaults.borderColor = 'rgba(180, 151, 108, 0.72)';
    function makeChart(context, title ,names, data, avg, zero, low, high, chartName) {
         chartName = new Chart(context, {
        plugins: [ChartDataLabels, window['chartjs-plugin-annotation']],
        type: 'bar', // The type of chart we want to create
        data: {
            labels: [names[0], names[1], names[2], names[3], names[4], names[5], names[6], names[7], names[8]], // Labels for the chart
            datasets: [{
                datalabels: {
                    color: 'white'},
                barPercentage: 0.9,//how thick the bars are
                label: title,
                data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]], // Data points for the chart
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
                annotations: {
                    line1: {
                    type: 'line',
                    yMin: avg,
                    yMax: avg,
                    borderColor: 'rgba(250, 250, 250, 1)',
                    borderWidth: 2,
                    }
                }
                },
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
                    beginAtZero: zero, // Start the y-axis at 0
                    min: low,
                    max: high,
                }
            }
        }
    });
    }
    makeChart(totalPointsChart, "Total Points", names, points, avgPoints,false, 150);//technically have chartName off in function but it's not needed
    makeChart(totalRightChart, 'Total Games Correct', names, right, avgRight, false, 150);
    makeChart(WW, "Win %", names, WWData, WWAvg, true, 0, 100);
}}

populate()//call everything