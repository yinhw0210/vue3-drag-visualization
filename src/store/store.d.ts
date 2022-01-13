import { HomeType } from "./modules/HomePage";
import { GlobalType } from "./modules";
import {ConfigType} from './modules/Config'

export interface RootState {
  content:string
}

export interface ModuleState {
  HomePage:HomeType,
  Global: GlobalType,
  Config:ConfigType
  
}

export interface AllState extends RootState,ModuleState {}

