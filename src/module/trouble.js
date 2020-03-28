export default{
    title: {
        text: "故障严重程度实时趋势图(1#X)",
        subtext: '不平衡: 碰摩: 时间: 转速:',
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
    interval: 0.25,
    max: 0.5
},
],
series: [{
    data: [0.1,0.17,0.22,0.4,0.35,0.2,0.45],
    type: 'line',
    smooth: true
}]
}