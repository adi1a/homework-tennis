<template>
  <div class="service-block">
    <h4 class="service-block__title">
      {{ serviceBlock.title }}
    </h4>
    <div class="service-block__subtitle">
      <h4 class="service-block__description">
        {{ serviceBlock.description }}
      </h4>
      <a :href="serviceBlock.link">
        <img src="../assets/link-more.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IServiceBlock } from "../types/serviceBlock";

@Component({
  props: {
    serviceBlock: Object as () => IServiceBlock,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.service-block {
  background-color: #8d86c9;
  padding: 20px 10px 10px;
  color: white;
  &__title {
    margin-bottom: 10px;
  }
  &__subtitle {
    display: flex;
    align-items: center;
  }
}
</style>
