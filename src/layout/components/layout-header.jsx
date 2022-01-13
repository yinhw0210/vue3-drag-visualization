import { defineComponent } from 'vue'
import header from './index.module.scss'
export default defineComponent({
  props: {},
  emits: ['isShrink'],
  components: {},
  setup (props, ctx) {
    return () => (
      <>
        <div class={header.header_main}>
          <svg-icon name="shrink" color="#333" class={header.shrink} onClick={() => {ctx.emit('isShrink')}}></svg-icon>
        </div>
      </>
    )
  }
})
