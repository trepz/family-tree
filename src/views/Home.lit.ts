import { Component, Vue } from 'vue-property-decorator'
import fs from 'fs'
import { remote } from 'electron'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = (app: Home) => html`
  <div class="page">
    <div class="page__content page__content--centered">
      <!-- main title -->
      <div class="title title--big title--soft">Family Tree</div>

      <!-- spacer -->
      <div class="mb-75"></div>

      <!-- init buttons -->
      <div class="row center-xs">
        <div class="col-xs-3">
          <!-- create new button -->
          <div class="icon-button" @click="${(app.showCreateModal = true)}">
            <i class="icon-button__icon mdi mdi-file-tree"></i>
            <div class="icon-button__caption">Create new tree.</div>
          </div>
        </div>
        <div class="col-xs-3">
          <!-- open existing button -->
          <div class="icon-button" @click="${(app.showOpenModal = true)}">
            <i class="icon-button__icon mdi mdi-book-open-variant"></i>
            <div class="icon-button__caption">Open a previously saved tree.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- create new tree modal -->
    <div class="modal" v-if="${app.showCreateModal}">
      Enter the name for your family tree: <input type="text" v-model="${app.newTreeName}" />
      <button @click="${app.createNewAndOpen()}">Create</button>
    </div>

    <!-- open existing modal -->
    <div class="modal" v-if="${app.showOpenModal}">Select from the following saved trees: [ ]</div>
  </div>
`

@Component
export default class Home extends Vue {
  showCreateModal: boolean = false
  showOpenModal: boolean = false
  newTreeName: string = ''

  createNewAndOpen(): void {
    fs.writeFile(`${remote.app.getPath('home')}/.family-tree-data/trees/${this.newTreeName}.json`, '', err => {
      if (err) throw err
      alert('created')
    })
  }
}
