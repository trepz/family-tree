import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = (modal: Modal) => html`
  <div class="modal is-active">
    <div class="modal-background" @click="${modal.close()}"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">${modal.title}</p>
        <button class="delete" aria-label="close" @click="${modal.close()}"></button>
      </header>
      <section class="modal-card-body"><slot></slot></section>
      <footer class="modal-card-foot">
        <button v-for="b in buttons" class="button" :class="b.color" @click="$emit(b.event)">{{ b.label }}</button>
      </footer>
    </div>
  </div>
`
type ModalButton = {
  label: string
  event: string
  color?: string
}

@Component
export default class Modal extends Vue {
  @Prop({ type: String, default: '' })
  title!: string

  @Prop({
    type: Array,
    default: () => [
      {
        label: 'Ok',
        event: 'close',
        color: 'is-success',
      },
    ],
  })
  buttons!: ModalButton[]

  @Emit()
  close() {
    return
  }
}
