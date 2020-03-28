export default{
    title: {
        text: "峰峰值",
        left: 'center',
        align: 'right',
    },
xAxis: {
    name: "当前时间",
    type: 'category',
    boundaryGap: false, // 不环绕刻度线,
    data: ['16:11:30', '16:17:00', '16:17:30', '16:18:00', '16:18:50', '16:19:05', '16:20:00']
},
yAxis:[{
    name:'um',
    type: 'value',
    max: 144,
    min: 136
},
],
series: [{
    data: [141,137,138,142,141.5,137.5,140],
    type: 'line',
    // 线条颜色
    lineStyle: {
        color: 'rga(125, 121, 187)'
    },
    symbol: 'none' // 拐点标记的图形
}]
}