import { ModuleState } from "@/store/store";
import { mapActions,mapMutations } from "vuex";
import { useStore } from "@/store";

export const useMethod = (module_name:keyof ModuleState | string[],wrapper:string[] = [])=>{
  const store = useStore();
  // @ts-ignore
  let options = store._modules.root._rawModule; // 获取根模块的配置

  if(typeof module_name === "string"){
    options = options.modules[module_name]; // 获取子模块的配置
  }else{
    wrapper = module_name;
  }
  
  const { mutations = {},actions = {}  } = options;

  const mutation_keys = Object.keys(mutations);

  const action_keys = Object.keys(actions);

  const action_wrapper:string[] = [];

  const mutation_wrapper:string[] = []; 

  wrapper.forEach((item)=>{ // 过滤掉原始配置中不包含的方法
     if(mutation_keys.includes(item)){
       mutation_wrapper.push(item);
     }
     if(action_keys.includes(item)){
       action_wrapper.push(item);
     }
  })

  const aactions =  typeof module_name === "string"?mapActions(module_name, action_wrapper):mapActions(action_wrapper);

  const mmutations = typeof module_name === "string"?mapMutations(module_name,mutation_wrapper):mapMutations(mutation_wrapper);

  bindStore([aactions,mmutations]); // 不绑定store,vuex执行时会报错

  return [aactions,mmutations];
}

function bindStore(list:any[]){
    const store = useStore() as any;
    list.forEach((item)=>{
        for(let key in item){
            item[key] = item[key].bind({$store:store});
        }   
    })
}