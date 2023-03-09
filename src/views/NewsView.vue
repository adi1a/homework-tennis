<template>
  <div>
    <header class="news-header">
      <h2 class="news-header__title">Новости</h2>
    </header>
    <NewsCardComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "@/components/Container.vue";
import NewsCardComponent from "@/components/NewsCard.vue";

@Component({
  components: {
    Container,
    NewsCardComponent,
  },
})
export default class NewsView extends Vue {}
</script>

<style scoped lang="scss">
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
