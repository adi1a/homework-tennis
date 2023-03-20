<template>
  <div>
    <div class="other-service">
      <dl>
        <dt>
          6. Помимо аренды кортов, ТК предоставляет Клиентам сопутствующие
          услуги:
        </dt>
        <dd>
          <div class="line-for-list"></div>
          Персонального тренера
        </dd>
        <dd>
          <div class="line-for-list"></div>
          Прокат ракеток, мячей
        </dd>
        <dd>
          <div class="line-for-list"></div>
          Аренда шкафчиков
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OtherComponent extends Vue {}
</script>

<style scoped lang="scss">
dd {
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
}
p {
  margin-left: 10px;
  margin-top: 10px;
}
.line-for-list {
  width: 13px;
  height: 2px;
  background-color: #8d86c9;
  margin-top: 7px;
  margin-right: 10px;
}
.time-corts-club {
  margin-left: 150px;
}
.other-service {
  padding-left: 100px;
  width: 900px;
}
</style>
