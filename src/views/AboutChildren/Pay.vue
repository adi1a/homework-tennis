<template>
  <div>
    <div class="pay-service">
      <dl>
        <dd>
          4.1. Оплата предоставляемых Клубом услуг производится на основании
          прейскуранта
        </dd>
        <dd>
          4.2. Оплата 100 % от забронированного ранее игрового времени
          производится строго перед выходом на корт.
        </dd>
        <dd>
          4.3. Оплата абонемента и индивидуальных занятий производится не
          позднее первого дня начала занятий.
        </dd>
        <dd>
          4.4. Оплата занятий в группах производится не позднее 1-го числа
          текущего месяца.
        </dd>
        <dd>
          4.5. Заблаговременно (минимум за 48 часов) предупредить администрацию
          клуба о своей неявке. В случае пропуска без предупреждения будет
          списано 50 % стоимости аренды корта, согласно действующему на момент
          оказания услуги прайсу.
        </dd>
        <dd>
          4.6. Оплата услуг Клуба может производиться как по наличному, так и по
          безналичному расчету.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PayComponent extends Vue {}
</script>

<style scoped lang="scss">
.pay-service {
  padding-left: 100px;
  width: 900px;
}
dd {
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
}
p {
  width: 800px;
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
</style>
