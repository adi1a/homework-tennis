<template>
  <div class="home">
    <header class="home-header">
      <ContainerComponent>
        <h1 class="home-header__title">
          Петербургский<br />
          теннисный клуб<br />
          имени М.А. Пасечникова
        </h1>
      </ContainerComponent>
      <ContainerComponent :style-type="containerType.GRID">
        <ServiceBlockComponent
          v-for="(service, index) in services"
          :service-block="service"
          :key="index"
        />
      </ContainerComponent>
    </header>
    <section class="about-blocks">
      <ContainerComponent :style-type="containerType.GRID">
        <AboutBlockComponent
          v-for="(block, index) in aboutBlocks"
          :title="block.title"
          :bg-image="block.bgImage"
          :key="index"
        />
      </ContainerComponent>
    </section>
    <section class="slider-block">
      <ContainerComponent>
        <CarouselComponent :list="sliderBlocks" />
      </ContainerComponent>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "../components/Container.vue";
import ServiceBlockComponent from "../components/ServiceBlock.vue";
import AboutBlockComponent from "@/components/AboutBlock.vue";
import { IServiceBlock } from "@/types/serviceBlock";
import { ContainerType } from "../components/Container.vue";
import CarouselComponent from "@/components/Carousel.vue";

@Component({
  components: {
    ContainerComponent,
    ServiceBlockComponent,
    AboutBlockComponent,
    CarouselComponent,
  },
})
export default class HomeView extends Vue {
  containerType = ContainerType;
  services: IServiceBlock[] = [
    {
      title: "Услуги",
      description: "Аренда корта",
      link: "/",
    },
    {
      title: "Услуги",
      description: "Детский теннис",
      link: "/",
    },
    {
      title: "Услуги",
      description: "Сборы команд",
      link: "/",
    },
    {
      title: "Турниры",
      description: "Расписание",
      link: "/",
    },
  ];

  aboutBlocks = [
    {
      title: "5 летних грунтовых кортов",
      bgImage: require("../assets/adv-img-1.png"),
    },
    {
      title: "Зал с покрытием 'Искусственная трава' ",
      bgImage: require("../assets/adv-img-2.png"),
    },
    {
      title: "Зал с покрытием 'Хард'",
      bgImage: require("../assets/adv-img-3.png"),
    },
  ];

  sliderBlocks = [
    {
      img: require("../assets/human.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/women.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/human.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/women.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
    {
      img: require("../assets/man.png"),
      name: "Pretium Adio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. ",
    },
  ];
}
</script>

<style scoped lang="scss">
.home-header {
  background-image: url("../assets/header-bg.jpg");
  padding-top: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    color: white;
    font-weight: bold;
    font-size: 40px;
  }
}
</style>
