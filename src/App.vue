<template>
  <div class="app">
    <TopbarComponent></TopbarComponent>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import TopbarComponent from "@/components/Topbar.vue";

@Component({
  components: {
    ContainerComponent,
    TopbarComponent,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
}

ul {
  list-style: none;
}
</style>
