export default {
    title: {
        text: "峰峰值",
        left: 'center',
        align: 'right',
    },
    color:['rgb(125, 121, 187)'],
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'cross',
    //         crossStyle: {
    //             color: '#999'
    //         }
    //     }
    // },
    legend: {
        // 图例样式
        right: 30,
        top: '45%',
        orient: 'vertical',
        icon:'line',
        selectedMode:false,
        textStyle: {
            color: 'rgb(125, 121, 187)',
            fontSize: 16
        },
        data: ['三轴']
    },
    xAxis: {
        name: "当前时间",
        type: 'category',
        boundaryGap: false, // 不环绕刻度线,
        data: ['16:11:30', '16:17:00', '16:17:30', '16:18:00', '16:18:50', '16:19:05', '16:20:00']
    },
    yAxis: [{
        name: 'um',
        type: 'value',
        max: 144,
        min: 136
    },
    ],
    series: [{
        name: '三轴',
        label: {
            show: true,
            position: 'right'
        },
        data: [141, 137, 138, 142, 141.5, 137.5, 140],
        type: 'line',
        // 线条颜色
        lineStyle: {
            color: 'rgb(125, 121, 187)'
        },
        symbol: 'none' // 拐点标记的图形
        }
    ]
}