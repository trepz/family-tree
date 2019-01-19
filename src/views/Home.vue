<template>
  <div class="page">
    <div class="page__content page__content--centered">
      <!-- main title -->
      <div class="title title--big title--soft">Family Tree</div>

      <!-- init buttons -->
      <div class="row center-xs">
        <div class="col-xs-3">
          <!-- create new button -->
          <div class="icon-button">
            <i class="icon-button__icon mdi mdi-file-tree"></i>
            <div class="icon-button__caption">Create new tree.</div>
          </div>
        </div>
        <div class="col-xs-3">
          <!-- open existing button -->
          <div class="icon-button">
            <i class="icon-button__icon mdi mdi-book-open-variant"></i>
            <div class="icon-button__caption">Open a previously saved tree.</div>
          </div>
        </div>
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
