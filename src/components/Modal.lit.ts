import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = (modal: Modal & { _b: IModalButton }) => html`
  <div class="modal is-active">
    <div class="modal-background" @click="${modal.close()}"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">${modal.title}</p>
        <button
          class="delete"
          aria-label="close"
          @click="${modal.close()}"
        ></button>
      </header>
      <section class="modal-card-body"><slot></slot></section>
      <footer class="modal-card-foot">
        <button
          v-for="${<any>modal._b in modal.buttons}"
          class="button"
          :class="${modal._b.color}"
          @click="${modal.$emit(modal._b.event)}"
        >
          ${modal._b.label}
        </button>
      </footer>
    </div>
  </div>
`
export interface IModalButton {
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
  buttons!: IModalButton[]

  @Emit()
  close() {
    return
  }
}
