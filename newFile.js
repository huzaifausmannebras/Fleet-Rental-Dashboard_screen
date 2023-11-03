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
