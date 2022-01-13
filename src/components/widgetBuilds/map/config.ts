export default {
  build(code: number) {
    return {
      // geo: {
      //   map: 'china',
      //   roam: false,
      //   zoom: 1.2,
      //   scaleLimit: { min: 0, max: 3 }, // 缩放级别
      //   regions: [
      //     {
      //       name: '南海诸岛',
      //       value: 0,
      //       itemStyle: {
      //         normal: {
      //           opacity: 0,
      //           label: {
      //             show: false
      //           }
      //         }
      //       }
      //     }
      //   ],
      //   itemStyle: {
      //     areaColor: '#BEDAEE', //默认的地图板块颜色
      //     borderWidth: 1,
      //     borderColor: '#009ce0'
      //   }
      // },
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
        trigger: 'item'
      },
      dataRange: {
        x: '-1000 px', //图例横轴位置
        y: '-1000 px', //图例纵轴位置
        splitList: []
      }, //各省地图颜色；start：值域开始值；end：值域结束值；label：图例名称；color：自定义颜色值；
      series: [
        {
          name: '数据',
          type: 'map',
          mapType: 'china',
          selectedMode: 'multiple',
          zoom:1,
          itemStyle: {
            normal: {
              //未选中状态
              borderWidth: 1, //边框大小
              borderColor: 'lightgreen',
              areaColor: '#4a8bfe', //背景颜色
              label: {
                show: false //显示名称
              }
            },
            emphasis: {
              // 也是选中样式
              borderWidth: 1,
              borderColor: '#fff',
              areaColor: '#416a94',
              label: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              }
            }
          },
          data: []
        }
      ]
    }
  }
}
