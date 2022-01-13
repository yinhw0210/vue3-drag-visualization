import { mapGetters, createNamespacedHelpers } from "vuex";
import { computed, ComputedRef } from "vue";
import { ModuleState } from "@/store/store";
import { useStore } from "@/store";

/**
 * 对store导出数据做封装
 */
export const useGetter = (module_name:keyof ModuleState | string[],wrapper:string[] = [])=>{

  const store = useStore();
  
  let mapFn = mapGetters;

  if(typeof module_name === "string"){ // 访问子模块的getter
      mapFn = createNamespacedHelpers(module_name).mapGetters;
  }else{  // 访问根模块的getter
      wrapper = module_name;
  }

  const storeGettersFns = mapFn(wrapper);

  // 对数据进行转换
  const storeGetter:{ [key:string]: ComputedRef<any>} = {};
  
  // 使用computed将状态包裹一层再返回
  Object.keys(storeGettersFns).forEach(fnKey => {
    const fn = storeGettersFns[fnKey].bind({$store: store})
    storeGetter[fnKey] = computed(fn)
  })

  return storeGetter;
  
}