/**
 * Simple component generator helper script.
 */
const fs = require('fs')

const name = process.argv[2]
if (!name) {
  console.log('Please enter a component name.')
  process.exit()
}

const template = `
import { Component, Vue } from 'vue-property-decorator'
import { html } from '@/utils'

/** @VueLiteralCompiler Template */
const template = html\`
  <div>Hello, I am ${name}!</div>
\`

@Component
export default class ${name} extends Vue {}
`

fs.writeFile(`./src/components/${name}.lit.ts`, template, { flag: 'wx' }, err => {
  if (err) {
    console.log(err)
    process.exit()
  }
  console.log(`Created component: ${name}!`)
})
