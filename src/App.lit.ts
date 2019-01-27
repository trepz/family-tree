import { Vue, Component } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = html`
  <template>
    <div id="app"><router-view /></div>
  </template>
`

@Component
export default class App extends Vue {}
