<template>
  <div class="container" :class="styleType">
    <template>
      <slot> </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export enum ContainerType {
  GRID = "grid",
  FLEX_JUSTIFT_BETWEEN = "flex-justify-content",
}

@Component({
  props: {
    styleType: String as () => ContainerType,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.container {
  width: 1300px;
  margin: 0 auto;
}

.container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.container.flex-justify-content {
  display: flex;
  justify-content: space-between;
}
</style>
