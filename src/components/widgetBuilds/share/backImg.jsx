import { defineComponent, reactive, watch, ref } from 'vue'
import style from './style.module.scss'
import { borderImg } from '@/utils/tool'
import { ChartConfig } from '@/hooks/userCharts'
export default defineComponent({
  props: {
    id: Number, //活跃状态的组件
    options: Object
  },
  emits: [],
  components: {},
  setup(props, ctx) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const drawer = ref(false)
    const formData = reactive(props.options)
    watch(formData, (val) => {
      ChartConfig.chartList.forEach((item, index) => {
        if (item.id === props.id) {
          item.border = formData
        }
      })
    })
    const renderSimple = () => {
      return (
        <>
          <zu-form-item label="边框颜色">
            <el-input
              v-model={formData.color}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={formData.color} size="mini" />
                }
              }}
            ></el-input>
          </zu-form-item>
          <zu-form-item label="边框宽度">
            <el-input-number v-model={formData.width} size="mini" />
          </zu-form-item>
          <zu-form-item label="边框样式">
            <el-radio-group v-model={formData.style} size="mini">
              <el-radio label="solid">实线</el-radio>
              <el-radio label="dashed">虚线</el-radio>
              <el-radio label="dotted">点状</el-radio>
            </el-radio-group>
          </zu-form-item>
        </>
      )
    }
    const renderBuidIn = () => {
      return (
        <div class={style._select}>
          <img src={borderImg(formData.num)} alt="" />
          <h5
            onClick={() => {
              drawer.value = true
            }}
          >
            点击更换背景边框
          </h5>
        </div>
      )
    }
    const renderBorderImg = (item, index) => {
      return (
        <div
          class={style._item}
          onClick={() => {
            ChartConfig.chartList.forEach((citem, cindex) => {
              if (citem.id === props.id) {
                citem.border.num = item
              }
            })
          }}
        >
          <img src={borderImg(index + 1)} alt="" />
        </div>
      )
    }
    return () => (
      <>
        <el-collapse>
          <el-collapse-item title="边框设置">
            <zu-form-item label="边框类型">
              <el-radio-group v-model={formData.type} size="mini">
                <el-radio label="1">基础边框</el-radio>
                <el-radio label="2">内置边框</el-radio>
                <el-radio label="3">无边框</el-radio>
              </el-radio-group>
            </zu-form-item>
            {formData.type === '1' ? renderSimple() : formData.type === '2' ? renderBuidIn() : ''}
          </el-collapse-item>
        </el-collapse>
        <el-drawer v-model={drawer.value} direction="btt">
          <div class={style._draw}>{arr.map((item, index) => renderBorderImg(item, index))}</div>
        </el-drawer>
      </>
    )
  }
})
