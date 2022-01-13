import { http } from './http'
//添加数据模型
export function addDateModel(data?:object){
  return http('post','/api/doge/insertDataModel',data)
}
//查询数据源选项
export function querySource(data?:object){
  return http('post','/api/doge/getDataSourceOption',data)
}
//查询数据模型列表
export function queryDataModel(data?:object){
  return http('post','/api/doge/findAllDataModel',data)
}
//删除数据模型
export function deleteDataModel(data?:object){
  return http('post','/api/doge/deleteDataModelById',data)
}
//修改排序
export function updateSort(data?:object){
  return http('post','/api/doge/updateSortByIds',data)
}
//查询数据源下表信息
export function queryModelTable(data?:object){
  return http('post','/api/doge/findAllTableByDataSourceId',data)
}
//查询列信息
export function queryColumnTable(data?:object){
  return http('post','/api/doge/findAllColumnByTableName',data)
}
//保存数据模型
export function saveDataModel(data?:object){
  return http('post','/api/doge/updateDataModel',data)
}
//查询数据模型详情
export function queryDataModelDetails(data?:object){
  return http('post','/api/doge/findDataModelById',data)
}