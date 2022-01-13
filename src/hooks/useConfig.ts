// 公共状态文件：替代VUEX
import { reactive } from 'vue'
/**
 * @name: 全局样式配置
 * @author: yhw
 */
interface CONFIG {
  name: string //大屏名称
  width: number //宽度
  height: number //高度
  zoom: number //适配方式
  background: number //背景设置 0：内置背景 1：自定义背景
  builtId: number //内置背景 编号
  customImg: string //自定义背景图片
  color: string //自定义背景颜色
  vagueNum: number //背景图片模糊度
  transNum: number //背景图片透明度
  scale:number //缩放比例

}
export const config: CONFIG = reactive({
  name: '新建大屏',
  //画布宽高
  width: 1920,
  height: 1080,
  zoom: 1,
  background: 0,
  builtId: 0,
  customImg: '',
  color: '#0e2a42',
  vagueNum: 10,
  transNum: 10,
  scale:1
})
export const Marks = reactive({
  0: '0',
  10: '10',
  20: '20'
})
//修改画布宽高
export function setWH(key: string, value: number) {
  config[key] = value
}
