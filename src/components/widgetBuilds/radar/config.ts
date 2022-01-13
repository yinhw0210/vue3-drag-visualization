export default {
  build() {
    return {
      title: {
        text: '雷达',
        left: 'left',
        show: true,
        textStyle: {
          color: '',
          fontSize: 12
        }
      },
      textStyle: {
        fontSize: 12,
        color: ''
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
        left: 'left',
        show: false,
        top: 'top',
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
      tooltip: {
        trigger: 'item',
        show: false,
        textStyle: {
          fontSize: 12,
          color: '#333'
        }
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          label: {
            show: false,
            color: '#fff',
            fontSize: 13
          },
          areaStyle: {
            opacity: 0.5
          },
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    }
  }
}
