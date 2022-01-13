import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  emits: [],
  components: {},
  setup(props, { emit, slots }) {
    return () => (
      <>
        <div class="zu-config">
          <div class="zu-header">{props.label}</div>
          <div class="zu-content">{slots.default && slots.default()}</div>
        </div>
      </>
    )
  }
})
