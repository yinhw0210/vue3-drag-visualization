export default {
  build() {
    return {
      title: {
        x: 'center',
        show: true,
        text: '主标题',
        textStyle: {
          color: 'red',
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
        name: '销量',
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
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: 'red',
            borderRadius: [18]
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 13
          },
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barWidth: 15
        }
      ]
    }
  }
}
