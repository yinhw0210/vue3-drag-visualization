export default {
  build() {
    return {
      title: {
        x: 'center',
        show: true,
        text: '主标题',
        textStyle: {
          color: '',
          fontSize: 12
        }
      },
      tooltip: {
        show: true,
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
          axis: 'auto'
        },
        padding: 5,
        textStyle: {
          color: '#333'
        }
      },
      xAxis: {
        name: '',
        show: true,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        splitLine: {
          show: false,
          lineStyle: {
            color: 'red',
            width: 1,
            type: 'solid'
          }
        },
        axisLabel: {
          show: true,
          inside: false,
          rotate: 0,
          margin: 5,
          fontFamily: '微软雅黑',
          color: 'red',
          fontSize: 12
        }
      },
      yAxis: {
        show: true,
        name: '',
        type: 'value',
        splitLine: {
          show: false,
          lineStyle: {
            color: 'red',
            width: 1,
            type: 'solid'
          }
        },
        axisLabel: {
          show: true,
          color: 'red',
          fontSize: 12
        }
      },
      grid: {
        left: 40,
        top: 50,
        right: 20,
        bottom: 20
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          showSymbol: false,
          smooth: true,
          symbolSize: 5,
          lineStyle: {
            width: 1
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 13
          },
          areaStyle: {
            opacity: 1
          }
        }
      ]
    }
  }
}
