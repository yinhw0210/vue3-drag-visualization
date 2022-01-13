import { defineComponent } from 'vue'
import menuItem from './item'
import style from '../style/list.module.scss'
export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    const fullPath = '1'
    return () => (
      <>
        <el-menu
          default-active="1"
          className={`el-menu-demo ${style.menu_menu}`}
          mode={'horizontal'}
          background-color="#545c64"
          text-color="#fff"
        >
          <menuItem></menuItem>
        </el-menu>
      </>
    )
  }
})
