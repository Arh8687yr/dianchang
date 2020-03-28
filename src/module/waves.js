export default{
    title: {
        text: "波形图",
        subtext: '不平衡:  时间: 转速:',
        left: 'center',
        align: 'right',
    },
xAxis: {
    name: "当前时间",
    type: 'category',
    data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
},
yAxis:[{
    name:'um',
    type: 'value',
    interval:-100,
    max:-100,
},
],
series: [{
    data: [-100,-80,-90,-80,-90,-80,-90,-80,-90,-80,-90,-80,-90,-80,-90,-80],
    type: 'line',
    smooth: true
}]
}