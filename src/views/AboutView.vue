<template>
  <div>
    <header class="about-header">
      <h2 class="about-header__title">О клубе</h2>
    </header>
    <SliderForAboutComponent :list="sliderBlocks" />
    <section class="about-content">
      <Container>
        <ContentComponent
          title="Петербургский теннисный клуб имени М.А. Пасечникова"
          :imageUrl="require('../assets/aboutbackground.jpg')"
        >
          <br />
          <div class="content-text">
            <p>
              Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur
              scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices
              risus viverra. Purus volutpat phasellus viverra vestibulum quis.
              Gravida pretium odio enim ut id tempus semper. Urna cum at in
              iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus.
              Mi faucibus pellentesque molestie nunc, et, tellus. Neque cras
              mattis dolor id. Maecenas vivamus tristique donec neque id
              convallis. Feugiat fusce at est at.
            </p>
          </div>
          <br />
          <div class="content-text">
            <p>
              Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere
              sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper
              pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut
              lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius
              in eu venenatis.
            </p>
          </div>
          <br />
          <div class="content-text">
            <p>
              Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget
              urna magna interdum feugiat ut. In purus rhoncus egestas euismod
              morbi. Ut velit facilisi in cras tempus turpis sapien ipsum,
              mattis. Tempor sit nulla ac lorem placerat congue. Nulla purus
              vestibulum suscipit pellentesque risus non.
            </p>
          </div>

          <div class="content-bottom">
            <div class="content-bottom-flex">
              <div class="content-bottom-number"><p>7</p></div>
              <div class="content-bottom-text">
                <p>Летних грунтовых кортов</p>
              </div>
            </div>
            <div class="content-bottom-flex">
              <div class="content-bottom-number"><p>4</p></div>
              <div class="content-bottom-text">
                <p>Зимних корта с покрытием «искусственная трава»</p>
              </div>
            </div>
            <div class="content-bottom-flex">
              <div class="content-bottom-number"><p>3</p></div>
              <div class="content-bottom-text">
                <p>Зимних корта с покрытием «hard»</p>
              </div>
            </div>
          </div>
        </ContentComponent>
      </Container>
    </section>

    <section class="rules">
      <Container>
        <h1 class="rules-title">Правила</h1>
      </Container>
      <Container :style-type="containerType.FLEX">
        <div class="about-sidebar">
          <AboutRuleComponent
            v-for="(rule, index) in rulesList"
            :key="index"
            :rule="rule"
            :number-of-rule="`${index + 1}.`"
          />
        </div>
        <div class="about-views">
          <router-view></router-view>
        </div>
      </Container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderForAboutComponent from "@/components/SliderForAbout.vue";
import Container from "@/components/Container.vue";
import ContentComponent from "@/components/Content.vue";
import { ContainerType } from "@/components/Container.vue";
import { IRule } from "@/types/rule";
import AboutRuleComponent from "@/components/About/AboutRule.vue";
@Component({
  components: {
    SliderForAboutComponent,
    ContentComponent,
    Container,
    AboutRuleComponent,
  },
})
export default class extends Vue {
  containerType = ContainerType;
  sliderBlocks = [
    {
      img: require("../assets/cort.jpg"),
    },
    {
      img: require("../assets/cort.jpg"),
    },
    {
      img: require("../assets/cort.jpg"),
    },
    {
      img: require("../assets/cort.jpg"),
    },
  ];

  rulesList: IRule[] = [
    {
      title: "Общие положения",
      link: "/about/general",
    },
    {
      title: "Основные определения",
      link: "/about/general-definitions",
    },
    {
      title: "Порядок предоставления игрового времени",
      link: "/about/schedule",
    },
    {
      title: "Оплата услуг",
      link: "/about/pay",
    },
    {
      title: "Правила поведения на территории и кортах",
      link: "/about/rules-on-place",
    },
    {
      title: "Прочие положения",
      link: "/about/other",
    },
  ];
}
</script>

<style scoped lang="scss">
.rules {
  padding-top: 100px;
}
.rules-title {
  font-size: 40px;
}
.about-header {
  background-image: url("../assets/sdi.jpg");
  height: 300px;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
}

.about-content {
  padding-top: 150px;
}

.content-text {
  font-size: 16px;
}
.content-bottom {
  padding-top: 50px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 70px;
}
.content-bottom-number {
  font-size: 70px;
  color: #8d86c9;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
}
.content-bottom-flex {
  display: flex;
}
.content-bottom-text {
  padding-left: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
}
</style>
