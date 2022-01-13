import { defineComponent, ref } from 'vue'
import back from './style/list.module.scss'
import { config, setWH, Marks } from '@/hooks/useConfig'
export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    const color = ref()
    //上传成功的钩子
    const handleAvatarSuccess = (res, file) => {
      config.customImg = URL.createObjectURL(file.raw)
    }
    //上传前的钩子 限制上传格式
    const beforeAvatarUpload = (file) => {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        console.log('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        console.log('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
    //自定义颜色
    const colorRender = () => {
      return (
        <>
          <div class={back.back_header}>背景颜色(背景图片透明时可见)</div>
          <div class={back.back_content}>
            <el-input
              v-model={config.color}
              size="mini"
              v-slots={{
                suffix: () => {
                  return <el-color-picker v-model={config.color} size="mini" />
                }
              }}
            ></el-input>
          </div>
        </>
      )
    }
    //内置背景
    const builtRender = () => {
      return (
        <>
          <div class={back.back_header}>请选择大屏背景:</div>
          <div class={back.back_content}>
            <div class={back.back_select}></div>
          </div>
        </>
      )
    }
    //上传图片
    const customRender = () => {
      return (
        <>
          <el-upload
            class={back.avatar_uploader}
            action="https://jsonplaceholder.typicode.com/posts/"
            show-file-list={false}
            on-success={handleAvatarSuccess}
            before-upload={beforeAvatarUpload}
          >
            {config.customImg ? (
              <img src={config.customImg} class={back.avatar} />
            ) : (
              <el-icon class={back.avatar_uploader_icon}>
                <svg-icon name="updata" color="#4c8dd8"></svg-icon>
              </el-icon>
            )}
          </el-upload>
        </>
      )
    }
    const vagueRender = () => {
      return (
        <>
          <el-row>
            <el-col span={10}>
              <div class={[back.back_header, back.slider]}>背景图片模糊度</div>
              <div class={back.back_content}>
                <el-slider
                  v-model={config.vagueNum}
                  marks={Marks}
                  max={20}
                  input-size="mini"
                ></el-slider>
              </div>
            </el-col>
            <el-col span={10}>
              <div class={[back.back_header, back.slider]}>背景图片透明度</div>
              <div class={back.back_content}>
                <el-slider
                  v-model={config.transNum}
                  marks={Marks}
                  max={20}
                  input-size="mini"
                ></el-slider>
              </div>
            </el-col>
          </el-row>
        </>
      )
    }
    return () => (
      <>
        <div class={back.back_main}>
          {config.background === 0 ? builtRender() : config.background === 1 ? customRender() : ''}
          {config.background !== 2 ? vagueRender() : ''}
          {colorRender()}
        </div>
      </>
    )
  }
})
