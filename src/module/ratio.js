export default{

        title: {
            text: "增幅图",
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
        max: 170
    },
    ],
    series: [{
        data: [50,54,48,56,51.5,52.5,51.6],
        type: 'line',
        smooth: true
    }]
    }
