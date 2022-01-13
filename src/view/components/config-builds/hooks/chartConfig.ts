// 构建部件配置项
import bar from '@/components/widgetBuilds/bar/index.jsx'
import line from '@/components/widgetBuilds/line/index.jsx'
import text from '@/components/widgetBuilds/text/index.jsx'
import table from '@/components/widgetBuilds/table/index.jsx'
import pie from '@/components/widgetBuilds/pie/index.jsx'
import radar from '@/components/widgetBuilds/radar/index.jsx'
import map from '@/components/widgetBuilds/map/index.jsx'
const themeType = {
  bar: bar,
  line: line,
  text: text,
  table: table,
  pie: pie,
  radar: radar,
  map: map
}
export function buildChange(type: string) {
  return themeType[type]
}
