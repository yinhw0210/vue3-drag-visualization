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
          {/* 柱体设置 */}
          <el-collapse-item title="柱体设置">
            <zu-form-item label="最大宽度">
              <el-slider v-model={formData.series[0].barWidth}></el-slider>
            </zu-form-item>
            <zu-form-item label="圆角">
              <el-slider v-model={formData.series[0].itemStyle.borderRadius[0]}></el-slider>
            </zu-form-item>
            <zu-form-item label="柱体颜色">
              <el-input
                v-model={formData.series[0].itemStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker v-model={formData.series[0].itemStyle.color} size="mini" />
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
          {/* x轴设置 */}
          <el-collapse-item title="x轴设置">
            <zu-form-item label="名称">
              <el-input v-model={formData.xAxis.name} size="mini"></el-input>
            </zu-form-item>
            <zu-form-item label="是否显示">
              <el-switch v-model={formData.xAxis.show} />
            </zu-form-item>
            <zu-form-item label="显示网格线">
              <el-switch v-model={formData.xAxis.splitLine.show} />
            </zu-form-item>
            <zu-form-item label="网格线颜色">
              <el-input
                v-model={formData.xAxis.splitLine.lineStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.xAxis.splitLine.lineStyle.color}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="标签旋转角度">
              <el-input-number v-model={formData.xAxis.axisLabel.rotate} size="mini" />
            </zu-form-item>
            <zu-form-item label="标签颜色">
              <el-input
                v-model={formData.xAxis.axisLabel.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return <el-color-picker v-model={formData.xAxis.axisLabel.color} size="mini" />
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="字号">
              <el-input-number v-model={formData.xAxis.axisLabel.fontSize} size="mini" />
            </zu-form-item>
          </el-collapse-item>
          {/* y轴设置 */}
          <el-collapse-item title="y轴设置">
            <zu-form-item label="名称">
              <el-input v-model={formData.yAxis.name} size="mini"></el-input>
            </zu-form-item>
            <zu-form-item label="是否显示">
              <el-switch v-model={formData.yAxis.show} />
            </zu-form-item>
            <zu-form-item label="显示网格线">
              <el-switch v-model={formData.yAxis.splitLine.show} />
            </zu-form-item>
            <zu-form-item label="网格线颜色">
              <el-input
                v-model={formData.yAxis.splitLine.lineStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.yAxis.splitLine.lineStyle.color}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="标签颜色">
              <el-input
                v-model={formData.yAxis.axisLabel.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return <el-color-picker v-model={formData.yAxis.axisLabel.color} size="mini" />
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="字号">
              <el-input-number v-model={formData.yAxis.axisLabel.fontSize} size="mini" />
            </zu-form-item>
          </el-collapse-item>
          {/* 数值设置 */}
          <el-collapse-item title="数值设置">
            <zu-form-item label="是否开启">
              <el-switch v-model={formData.series[0].label.show} />
            </zu-form-item>
            <zu-form-item label="字体大小">
              <el-input-number
                v-model={formData.series[0].label.fontSize}
                size="mini"
              />
            </zu-form-item>
            <zu-form-item label="字体颜色">
              <el-input
                v-model={formData.series[0].label.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker
                        v-model={formData.series[0].label.color}
                        size="mini"
                      />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
          </el-collapse-item>
          {/* 提示语设置 */}
          <el-collapse-item title="提示语设置">
            <zu-form-item label="是否开启">
              <el-switch v-model={formData.tooltip.show} />
            </zu-form-item>
            {/* <zu-form-item label="字体大小">
              <el-input-number
                v-model={formData.textStyle.fontSize}
                size="mini"
              />
            </zu-form-item> */}
            <zu-form-item label="字体颜色">
              <el-input
                v-model={formData.tooltip.textStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return (
                      <el-color-picker v-model={formData.tooltip.textStyle.color} size="mini" />
                    )
                  }
                }}
              ></el-input>
            </zu-form-item>
          </el-collapse-item>
          {/* 坐标轴边距设置 */}
          <el-collapse-item title="坐标轴边距设置">
            <zu-form-item label="左边距(像素)">
              <el-input-number v-model={formData.grid.left} size="mini" />
            </zu-form-item>
            <zu-form-item label="上边距(像素)">
              <el-input-number v-model={formData.grid.top} size="mini" />
            </zu-form-item>
            <zu-form-item label="右边距(像素)">
              <el-input-number v-model={formData.grid.right} size="mini" />
            </zu-form-item>
            <zu-form-item label="下边距(像素)">
              <el-input-number v-model={formData.grid.bottom} size="mini" />
            </zu-form-item>
          </el-collapse-item>
        </el-collapse>
      </>
    )
  }
})
