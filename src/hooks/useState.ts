import { mapState, createNamespacedHelpers } from "vuex";
import { computed, ComputedRef } from "vue";
import { ModuleState } from "@/store/store";
import { useStore } from "@/store";

/**
 * 对store导出数据做封装
 */
export const useState = (module_name:keyof ModuleState | string[],wrapper:string[] = [])=>{

  const store = useStore();
  
  let mapFn = mapState;

  if(typeof module_name === "string"){ // 访问子模块的状态
      mapFn = createNamespacedHelpers(module_name).mapState;
  }else{  // 访问RootState
      wrapper = module_name;
  }

  const storeStateFns = mapFn(wrapper);

  // 对数据进行转换
  const storeState:{ [key:string]: ComputedRef<any>} = {};
  // 使用computed将状态包裹一层再返回
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState;
  
}