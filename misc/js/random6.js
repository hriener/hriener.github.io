Highcharts.chart('random6', {
chart: { type: 'column' },
title: { text: 'Random functions with 6 Boolean variables' },
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
    data: [8,14,9,8,12,12,10,0,15,13,10,10,11,12,16,10,14,15,6,12,9,10,16,11,9,13,13,10,13,15,13,14,10,11,7,7,15,8,13,10,14,15,4,14,9,10,12,8,13,14,12,15,14,12,7,7,13,13,9,11,8,15,10,14,6,12,10,12,15,12,13,11,11,12,11,11,10,8,12,9,12,7,12,11,11,12,9,14,13,13,11,11,10,13,10,8,13,13,13,13]
},
{
    name: 'Downward search (Number of terms)',
    data: [5,11,6,6,5,6,6,0,7,5,6,6,6,6,10,5,5,6,5,6,10,7,5,6,5,5,7,6,5,12,5,6,5,6,5,6,10,5,5,4,5,10,4,11,5,4,5,10,5,6,10,6,6,4,4,6,11,7,5,5,5,9,4,9,4,7,6,10,10,5,9,6,5,6,11,5,5,4,5,5,8,4,9,5,4,5,5,5,10,5,6,9,10,6,5,5,5,10,6,6]
},
{
    name: 'Upward search (Number of terms)',
    data: [5,11,6,6,5,6,6,7,7,5,6,6,6,6,6,5,5,6,5,6,6,7,5,6,5,5,7,6,5,7,5,6,5,6,5,6,7,5,5,4,5,7,4,6,5,4,5,7,5,6,7,6,6,4,4,6,6,7,5,5,5,6,4,6,4,7,6,6,7,5,7,6,5,6,6,5,5,4,5,5,6,4,6,5,4,5,5,5,6,5,6,6,6,6,5,5,5,6,6,6]
},
{
    name: 'Fixed-size (Time)',
    data: [0.003,0.008,0.011,0.014,0.022,0.025,0.028,0.17,0.174,0.176,0.179,0.186,0.189,0.192,0.203,0.206,0.209,0.212,0.219,0.222,0.226,0.229,0.232,0.235,0.238,0.241,0.249,0.251,0.254,0.258,0.26,0.263,0.265,0.268,0.27,0.273,0.28,0.283,0.285,0.287,0.29,0.294,0.296,0.3,0.306,0.308,0.311,0.314,0.317,0.321,0.324,0.327,0.33,0.336,0.338,0.341,0.344,0.348,0.351,0.354,0.356,0.359,0.365,0.368,0.37,0.373,0.376,0.38,0.383,0.386,0.39,0.396,0.399,0.401,0.405,0.408,0.412,0.415,0.418,0.424,0.427,0.429,0.432,0.435,0.437,0.44,0.443,0.446,0.453,0.456,0.459,0.462,0.465,0.468,0.471,0.473,0.476,0.482,0.485,0.488,]
},
{
    name : 'Downward search (Time)',
    data: [0.051,0.197,0.619,0.899,0.965,1.304,1.632,1.767,2.029,2.126,2.46,2.769,3.031,3.476,3.649,3.72,3.861,4.102,4.168,4.47,4.657,5.114,5.16,5.439,5.494,5.546,5.936,6.133,6.404,6.569,6.617,7.04,7.098,7.352,7.408,7.695,7.9,7.99,8.044,8.072,8.129,8.304,8.332,8.629,8.684,8.714,8.774,9.021,9.081,9.444,9.582,9.862,10.188,10.218,10.242,10.442,10.655,10.965,11.053,11.122,11.178,11.325,11.362,11.636,11.661,12.106,12.324,12.524,12.682,12.732,12.895,13.106,13.165,13.383,13.541,13.58,13.648,13.677,13.75,13.808,13.989,14.041,14.252,14.508,14.537,14.591,14.656,14.712,14.973,15.024,15.232,15.386,15.566,15.845,15.9,15.959,16.004,16.172,16.424,16.661]
},
{
    name : 'Upward search (Time)',
    data: [0.029,1.034,1.335,1.576,1.606,1.893,2.115,2.46,2.855,2.914,3.152,3.43,3.663,3.971,4.21,4.254,4.287,4.497,4.529,4.768,5.075,5.699,5.714,5.934,5.954,5.98,6.463,6.658,6.687,7.114,7.138,7.514,7.546,7.769,7.801,8.038,8.632,8.685,8.717,8.719,8.747,9.332,9.334,9.546,9.577,9.579,9.604,10.079,10.097,10.418,10.953,11.158,11.371,11.373,11.375,11.574,11.822,12.249,12.278,12.309,12.329,12.715,12.718,12.921,12.923,13.405,13.603,13.861,14.252,14.275,14.673,14.86,14.889,15.092,15.47,15.488,15.537,15.539,15.566,15.587,15.834,15.836,16.061,16.119,16.121,16.143,16.177,16.2,16.415,16.435,16.645,16.831,17.073,17.33,17.359,17.38,17.4,17.613,17.838,18.063]
}]
});         
