Highcharts.chart('random7', {
chart: { type: 'column' },
title: { text: 'Random functions with 7 Boolean variables' },
subtitle: {
    text: 'Number of ESOP terms and synthesis time per Boolean function<br /><b>Source: </b><a target="_blank" href="https://github.com/hriener/easy">https://github.com/hriener/easy</a>'
},
xAxis: {
    categories: [ '0' ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: { text: '' }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
    name: 'Fixed-size (Number of terms)',
    data: [24,28,27,27,26,25,28,30,26,24,29,32,25,26,26,31,20,31,23,18,22,0,23,0,29,27,31,28,0,24,30,19,27,26,24,21,24,28,21,20,32,0,20,23,22,0,31,22,29,31,25,21,27,32,0,20,25,25,0,26,22,25,24,0,23,21,24,0,24,20,25,29,18,27,0,0,28,0,21,22,21,0,28,14,20,25,20,22,21,19,31,23,27,21,24,0,28,26,29,29]
},
{
    name: 'Downward search (Number of terms)',
    data: [21,24,22,27,21,19,18,26,22,24,29,20,18,22,28,17,20,24,25,20,28,0,25,0,19,24,15,23,0,23,20,19,26,24,16,26,18,26,19,24,19,0,18,17,25,0,22,25,29,18,15,16,21,21,0,20,24,28,0,27,20,22,24,0,13,24,22,0,21,17,24,21,23,23,0,0,28,0,24,16,21,0,22,16,27,15,20,20,22,20,20,23,21,24,24,0,25,19,22,30]
},
{
    name: 'Upward search (Number of terms)',
    data: [20,17,19,19,9,15,15,21,16,24,19,17,15,18,17,20,18,22,22,11,22,26,19,17,20,23,13,21,19,19,24,20,21,20,12,20,14,18,11,16,20,23,22,11,13,19,23,17,21,19,11,14,21,21,19,20,20,16,24,18,14,20,19,23,15,14,20,18,20,11,21,20,17,16,24,22,21,19,17,16,17,17,19,11,21,13,13,18,10,10,13,23,19,15,15,19,21,16,17,21]
},
{
    name: 'Fixed-size (Time)',
    data: [0.017,0.038,0.056,0.075,0.092,0.105,0.123,0.141,0.159,0.175,0.192,0.226,0.239,0.255,0.271,0.289,0.304,0.326,0.341,0.356,0.37,0.543,0.559,0.745,0.764,0.78,0.839,0.854,1.039,1.053,1.072,1.086,1.106,1.121,1.15,1.18,1.203,1.218,1.234,1.254,1.352,1.551,1.569,1.584,1.612,1.822,2.045,2.067,2.083,2.1,2.11,2.123,2.141,2.159,2.328,2.345,2.36,2.377,2.56,2.577,2.589,2.606,2.62,2.815,2.827,2.843,2.857,3.048,3.061,3.075,3.088,3.107,3.119,3.139,3.318,3.514,3.53,3.711,3.724,3.736,3.753,3.926,3.944,3.957,3.975,3.991,4.007,4.021,4.037,4.048,4.063,4.084,4.103,4.117,4.135,4.36,4.38,4.394,4.411,4.442]
},
{
    name : 'Downward search (Time)',
    data: [0.305,0.543,0.793,1.021,1.215,1.529,1.927,2.139,2.401,2.602,2.82,3.084,3.397,3.682,3.892,4.264,4.443,4.815,5.098,5.315,5.555,5.734,5.989,6.176,6.399,6.646,7.024,7.276,7.489,7.758,7.993,8.25,8.466,8.904,9.192,9.535,9.846,10.056,10.313,10.577,10.92,11.127,11.354,11.556,11.799,11.978,12.309,12.736,12.964,13.315,13.603,13.94,14.243,14.509,14.679,15.049,15.342,15.596,15.782,16.003,16.527,16.901,17.183,17.396,17.678,17.914,18.142,18.326,18.624,19.128,19.433,19.744,20.207,20.448,20.636,20.882,21.22,21.478,21.929,22.271,22.486,22.654,22.873,23.214,23.459,23.759,23.958,24.25,24.459,24.755,25.023,25.293,25.578,25.832,26.014,26.243,26.49,26.728,27.054,27.346]
},
{
    name : 'Upward search (Time)',
    data: [2.72,4.847,7.332,9.837,10.702,12.653,14.388,18.339,20.421,23.884,26.222,29.423,31.214,33.25,35.719,38.432,40.818,43.597,46.826,48.058,50.933,54.653,57.034,59.007,61.567,65.053,66.404,69.18,71.935,74.447,77.978,80.761,83.891,86.893,88.464,91.165,92.913,94.943,96.008,97.815,100.35,103.674,106.554,107.561,109.088,111.216,113.916,115.944,118.63,121.388,122.385,123.792,127.201,130.047,132.505,135.026,137.388,139.307,142.744,145.253,146.901,150.151,152.82,155.966,158.009,159.609,162.295,164.121,166.451,167.617,170.455,172.951,175.188,178.174,181.547,184.877,188.525,190.95,193.158,195.027,197.525,199.594,202.894,204.068,207.359,208.693,210.642,212.773,213.976,214.84,216.317,220.199,222.848,224.521,226.451,229.017,232.101,235.047,236.968,239.881]
}]
});         