import { reactive } from 'vue'
interface chart {
  name: string
  x: number
  y: number
  w: number
  h: number
  type: string
  id: number
  enble: boolean
  options: string
  border: object
  code: number
}
interface ChartConfig {
  chartList: Array<chart>
  isSelect: boolean
}
export const ChartConfig: ChartConfig = reactive({
  chartList: [
    {
      name: '基础色彩图',
      id: 1,
      type: 'map',
      code: 1,
      w: 300,
      h: 200,
      x: 0,
      y: 0,
      enble: false,
      border: {
        type: '3',
        color: '',
        width: 0,
        style: '',
        num: 0
      },
      options: ''
    },
    {
      name: '柱状图',
      id: 2,
      type: 'bar',
      code: 1,
      w: 300,
      h: 200,
      x: 700,
      y: 0,
      enble: false,
      border: {
        type: '2',
        color: '',
        width: 0,
        style: '',
        num: 10
      },
      options: ''
    }
  ],
  isSelect: false
})
