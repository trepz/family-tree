<template>
  <div id="app">
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: { Sidebar },
})
export default class App extends Vue {}
</script>

