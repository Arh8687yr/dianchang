export default{
    title: {
        text: "机组状态实时趋势图",
        subtext: '时间:   转速:',
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
    max: 1
},
],
series: [{
    data: [0.2,0.3,1,0.5,0.4,1,0.4,0.5,0.3],
    type: 'line',
    smooth: true
}]
} 