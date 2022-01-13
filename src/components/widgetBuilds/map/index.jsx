import { defineComponent, onMounted, ref, watch, reactive } from 'vue'
import { ChartConfig } from '@/hooks/userCharts'
export default defineComponent({
  props: {
    id: Number, //活跃状态的组件
    options: String
  },
  emits: [],
  components: {},
  setup(props, ctx) {
    const formData = reactive(JSON.parse(props.options))
    watch(formData, (val) => {
      ChartConfig.chartList.forEach((item, index) => {
        if (item.id === props.id) {
          item.options = JSON.stringify(formData)
        }
      })
    })
    return () => (
      <>
        <el-collapse>
          {/* 地图设置 */}
          <el-collapse-item title="非活跃状态">
            {/* <zu-form-item label="地图级别">
              <el-select v-model={formData.title.x} placeholder="Select" size="mini">
                <el-option label="国家" value="left"></el-option>
                <el-option label="省级" value="center"></el-option>
                <el-option label="市级" value="right"></el-option>
              </el-select>
            </zu-form-item> */}
            <zu-form-item label="地图比例">
              <el-slider v-model={formData.series[0].zoom}></el-slider>
            </zu-form-item>
            {/* <zu-form-item label="字体大小">
              <el-input-number v-model={formData.geo.textStyle.fontSize} size="mini" />
            </zu-form-item> */}
            <zu-form-item label="边框颜色">
              <el-input
                v-model={formData.series[0].itemStyle.normal.borderColor}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.series[0].itemStyle.normal.borderColor}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="背景颜色">
              <el-input
                v-model={formData.series[0].itemStyle.normal.areaColor}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.series[0].itemStyle.normal.areaColor}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="地图大小">
              <el-input-number v-model={formData.series[0].zoom} size="mini" />
            </zu-form-item>
            {/* <zu-form-item label="上下边距">
              <el-input-number v-model={formData.title.textStyle.fontSize} size="mini" />
            </zu-form-item> */}
          </el-collapse-item>
          <el-collapse-item title="活跃状态">
            <zu-form-item label="字体颜色">
              <el-input
                v-model={formData.series[0].itemStyle.emphasis.label.textStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.series[0].itemStyle.emphasis.label.textStyle.color}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="背景颜色">
              <el-input
                v-model={formData.series[0].itemStyle.emphasis.areaColor}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.series[0].itemStyle.emphasis.areaColor}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
          </el-collapse-item>
          {/* 标题设置 */}
          <el-collapse-item title="标题设置">
            <zu-form-item label="标题">
              <el-switch v-model={formData.title.show} />
            </zu-form-item>
            <zu-form-item label="标题">
              <el-input v-model={formData.title.text} size="mini" />
            </zu-form-item>
            <zu-form-item label="标题颜色">
              <el-input
                v-model={formData.title.textStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return <el-color-picker v-model={formData.title.textStyle.color} size="mini" />
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="字体大小">
              <el-input-number v-model={formData.title.textStyle.fontSize} size="mini" />
            </zu-form-item>
            <zu-form-item label="字体位置">
              <el-select v-model={formData.title.x} placeholder="Select" size="mini">
                <el-option label="居左" value="left"></el-option>
                <el-option label="居中" value="center"></el-option>
                <el-option label="居右" value="right"></el-option>
              </el-select>
            </zu-form-item>
          </el-collapse-item>
        </el-collapse>
      </>
    )
  }
})
