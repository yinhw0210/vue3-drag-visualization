# vue3-drag-visualization

## 介绍
本项目为Zeus BI开源简化版，一款简单的可视化搭建工具，重点放在了功能实现上，已实现基本的可视化图表配置  
完整版功能请查看Zeus BI官网 http://www.maingods.xyz  
## 为什么vue3项目要抛弃SFC写法而尝试jsx/tsx方式来编码？  
事实上我这个项目并没有完全抛弃，只是尝试结合两种语法去开发。  
这个问题在掘金上Jokcy老哥的一篇博客已经总结得相当不错，我就不再多赘述相关细节，博客链接如下：
[为什么我推荐使用JSX开发Vue3](https://juejin.cn/post/6911175470255964174)
#### 基本架构
Vite + Vue 3 + Typescript + jsx + sass + axios + router + vuex + elementplus  
基本架构以vue3的模板语法为基础，组件的开发以jsx为主。   
整个配置页面的交互用hooks来实现（个人认为比较省事）
### 涉及到的主要依赖：

1. `vue@^3.2.13`
2. `vite@^2.5.10`
3. `vue-router@4.0.8`
4. `vuex@4`
5. `typescript@^4.5.2`
6. `@types/node": "^16.11.11`
7. `sass@^1.43.5`
8. `@vitejs/plugin-vue-jsx@^1.3.0`
9. `axios": "^0.24.0`
10. `element-plus@^1.2.0-beta.4`
11. `echarts@5.0.1`
#### 已实现的相关功能示范
- [x] typescript
- [x] vue3大部分语法示例
- [x] vite脚手架配置
- [x] tsx/jsx开发模式
- [x] axios简单封装
- [x] sass
- [x] router
- [x] vuex （推荐使用hooks和inject来实现，可以等一手vuex5）
- [x] Element-plus  
#### 安装教程
1. 推荐使用`yarn`
```bash
$ yarn install
```
2. 确保安装`yarn`
```bash
$ yarn dev
```

下面是整个项目的基本目录结构（只对重要文件做说明）：

```bash
│  ├─public # 静态资源目录
│  │      favicon.ico 
│  │
│  ├─src
│  │  │  App.vue # 入口vue文件
│  │  │  main.ts # 入口文件
│  │  │  shims-vue.d.ts # vue文件模块声明文件
│  │  │  vite-env.d.ts # vite环境变量声明文件
│  │  │
│  │  ├─assets # 资源文件目录
│  │  │      └─border # 边框文件夹
│  │  │
│  │  ├─components # 组件文件目录
│  │  │           ├─draggable # 拖拽组件
│  │  │           ├─hader-menu  # 导航栏组件
│  │  │           ├─ruler  # 标尺组件  
│  │  │           ├─widget  #  图表构建组件
│  │  │           └─widgetBuilds # 配置项构建
│  │  │ 
│  │  └─hooks # 公用状态目录
│  │        ├─useConfig # 画布配置项
│  │        ├─useDrag  # 图表钩子
│  │        └─userCharts  # 画布数据项  
│  │  
│  │ .gitignore
│  │ index.html # Vite项目的入口文件 
│  │ package.json
│  │ README.md
│  │ tsconfig.json # tsconfig配置文件
│  │ vite.config.ts # vite配置文件
```
#### jsx/tsx语法规范
如果有过react的开发经验，可以发现除了vue中独有的几个新概念：`slot`、`directive`、`emit`等以外，大部分支持vue的jsx语法规范和react的都是一样的，相同的部分我就不多说了，不了解的可以百度！！！项vue3目改造的纯净版demo和说明以后会发出来（还没写完）值得一提的是`@vue/babel-plugin-jsx`帮我们解析了几个常见的vue指令，比如`v-show`、`v-model`，这两个的用法和功能与vue中一摸一样。其他的直接按照react的语法写就行了
##### jsx/tsx Render方式
jsx和tsx目前还支持render方式的写法，这种写法目前也是大多数开源UI库的写法，个人比较推荐这种写法，它将逻辑层和模板层分开后期更易维护，具体可以看一下建议demo
```tsx
import { ref, renderSlot, onUnmounted, defineComponent } from "vue";
// 带render函数的组件 优点：可将逻辑区与模版区分开
export const RenderComponent = defineComponent({
  props: {
    title: String,
  },
  // 逻辑层
  setup() {
    const count = ref<number>(1);

    const timer = setInterval(() => {
      count.value++;
    }, 2000);

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      count,
    };
  },
  // 渲染层
  render() {
    // render函数在响应式数据发生更改时会自动触发（与react类似）
    const { count, $slots, title } = this;
    return (
      <div class="render-component">
        {renderSlot($slots, "prefix")} {count}
        <br />
        这是props：{title}
        <br />
        {renderSlot($slots, "default")}
      </div>
    );
  },
});
```
#### 参与贡献
在完成Zeus BI的第一迭代之前只接受 `fixbug PR`，不接受 `feature PR`。
#### 已经实现的组件

```
- 基础组件库
- [ ] 柱图
  * [x] 基本柱状图
  * [ ] 弧形柱图
  * [ ] 折线柱图
  * [ ] 水平基本柱状图
- [ ] 折线
  * [x] 基本折线图
  * [x] 区域图
- [ ] 饼图
  * [x] 基本饼图
  * [x] 环形饼图
  * [x] 南丁格尔玫瑰图
  * [ ] 指标占比图
- [ ] 雷达图
  * [x] 基本雷达图
- [ ] 环状图
  * [x] 基本环状图
- [ ] 地图
  * [x] 基础平面地图
    - [ ] 动态气泡层
    - [ ] 飞线层
  * [ ] 世界地图
- [x] 文本标题
  * [x] 通用标题
  * [ ] 数字翻牌器
  * [ ] 跑马灯
  * [ ] 多行文本
  * [ ] 时间器
  * [ ] 词云
- [ ] 列表
  * [x] 基础列表
  * [ ] 轮播列表
  * [ ] 轮播列表柱状图
- [] 媒体
  * [ ] 单张图片
  * [ ] 装饰
  * [x] 边框
  * [x] 自定义背景
- [ ] 控件
  * [ ] 全屏切换
  * [ ] Tab列表
  * [ ] 进度条
```
## 注意

本项目主要用来研究与学习。