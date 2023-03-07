<template>
  <div id="Topbar">
    <ContainerComponent>
      <div class="topbar">
        <div class="topbar-logo">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="" />
          </router-link>
        </div>

        <div class="topbar-menu">
          <ul class="topbar-menu__list">
            <router-link tag="li" to="/t">Главная</router-link>
            <router-link tag="li" to="/about">О клубе</router-link>
            <router-link tag="li" to="/tournaments">Турниры</router-link>
            <router-link tag="li" to="/services">Услуги</router-link>
            <router-link tag="li" to="/tennis">Детский теннис</router-link>
            <router-link tag="li" to="/galery">Галерея</router-link>
            <router-link tag="li" to="/price-list">Цены</router-link>
            <router-link tag="li" to="/contacts">Контакты</router-link>
          </ul>
        </div>
        <div class="topbar-social">
          <a href="https://youtube.com">
            <img src="../assets/youtube.svg" alt="" />
          </a>
          <a href="https://vk.com">
            <img src="../assets/vk.svg" alt="" />
          </a>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "./Container.vue";

@Component({
  components: {
    ContainerComponent,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
#Topbar {
  border-bottom: 1px solid #ccc;
  position: absolute;
  width: 100%;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  &-menu {
    color: white;
    &__list {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
    }
  }
  &-social {
    a {
      margin-left: 10px;
    }
  }
}
</style>
