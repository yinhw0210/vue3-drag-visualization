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
      <el-collapse>
        <el-collapse-item title="基础设置">
          <zu-form-item label="字体位置">
            <el-select v-model={formData.align} placeholder="Select" size="mini">
              <el-option label="左对齐" value="left"></el-option>
              <el-option label="居中" value="center"></el-option>
              <el-option label="右对齐" value="right"></el-option>
            </el-select>
          </zu-form-item>
          <zu-form-item label="字体大小">
            <el-slider v-model={formData.fontSize}></el-slider>
          </zu-form-item>
          <zu-form-item label="行高">
            <el-input-number v-model={formData.lineHeight} size="mini" />
          </zu-form-item>
          <zu-form-item label="开启滚动">
            <el-switch v-model={formData.isRoll} />
          </zu-form-item>
          <zu-form-item label="开启线条">
            <el-switch v-model={formData.isBorder} />
          </zu-form-item>
          <zu-form-item label="线条颜色">
            <el-input
              v-model={formData.bgColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.bgColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          <zu-form-item label="滚动时间">
            <el-input-number v-model={formData.rollTime} size="mini" />
          </zu-form-item>
          <zu-form-item label="滚动行数">
            <el-input-number v-model={formData.rollRows} size="mini" />
          </zu-form-item>
        </el-collapse-item>
        <el-collapse-item title="表头设置">
          <zu-form-item label="表头显隐">
            <el-switch v-model={formData.showHeader} />
          </zu-form-item>
          <zu-form-item label="表头颜色">
            <el-input
              v-model={formData.headerColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.headerColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          <zu-form-item label="表头背景">
            <el-input
              v-model={formData.headerBackColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.headerBackColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
        </el-collapse-item>
        <el-collapse-item title="表体设置">
          <zu-form-item label="文字颜色">
            <el-input
              v-model={formData.rowColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.rowColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          <zu-form-item label="表格背景">
            <el-input
              v-model={formData.rowBackColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.rowBackColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          {/* <zu-form-item label="奇行颜色">
            <el-input
              v-model={formData.oddColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.oddColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          <zu-form-item label="偶行颜色">
            <el-input
              v-model={formData.eventColor}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.eventColor} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item> */}
        </el-collapse-item>
      </el-collapse>
    )
  }
})
