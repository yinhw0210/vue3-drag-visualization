import { defineComponent, onMounted, ref, watch, reactive, computed } from 'vue'
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
    let ColorList = computed({
      get: () => {
        const arr = [...formData.color]
        return arr
      },
      set: (val) => {
        formData.color = val
      }
    })
    const opacity = computed({
      get: () => {
        const [row] = formData.series
        return row.areaStyle.opacity * 100
      },
      set: (val) => {
        formData.series[0].areaStyle.opacity = val / 100
      }
    })
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
          {/* 饼图设置 */}
          <el-collapse-item title="样式配置">
            <zu-form-item label="字体大小">
            <el-input-number v-model={formData.textStyle.fontSize} size="mini" />
            </zu-form-item>
            <zu-form-item label="字体颜色">
            <el-input
                v-model={formData.textStyle.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return <el-color-picker v-model={formData.title.textStyle.color} size="mini" />
                  }
                }}
              ></el-input>
            </zu-form-item>
            <zu-form-item label="区域透明度">
            <el-slider v-model={opacity.value}></el-slider>
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
              <el-select v-model={formData.title.left} placeholder="Select" size="mini">
                <el-option label="居左" value="left"></el-option>
                <el-option label="居中" value="center"></el-option>
                <el-option label="居右" value="right"></el-option>
              </el-select>
            </zu-form-item>
          </el-collapse-item>
          {/* 数值设置 */}
          <el-collapse-item title="数值设置">
            <zu-form-item label="是否开启">
              <el-switch v-model={formData.series[0].label.show} />
            </zu-form-item>
            <zu-form-item label="字体大小">
              <el-input-number v-model={formData.series[0].label.fontSize} size="mini" />
            </zu-form-item>
            <zu-form-item label="字体颜色">
              <el-input
                v-model={formData.series[0].label.color}
                size="mini"
                v-slots={{
                  suffix: () => {
                    return <el-color-picker v-model={formData.series[0].label.color} size="mini" />
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
            <zu-form-item label="字体大小">
              <el-input-number v-model={formData.tooltip.textStyle.fontSize} size="mini" />
            </zu-form-item>
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
          {/* 图例设置 */}
          <el-collapse-item title="图例设置">
            <zu-form-item label="是否开启">
              <el-switch v-model={formData.legend.show} />
            </zu-form-item>
            <zu-form-item label="图例位置">
              <el-select v-model={formData.legend.left} placeholder="Select" size="mini">
                <el-option label="居左" value="left"></el-option>
                <el-option label="居右" value="right"></el-option>
              </el-select>
            </zu-form-item>
            <zu-form-item label="图例上下居中">
              <el-select v-model={formData.legend.top} placeholder="Select" size="mini">
                <el-option label="居上" value="top"></el-option>
                <el-option label="居中" value="middle"></el-option>
                <el-option label="居下" value="bottom"></el-option>
              </el-select>
            </zu-form-item>
          </el-collapse-item>
          {/* 自定义配色 */}
          <el-collapse-item title="自定义配色">
            <el-row>
              {ColorList.value.map((item, index) => {
                return (
                  <>
                    <el-col span={24}>
                      <el-input
                        modelValue={item}
                        onInput={(e) => {
                          formData.color[index] = e
                        }}
                        size="mini"
                        v-slots={{
                          suffix: () => {
                            return (
                              <el-color-picker
                                modelValue={item}
                                onChange={(e) => {
                                  formData.color[index] = e
                                }}
                                size="mini"
                              />
                            )
                          }
                        }}
                      ></el-input>
                    </el-col>
                  </>
                )
              })}
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </>
    )
  }
})
