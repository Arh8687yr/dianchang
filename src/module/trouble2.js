export default{
    title: {
        text: "故障严重程度实时趋势图(1#V)",
        subtext: '不平衡:  时间: 转速:',
        left: 'center',
        align: 'right',
    },
xAxis: {
    name: "当前时间",
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
},
yAxis:[{
    name:'SF',
    type: 'value',
    interval: 1,
    max:1,
    min:-1
},
],
series: [{
    data: [0,0,0,0,0,0,0],
    type: 'line',
    smooth: true
}]
}