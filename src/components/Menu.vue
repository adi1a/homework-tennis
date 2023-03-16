<template>
  <div>
    <div class="menu" :style="{ color: textColor }">
      <ul class="menu__list">
        <router-link tag="li" to="/">Главная</router-link>
        <router-link tag="li" to="/about">О клубе</router-link>
        <router-link tag="li" to="/news">Новости</router-link>
        <router-link tag="li" to="/services">Услуги</router-link>
        <router-link tag="li" to="/tennis">Детский теннис</router-link>
        <router-link tag="li" to="/galery">Галерея</router-link>
        <router-link tag="li" to="/price-list">Цены</router-link>
        <router-link tag="li" to="/contacts">Контакты</router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    textColor: {
      type: String,
      required: false,
      default: "white",
    },
  },
})
export default class MenuComponent extends Vue {}
</script>

<style scoped lang="scss">
.menu {
  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }
}
</style>
