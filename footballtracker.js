Chart.register(ChartDataLabels);
Chart.register(window['chartjs-plugin-annotation']);

async function loadJson() {
    const request = new Request('football2024.json');
    const response = await fetch(request);
    const stats = await response.json();
    fileLabelNamer(stats);
    loadMainPage(stats);
}
loadJson();
//populate()//call everything
function fileLabelNamer(data) {
    const flLbl = document.getElementById('fileLbl');
    const fileName = data.year;
    flLbl.textContent = "File: " + fileName;
}
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
function loadMainPage(data) {
    const names = [data.person[0].name,data.person[1].name,data.person[2].name,data.person[3].name,
        data.person[4].name,data.person[5].name,data.person[6].name,data.person[7].name,data.person[8].name];
    const points = [data.person[0].points, data.person[1].points, data.person[2].points, data.person[3].points, data.person[4].points, 
         data.person[5].points, data.person[6].points, data.person[7].points, data.person[8].points];
    const right = [data.person[0].totalRight, data.person[1].totalRight, data.person[2].totalRight, data.person[3].totalRight, data.person[4].totalRight, 
        data.person[5].totalRight, data.person[6].totalRight, data.person[7].totalRight, data.person[8].totalRight];
    const WWData = [Math.round(100*(right[0] / 285)), Math.round(100*(right[1] / 285)), Math.round(100*(right[2] / 285)), Math.round(100*(right[3] / 285)), 
    Math.round(100*(right[4] / 285)), Math.round(100*(right[5] / 285)), Math.round(100*(right[6] / 285)), Math.round(100*(right[7] / 285)), Math.round(100*(right[8] / 285))];

    const avgPoints = Math.round(
            (points.reduce((accumulator, currentValue) => {
                return accumulator + currentValue}, 0)
            )/9);
    const avgRight = Math.round(
            (right.reduce((acc, currVal) => {
                return acc + currVal}, 0)
            )/9); 
    const WWAvg = Math.round(
            (WWData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue}, 0)
            )/9); 
 
    const totalPointsChart = document.getElementById('totalPoints').getContext('2d');//get context tells chart.js which chart goes where
    const totalRightChart = document.getElementById('totalRight').getContext('2d');
    const WW = document.getElementById('WW').getContext('2d');

    Chart.defaults.color = 'white';
    Chart.defaults.borderColor = 'rgba(180, 151, 108, 0.72)';
    
    makeChart(totalPointsChart, "Total Points", names, points, avgPoints,false, 150);//technically have chartName off in function but it's not needed
    makeChart(totalRightChart, 'Total Games Correct', names, right, avgRight, false, 150);
    makeChart(WW, "Win %", names, WWData, WWAvg, true, 0, 100);
}