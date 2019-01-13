<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar__icon">H</li>
      <li class="sidebar__icon">X</li>
      <li class="sidebar__icon">Y</li>
      <li class="sidebar__icon">T</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {}
</script>