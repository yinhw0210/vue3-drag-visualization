import { RootState } from "@/store/store";
import { Module } from "vuex";

export interface ConfigType {
  width:number,
  height:number
}

export const m:Module<ConfigType,RootState> = {
  namespaced:true, 
  state: {
    width: 1920,
    height:1080
  },
  mutations:{
    modifyWH(state,{key,value}) {
      state[key] = value
    }  
  },
  actions:{
    modify({ state, commit, rootState},value) {
      commit('modifyWH',{...value})
    }
  },
  getters:{
    getName(state){
      //  return state.name.split("").reverse().join("");
    }
  }
}