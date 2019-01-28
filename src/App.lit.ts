import { Vue, Component } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = html`
  <div id="app"><router-view /></div>
`

@Component
export default class App extends Vue {}
