import { Vue, Component } from 'vue-property-decorator'

/** @VueLiteralCompiler Template */
const template = `<template>
  <div id="app">
    <router-view/>
  </div>
</template>`

@Component
export default class App extends Vue {}
