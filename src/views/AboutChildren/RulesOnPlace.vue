<template>
  <div>
    <div class="rules-cort">
      <dl>
        <dt>5. Правила поведения на территории и кортах:</dt>
        <dd>
          5.1. Теннисные корты предназначены для игры в теннис, не более 4-х
          человек на корте.
        </dd>
        <dd>
          5.2. Клиенты клуба могут посещать корты только в часы работы клуба.
        </dd>
        <dd>
          5.3. По истечении своего игрового времени Клиент своевременно уступает
          площадку другим игрокам. Превышение игрового времени свыше 10 минут,
          оплачивается как 30 минут по тарифному плану данного Клиента.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RulesOnPlaceComponent extends Vue {}
</script>

<style scoped lang="scss">
.rules-cort {
  width: 900px;
  padding-left: 100px;
}
dd {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
