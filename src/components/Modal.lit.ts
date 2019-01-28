import { Component, Vue, Emit } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = (modal: Modal) => html`
  <div class="modal is-active">
    <div class="modal-background" @click="${modal.close()}"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" @click="${modal.close()}"></button>
      </header>
      <section class="modal-card-body"><slot></slot></section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button> <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
`

@Component
export default class Modal extends Vue {
  @Emit()
  close() {
    return
  }
}
