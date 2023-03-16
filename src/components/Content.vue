<template>
  <div class="content">
    <div class="right-info" :style="{ '--bgImage': 'url(' + imageUrl + ')' }">
      <div class="right-info-title">
        <b>{{ title }}</b>
      </div>
      <template>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    imageUrl: {
      type: String,
      default: " ",
    },
    title: {
      type: String,
      default: "title",
    },
  },
})
export default class ContentComponent extends Vue {}
</script>

<style scoped lang="scss">
.content {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.left-image {
  position: absolute;
  width: 526px;
}

.right-info {
  padding-top: 70px;
  padding-left: 146px;
  position: relative;
  background-color: #f7ece1;
  max-width: 850px;
  &:before {
    content: "";
    display: block;
    background-image: var(--bgImage);
    position: absolute;
    width: 526px;
    height: 514px;
    left: -50%;
  }
}
.right-info b {
  font-size: 25px;
}
</style>
