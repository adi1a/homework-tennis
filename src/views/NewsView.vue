<template>
  <div>
    <header class="news-header">
      <h2 class="news-header__title">Новости</h2>
    </header>
    <div class="news-card">
      <NewsCardComponent
        v-for="(photo, index) in photos"
        :key="index"
        :photo="photo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "@/components/Container.vue";
import NewsCardComponent from "@/components/NewsCard.vue";
import { IPhoto } from "@/types";
import { getPhotos } from "@/api/api";

@Component({
  components: {
    Container,
    NewsCardComponent,
  },
})
export default class NewsView extends Vue {
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
.news-card {
  display: grid;
  grid-template-columns: repeat(3, 330px);
  grid-gap: 50px 30px;
  padding-top: 70px;
  width: 1050px;
  margin: 0 auto;
}
.news-header {
  background-image: url("../assets/newsBackground.jpg");
  height: 300px;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
}
</style>
