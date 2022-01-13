export default {
  build(code: number) {
    const radius = {
      1: '50%',
      2: ['40%', '55%'],
      3: [20, 100]
    }
    const roseType = {
      1: false,
      2: false,
      3: 'radius'
    }
    return {
      title: {
        text: 'Referer of a Website',
        left: 'left',
        show: true,
        textStyle: {
          color: '',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'item',
        show: false,
        textStyle: {
          fontSize: 12,
          color: '#333'
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        y: 'center',
        show: false,
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      color: [
        'rgb(203,155,255)',
        'rgb(149,162,255)',
        'rgb(58,186,255)',
        'rgb(119,168,249)',
        'rgb(235,161,159)'
      ],
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: radius[code],
          center: ['50%', '50%'],
          roseType: roseType[code],
          labelLine: {
            show: false
          },
          label: {
            show: false,
            color: '#fff',
            fontSize: 13
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }
}
