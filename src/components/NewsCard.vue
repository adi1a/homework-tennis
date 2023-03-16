<template>
  <div class="card-items">
    <img class="card-img" :src="photo.url" alt="" />
    <p>
      {{ photo.title }}
    </p>
    <a href="#"><button class="btn-more">Подробнее</button></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IPhoto } from "@/types";

@Component({
  components: {},
  props: {
    photo: {
      type: Object as () => IPhoto,
      default: {},
    },
  },
})
export default class NewsCardComponent extends Vue {}
</script>

<style scoped lang="scss">
.card-img {
  width: 308px;
  height: 240px;
}
.card-items p {
  font-size: 20px;
  text-transform: capitalize;
}

.card-items {
  width: 330px;
  border: thin #f9e4d0 solid;
  padding: 10px;
}
.btn-more {
  width: 120px;
  height: 40px;
  background-color: #8d86c9;
  border: none;
  border-radius: 2px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
