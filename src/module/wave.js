export default{
    title: {
        text: "幅值图",
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
    name:'um',
    type: 'value',
    interval:135,
    min:135,
},
],
series: [{
    data: [135.2,135.4,135.7,135.2,135.8,135.1,135.8],
    type: 'line',
    smooth: true
}]
}