<template>
  <div class="about-block" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <h3 class="about-block__title">
      {{ title }}
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String,
    bgImage: String,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.about-block {
  height: 450px;
  width: 376px;
  margin-top: 100px;
  padding-top: 380px;
  &__title {
    text-align: center;
    color: white;
    font-size: 20px;
  }
}
</style>
