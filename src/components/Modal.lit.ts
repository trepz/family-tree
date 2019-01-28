import { Component, Vue } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = html`
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body"><slot></slot></section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button> <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
`

@Component
export default class Modal extends Vue {}
