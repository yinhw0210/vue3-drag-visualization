import tableType from './table.vue'
import titleType from './title.vue'
import map from './map.vue'
export default {
  chartBuild: {
    table: tableType,
    text: titleType,
    map: map
  },
  build(type: string) {
    return this.chartBuild[type]
  }
}
