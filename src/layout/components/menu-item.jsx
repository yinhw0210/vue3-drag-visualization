import { defineComponent, getCurrentInstance, computed } from 'vue'
export default defineComponent({
  props: {
    routeList: Array,
    isCollapse: Boolean
  },
  setup(props, ctx) {
    const proxy = getCurrentInstance()?.proxy
    const currentPath = computed(() => proxy?.$route)
    const routeList = currentPath.value?.matched[0].children
    const renderMenu = (item, index) => {
      if (item.children) {
        return (
          <el-sub-menu
            index={item.path}
            v-slots={{
              title: () => {
                return (
                  <>
                    <svg-icon
                      name={item.meta.icon}
                      color="#333"
                      class={props.isCollapse ? 'menu_svg' : ''}
                    ></svg-icon>
                    <span>{item.meta.title}</span>
                  </>
                )
              }
            }}
          >
            {item.children.map((chitem, chindex) => (
              <el-menu-item index={chitem.path}>{chitem.meta.title}</el-menu-item>
            ))}
          </el-sub-menu>
        )
      }
      return (
        <el-menu-item
          index={item.path}
          v-slots={{
            title: () => {
              return <span>{item.meta.title}</span>
            }
          }}
        >
          <svg-icon name={item.meta.icon} color="#333"></svg-icon>
        </el-menu-item>
      )
    }
    return () => <>{routeList.map((item, index) => renderMenu(item, index))}</>
  }
})
