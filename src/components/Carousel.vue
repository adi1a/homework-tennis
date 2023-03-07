<template>
  <div class="slider-wrapper">
    <div class="slider-wrapper-content">
      <h1>Тренерский состав</h1>
      <div class="slider-wrapper-btn">
        <button class="btn-left" @click="arrowLeftClickHandler()">
          <img src="../assets/Group 25.svg" alt="" />
        </button>
        <button class="btn-right" @click="arrowRightClickHandler()">
          <img src="../assets/Group 26.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="slider">
      <div class="slider-items-line" ref="sliderItems">
        <div class="slider-element" v-for="(block, index) in list" :key="index">
          <div class="slider-img"><img :src="block.img" alt="" /></div>
          <div class="slider-name">{{ block.name }}</div>
          <div class="slider-description">{{ block.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface SliderProps {
  img: string;
  name: string;
  description: string;
}

@Component({
  props: {
    list: { type: Array as () => SliderProps[], default: [] },
  },
  methods: {},
})
export default class extends Vue {
  itemWidth = 220;
  offset = 0;
  arrowLeftClickHandler() {
    this.$emit("arrowLeftClickHandler");
    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;
    this.offset = this.offset + this.itemWidth;
    listElement.style.transform = `translateX(${-this.offset}px)`;
  }
  arrowRightClickHandler() {
    if (!this.offset) {
      return;
    }
    this.$emit("arrowRightClickHandler");
    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;
    this.offset = this.offset - this.itemWidth;
    listElement.style.transform = `translateX(${-this.offset}px)`;
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 30px;
}
button {
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin-bottom: 15px;
}
.slider-wrapper {
  width: 1320px;
  margin: 0 auto;
  margin-top: 100px;

  .slider-wrapper-content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .slider-wrapper-btn {
      width: 120px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.slider {
  overflow: hidden;
}
.slider-items-line {
  width: 220px;
  display: flex;
  transition: 0.3s;

  .slider-name {
    width: 220px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }

  .slider-description {
    width: 220px;
    font-size: 15px;
    text-align: center;
  }

  .slider-img {
    width: 220px;
    text-align: center;
  }
}
</style>
