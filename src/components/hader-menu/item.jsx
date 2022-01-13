import { defineComponent } from 'vue'
import { partsList } from './type'
import style from '../style/list.module.scss'
import { importImg } from '../../utils/tool'
import { ChartConfig } from '@/hooks/userCharts'
export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    const renderSubMenu = (item, index) => {
      return (
        <el-sub-menu
          class={style.menu_sub}
          index={String(index)}
          v-slots={{
            title: () => {
              return <svg-icon name={item.icon} color="#909399"></svg-icon>
            }
          }}
        >
          {item.chart.map((citem, cindex) => renderSubMenuCh(index, cindex, citem))}
        </el-sub-menu>
      )
    }
    const renderSubMenuCh = (index, cindex, citem) => {
      return (
        <el-sub-menu
          index={`${String(index)}-${String(cindex)}`}
          v-slots={{
            title: () => {
              return (
                <>
                  <svg-icon name={citem.icon} color="#909399" class={style._icon}></svg-icon>
                  <span>{citem.title}</span>
                </>
              )
            }
          }}
        >
          {citem.data.map((ditem, dindex) => renderMenuItem(ditem, dindex))}
        </el-sub-menu>
      )
    }
    const renderMenuItem = (ditem, dindex) => {
      return (
        <div
          class={style.menu_item}
          onClick={() => {
            ChartConfig.chartList.push({
              name: ditem.name,
              id: ChartConfig.chartList.length + 1,
              type: ditem.type,
              code: ditem.code,
              w: 300,
              h: 200,
              x: 0,
              y: 0,
              enble: false,
              options: '',
              border: {
                type: '3',
                color: '',
                width: 0,
                style: '',
                num: 0
              }
            })
          }}
        >
          <img src={importImg(ditem.type, ditem.code)} alt="" />
          <p>{ditem.name}</p>
        </div>
      )
    }
    return () => (
      <>
        {partsList.map((item, index) => renderSubMenu(item, index))}
        {/* return (
            <el-sub-menu
              class={style.menu_sub}
              index={String(index)}
              v-slots={{
                title: () => {
                  return <svg-icon name={item.icon} color="#909399"></svg-icon>
                }
              }}
            >
              {item.chart.map((citem, cindex) => {
                return (
                  <el-sub-menu
                    index={`${String(index)}-${String(cindex)}`}
                    v-slots={{
                      title: () => {
                        return (
                          <>
                            <svg-icon
                              name={citem.icon}
                              color="#909399"
                              class={style._icon}
                            ></svg-icon>
                            <span>{citem.title}</span>
                          </>
                        )
                      }
                    }}
                  >
                    {citem.data.map((ditem, dindex) => {
                      return (
                        <div
                          class={style.menu_item}
                          onClick={() => {
                            ChartConfig.chartList.push({
                              name: ditem.name,
                              id: ChartConfig.chartList.length + 1,
                              type: ditem.type,
                              w: 200,
                              h: 200,
                              x: 0,
                              y: 0,
                              enble: false
                            })
                          }}
                        >
                          <img src={importImg(ditem.type)} alt="" />
                          <p>{ditem.name}</p>
                        </div>
                      )
                    })}
                  </el-sub-menu>
                )
              })}
            </el-sub-menu>
          )
        })} */}
      </>
    )
  }
})
