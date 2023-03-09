<template>
  <div class="footer">
    <Container :styleType="containerType.FLEX_JUSTIFT_BETWEEN">
      <div class="footer-copyright">2022 © Все права защищены.</div>
      <MenuComponent text-color="#000" />
      <div class="footer-social">
        <a href="https://youtube.com">
          <YouTubeLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://vk.com">
          <VkLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://web.telegram.org/z/">
          <img src="../assets/tg.svg" alt="" />
        </a>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "@/components/Container.vue";
import MenuComponent from "@/components/Menu.vue";
import { ContainerType } from "@/components/Container.vue";
import YouTubeLogoComponent from "./ui/YouTubeLogo.vue";
import VkLogoComponent from "./ui/VkLogo.vue";

@Component({
  components: {
    Container,
    MenuComponent,
    YouTubeLogoComponent,
    VkLogoComponent,
  },
})
export default class FooterComponent extends Vue {
  containerType = ContainerType;
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #f7ece1;
  padding: 30px 0;
  margin-top: 50px;
  &-social {
    display: flex;
    gap: 10px;
  }
}
</style>
