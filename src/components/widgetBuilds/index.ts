import barConfig from './bar/config'
import lineConfig from './line/config'
import textConfig from './text/config'
import tableConfig from './table/config'
import pieConfig from './pie/config'
import radarConfig from './radar/config'
import mapConfig from './map/config'
import axios from 'axios'
export default {
  chartBuild: {
    bar: barConfig,
    line: lineConfig,
    text: textConfig,
    table: tableConfig,
    pie: pieConfig,
    radar: radarConfig,
    map:mapConfig
  },
  build(type: string, code: number) {
    return this.chartBuild[type].build(code)
  }
}
