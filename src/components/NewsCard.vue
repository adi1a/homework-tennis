<template>
  <div class="card">
    <div class="card-items" v-for="(photo, index) in photos" :key="index">
      <img class="card-img" :src="photo.url" alt="" />
      <p>
        {{ photo.title }}
      </p>
      <a href="#"><button class="btn-more">Подробнее</button></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getPhotos } from "@/api/api";
import { IPhoto } from "@/types";

@Component({
  components: {},
})
export default class extends Vue {
  photos: IPhoto[] = [];
  async mounted() {
    try {
      const response = await getPhotos();
      const data = response.data;
      if (data.length) {
        this.photos = data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: repeat(3, 330px);
  grid-gap: 50px 30px;
  margin: 0 auto;
  margin-left: 17%;
  padding-top: 50px;
}
.card-img {
  width: 330px;
  height: 240px;
}
.card-items p {
  font-size: 20px;
  text-transform: capitalize;
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
