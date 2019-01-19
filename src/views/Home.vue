<template>
  <div class="page">
    <div class="page__content page__content--centered">
      <!-- main title -->
      <div class="title title--big title--soft">Family Tree</div>

      <!-- init buttons -->
      <div class="row center-xs">
        <div class="col-xs-3">New</div>
        <div class="col-xs-3">Open</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component
export default class Home extends Vue {}
</script>
