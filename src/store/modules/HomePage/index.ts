import { RootState } from "@/store/store";
import { Module } from "vuex";

export interface HomeType {
  name:string,
  age:number
}

export const m:Module<HomeType,RootState> = {
  namespaced:true, 
  state: {
    name:"hello world",
    age:18
  },
  mutations:{
    incrementAge(state, value) {
      state.age = value
    }  
  },
  actions:{
    increment({ state, commit, rootState},value) {
      commit('incrementAge',value)
    }
  },
  getters:{
    getName(state){
       return state.name.split("").reverse().join("");
    }
  }
}