import { data } from "./data.js"

Highcharts.chart('service_costs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Service Costs',
        align: 'left'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },

    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    }, series: [{
        name: 'Population',

        colors: ['#FFBF00'],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['February\'s 21 ', 200.33],
            ['March\'s 21 ', 300.33],
            ['April\'s 21 ', 340.33],
            ['May\'s 21 ', 280.18],
            ['June\'s 21 ', 250.79],
            ['July\'s 21 ', 200.18],
        ],
        pointWidth: 30,
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
    , legend: {
        enabled: false
    },
});

Highcharts.chart('other_costs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Other Costs',
        align: 'left'

    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },

    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    }, series: [{
        name: 'Population',
        colors: ['#FFBF00'],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['February\'s 21 ', 207.33],
            ['March\'s 21 ', 257.33],
            ['April\'s 21 ', 257.33],
            ['May\'s 21 ', 301.18],
            ['June\'s 21 ', 200.79],
            ['July\'s 21 ', 140.23],
        ],
        pointWidth: 30,
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }

    }]
    , legend: {
        enabled: false
    },
});

Highcharts.chart('fuel_costs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Fuel Costs',
        align: 'left'

    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },

    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    }, series: [{
        name: false,
        colors: ['#00cc70'],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['February\'s 21 ', 350],
            ['March\'s 21 ', 450],
            ['May\'s 21 ', 750.18],
            ['April\'s 21 ', 480],
            ['July\'s 21 ', 0.23],
            ['June\'s 21 ', 650.79],
            ['July\'s 21 ', 0.23],
            ['July\'s 21 ', 400.23],
        ],
        pointWidth: 30,
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }],
    legend: {
        enabled: false
    },
});

// Highcharts.chart('costOwnership', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Cost of Ownership',
//         align: 'left'
//     },
//     xAxis: {
//         categories: ['2019', '2020', '2021']
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Percent'
//         }
//     },
//     tooltip: {
//         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b> ({point.percentage:.0f}%)<br/>',
//         shared: true
//     },
//     plotOptions: {
//         column: {
//             stacking: 'percent',
//             dataLabels: {
//                 enabled: true,
//                 format: '{point.percentage:.0f}%'
//             }
//         }
//     },
//     credits: {
//         enabled: false,
//     },
//     series: [{
//         name: 'Fuel Costs',
//         data: [205],
//         color: "#FCAF00"
//     }, {
//         name: 'Service Costs',
//         data: [166],
//         color: "#00C3FC"
//     }]
// });
Highcharts.chart('costOwnership', {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Cost of Ownership',
        align: 'left'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    legend: {
        align: 'left',
        verticalAlign: 'bottom',
        layout: 'horizontal'
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f}%'
            }
        }
    },
    credits: {
        enabled: false,
    },
    series: [{
        name: 'Fuel Costs',
        data: [205],
        color: "#FCAF00"
    }, {
        name: 'Service Costs',
        data: [166],
        color: "#00C3FC"
    }],

    chart: {
        type: 'column',

        events: {
            load: function () {
                var totalValue = 0;
                var avgFuelCost = 0;
                var avgEfficiency = 0;
                var fuelCostCount = 0;
                var efficiencyCount = 0;
                var series = this.series;
                for (var i = 0; i < series.length; i++) {
                    var name = series[i].name;
                    var data = series[i].data;
                    for (var j = 0; j < data.length; j++) {
                        totalValue += data[j].y;
                        if (name === 'Fuel Costs') {
                            avgFuelCost += data[j].y;
                            fuelCostCount++;
                        } else if (name === 'Service Costs') {
                            avgEfficiency += data[j].y;
                            efficiencyCount++;
                        }
                    }
                }
                avgFuelCost = avgFuelCost / fuelCostCount;
                avgEfficiency = avgEfficiency / efficiencyCount;

                document.getElementById('fuelCosts').innerHTML = "$" + avgFuelCost.toFixed(2);
                document.getElementById('serviceCosts').innerHTML = "$" + avgEfficiency.toFixed(2);

                // Use the total volume, average fuel cost, and average efficiency values in other parts of your code
                // For example, you can assign them to variables
                var fuelCostVariable = avgFuelCost;
                var efficiencyVariable = avgEfficiency;
                var totalValueVariable = fuelCostVariable + efficiencyVariable;
                document.getElementById('totalValue').innerHTML = totalValueVariable.toFixed(2);
                console.log(totalValueVariable);
                console.log(fuelCostVariable);
                console.log(efficiencyVariable);
            }
        }
    }
});


Highcharts.chart('fuelEfficiency', {
    chart: {
        type: 'scatter'
    },
    title: {
        text: 'Fuel Efficiency',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        },
    },
    yAxis: {

        title: null
    },
    credits: {
        enabled: false,
    },
    series: [{
        name: 'Avg Efficiency',
        color: "green",
        data: [
            [Date.UTC(2022, 0, 1), 70],
            [Date.UTC(2022, 0, 2), 50],
            [Date.UTC(2022, 0, 3), 90],
            [Date.UTC(2022, 0, 4), 90],
            [Date.UTC(2022, 0, 3), 50],
            [Date.UTC(2022, 0, 1), 70],
            [Date.UTC(2022, 0, 2), 80],
            [Date.UTC(2022, 0, 5), 70],
            [Date.UTC(2022, 0, 4), 65],
            [Date.UTC(2022, 0, 10), 60],
            [Date.UTC(2022, 0, 10), 60],
            [Date.UTC(2022, 0, 12), 50],
            [Date.UTC(2022, 0, 11), 40]
            // Add more data points as needed
        ],
        marker: {
            symbol: 'circle'
        }
    }, {
        name: 'Avg Fuel Cost',
        color: "red",
        data: [
            [Date.UTC(2022, 0, 1), 100],
            [Date.UTC(2022, 0, 2), 50],
            [Date.UTC(2022, 0, 3), 90],
            [Date.UTC(2022, 0, 5), 90],
            [Date.UTC(2022, 0, 5), 80],
            [Date.UTC(2022, 0, 10), 80],
            [Date.UTC(2022, 0, 10), 20],
            [Date.UTC(2022, 0, 1), 110],
            [Date.UTC(2022, 0, 1), 111],
            [Date.UTC(2022, 0, 1), 110],
            [Date.UTC(2022, 0, 1), 140],
            [Date.UTC(2022, 0, 1), 60],
            [Date.UTC(2022, 0, 1), 80],
            [Date.UTC(2022, 0, 12), 60]
            // Add more data points as needed
        ],
        marker: {
            symbol: 'circle'
        }
    }],
    legend: {
        enabled: false,
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
    },
    tooltip: {
        formatter: function () {
            return 'Date: ' + Highcharts.dateFormat('%b %e, %Y', new Date(this.x)) +
                '<br>' + this.series.name + ': ' + this.y;
        }
    },
    // Retrieve the total volume, average fuel cost, and average efficiency values
    chart: {
        type: 'scatter',
        events: {
            load: function () {
                var totalValue = 0;
                var avgFuelCost = 0;
                var avgEfficiency = 0;
                var fuelCostCount = 0;
                var efficiencyCount = 0;
                var series = this.series;
                for (var i = 0; i < series.length; i++) {
                    var name = series[i].name;
                    var data = series[i].data;
                    for (var j = 0; j < data.length; j++) {
                        totalValue += data[j].y;
                        if (name === 'Avg Fuel Cost') {
                            avgFuelCost += data[j].y;
                            fuelCostCount++;
                        } else if (name === 'Avg Efficiency') {
                            avgEfficiency += data[j].y;
                            efficiencyCount++;
                        }
                    }
                }
                avgFuelCost = avgFuelCost / fuelCostCount;
                avgEfficiency = avgEfficiency / efficiencyCount;

                document.getElementById('avgFuelCost').innerHTML = avgFuelCost.toFixed(2);
                document.getElementById('avgEfficiency').innerHTML = avgEfficiency.toFixed(2);

                // Use the total volume, average fuel cost, and average efficiency values in other parts of your code
                // For example, you can assign them to variables
                var fuelCostVariable = avgFuelCost;
                var efficiencyVariable = avgEfficiency;
                var totalValueVariable = fuelCostVariable + efficiencyVariable;
                document.getElementById('totalValue').innerHTML = totalValueVariable.toFixed(2);
                // console.log(totalValueVariable);
                // console.log(fuelCostVariable);
                // console.log(efficiencyVariable);
            }
        }
    }
});

Highcharts.chart('MeterReedings', {
    chart: {
        type: 'scatter'
    },
    title: {
        text: 'Latest Meter Readings',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        },
    },
    yAxis: {

        title: null
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: 'Miles',
            color: "#2193e5",
            data: [
                [Date.UTC(2022, 0, 1), 100],
                [Date.UTC(2022, 0, 3), 50],
                [Date.UTC(2022, 0, 4), 50],
                [Date.UTC(2022, 0, 5), 90],
                [Date.UTC(2022, 0, 6), 50],
                [Date.UTC(2022, 0, 7), 90],
                [Date.UTC(2022, 0, 8), 80],
                [Date.UTC(2022, 0, 9), 50],
                [Date.UTC(2022, 0, 10), 50],
                [Date.UTC(2022, 0, 11), 80],
                [Date.UTC(2022, 0, 12), 20],
                [Date.UTC(2022, 0, 1), 50],
                [Date.UTC(2022, 0, 2), 110],
                [Date.UTC(2022, 0, 2), 111],
                [Date.UTC(2022, 0, 2), 50],
                [Date.UTC(2022, 0, 3), 111],
                [Date.UTC(2022, 0, 6), 110],
                [Date.UTC(2022, 0, 4), 50],
                [Date.UTC(2022, 0, 6), 50],
                [Date.UTC(2022, 0, 6), 140],
                [Date.UTC(2022, 0, 7), 50],
                [Date.UTC(2022, 0, 8), 60],
                [Date.UTC(2022, 0, 1), 80],
                [Date.UTC(2022, 0, 11), 50],
                [Date.UTC(2022, 0, 11), 50],
                [Date.UTC(2022, 0, 11), 60],
                [Date.UTC(2022, 0, 8), 60],
                [Date.UTC(2022, 0, 9), 80],
                [Date.UTC(2022, 0, 10), 50],
                [Date.UTC(2022, 0, 11), 50],
                [Date.UTC(2022, 0, 12), 60],
                [Date.UTC(2022, 0, 12), 20],
                [Date.UTC(2022, 0, 12), 40],
                [Date.UTC(2022, 0, 12), 80],
                [Date.UTC(2022, 0, 12), 70],
                [Date.UTC(2022, 0, 12), 90],
                [Date.UTC(2022, 0, 12), 65],
                [Date.UTC(2022, 0, 12), 42],
                [Date.UTC(2022, 0, 11), 200],
                [Date.UTC(2022, 0, 12), 250],
                [Date.UTC(2022, 0, 12), 200],
                [Date.UTC(2022, 0, 12), 32],
                [Date.UTC(2022, 0, 12), 22],
                [Date.UTC(2022, 0, 12), 102],
                [Date.UTC(2022, 0, 12), 301],
            ],
            marker: {
                symbol: 'circle'
            }
        },
        {
            name: 'Hours',
            color: "yellow",
            data: [
                [Date.UTC(2022, 0, 1), 20],
                [Date.UTC(2022, 0, 4), 50],
                [Date.UTC(2022, 0, 4), 10],
                [Date.UTC(2022, 0, 5), 30],
                [Date.UTC(2022, 0, 6), 35],
                [Date.UTC(2022, 0, 7), 40],
                [Date.UTC(2022, 0, 8), 55],
                [Date.UTC(2022, 0, 9), 50]]
        }
    ],
    legend: {
        enabled: false,
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
    },
    tooltip: {
        formatter: function () {
            return 'Date: ' + Highcharts.dateFormat('%b %e, %Y', new Date(this.x)) +
                '<br>' + this.series.name + ': ' + this.y;
        }
    },

});

Highcharts.chart('idleHistory', {
    chart: {
        type: 'area',
    },
    title: {
        text: 'Idle History'
        , align: 'left',
    },
    credits: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        title: {
            text: null
        }
    },
    legend: {
        enabled: true,
        align: 'left',
        align: 'left',
        verticalAlign: 'top'
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            borderWidth: 1,
            borderColor: 'green',
            pointStart: 1940,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            },
            dataLabels: {
                enabled: true,
                format: '{y}',

            }
        }
    },
    series: [{
        name: 'USA',
        color: '#49b765',
        data: [

            15, 20, 22, 18, 23, 24,
            28, 16, 21, 19, 18, 17, 15, 5, 10,
            12, 28, 18, 11, 19, 24, 11, 23, 12,
            21, 17, 6, 7, 7, 6, 10, 23, 19, 13,
            13, 16, 14, 11, 24, 17, 21, 18, 22, 21, 21,
            23, 12, 8
        ],

    }]
});


// const vehicleStatusData = [
//     { name: 'Out Of Service', value: 10, color: '#00cc70' },
//     { name: 'Rented', value: 30, color: '#00cc70' },
//     { name: 'Active', value: 10, color: '#FFBF00' }
// ];

// let li = vehicleStatusData.map((data, index) => {
//     return `<li><span class="vehicleStatusData_name">${data.name}</span>
//     <span
//     style="background-color:${data.color}"
//     class="vehicleStatusData_value">${data.value}</span></li>`;
// });

// let vsMain = document.getElementById('vehicle_status');
// vsMain.innerHTML += `<div class="out-of-service-main">
//                   <span class="vehicle_status_heading">Vehicle Status</span>
//   <ul>${li.join('')}</ul></div>`;

// const series = [
//     {
//         name: 'Fuel-Cost',
//         id: 'wrestling',
//         marker: {
//             symbol: 'circle'
//         },
//     },
//     {
//         name: 'Triathlon',
//         id: 'triathlon',
//         marker: {
//             symbol: 'circle',
//         },
//     },
// ];
