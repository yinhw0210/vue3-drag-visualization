import { defineComponent, onMounted, reactive, watch } from 'vue'
import list from './style/list.module.scss'
export default defineComponent({
  props: {
    totalelements: {
      type: Number,
      default:100
    }
  },
  emits: ['sizeChange', 'pageChange'],
  setup(props, { emit, slots }) {
    const data = reactive({
      pageNum: 1, //页码
      pageSize: 10, //条数
      totalelements:100 //总条数
    })
    //监听页码改变
    watch(
      () => data.pageNum,
      (newVal, oldVal) => { 
        emit('pageChange', newVal)
      }
    )
    //监听页数改变
    watch(
      () => data.pageSize,
      (newVal, oldVal) => {
        emit('sizeChange', newVal)
      }
    )
    watch(props,(newVal, oldVal) => { 
        data.totalelements = newVal.totalelements
      }
    )
    return () => (
      <>
        <div class={list.list_main}>
          <div class={list.list_header}>
            <p class={list.list_left}>{slots.left && slots.left()}</p>
            <p class={list.list_right}>{slots.right && slots.right()}</p>
          </div>
          <div class={list.list_body}>{slots.default && slots.default()}</div>
          <div class={list.list_page}>
            <el-pagination
              background
              page-sizes={[10, 20, 30, 40]}
              layout="prev, pager, next, sizes"
              total={data.totalelements}
              page-size={data.pageSize}
              v-model:currentPage={data.pageNum}
              v-model:pageSize={data.pageSize}
            ></el-pagination>
          </div>
        </div>
      </>
    )
  }
})
