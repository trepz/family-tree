import { Component, Vue } from 'vue-property-decorator'
import fs from 'fs'
import mkdirp from 'mkdirp'
import { remote } from 'electron'
import { html } from '@/utils'
import { promisify } from 'util'

const write = promisify(fs.writeFile)
const make = promisify(mkdirp)

/** @VueLiteralCompiler Template */
const template = (app: Home) => html`
  <div class="page">
    <div class="page__content page__content--centered">
      <!-- main title -->
      <div class="main-title">Family Tree</div>

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

  // File path to storage
  path: string = `${remote.app.getPath('home')}/family-tree-data/trees/`

  /**
   * Create a new json file which represents a family tree and open it in the editor.
   *
   * @param attempt - The number of attempts this function will try on ENOENT error.
   */
  async createNewAndOpen(attempt: number = 1): Promise<void> {
    try {
      await write(`${this.path}${this.newTreeName}.json`, '', { flag: 'wx' })
    } catch (err) {
      if (err.code === 'ENOENT' && attempt > 0) {
        await this.createStorageDir()
        return this.createNewAndOpen(--attempt)
      }
      console.log(err)
      return
      // -- HANDLE FAILURE WITH MODAL --
    }

    console.log('File created successfully')
  }

  async createStorageDir(): Promise<void> {
    try {
      await make(this.path)
    } catch (err) {
      console.log(`Failed to create storage path at ${this.path}`)
      // -- HANDLE FAILURE WITH MODAL --
      return
    }
    console.log(`Created storage path at ${this.path}`)
  }
}
