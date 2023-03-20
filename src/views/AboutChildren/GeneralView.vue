<template>
  <div>
    <div class="general-service">
      <dl>
        <dt>1. Общие положения:</dt>
        <dd>
          <div class="line-for-list"></div>
          1.1. Настоящие Правила устанавливают основы взаимоотношений Теннисного
          Клуба (далее по тексту ТК) и Клиентов, регулируют порядок оплаты и
          предоставления услуг ТК, нормы поведения на территории ТК.
        </dd>
        <dd>
          <div class="line-for-list"></div>
          1.2. Положения, закрепленные настоящими Правилами, являются
          обязательными для всех Клиентов ТК.
        </dd>
        <dd>
          <div class="line-for-list"></div>
          1.3. Оплата Клиентом услуг Клуба означает согласие Клиента с
          «Правилами Посещения Клуба «Теннисный клуб № 1»».
        </dd>
        <dd>
          <div class="line-for-list"></div>
          1.4. В случае нарушения положений настоящих Правил ТК имеет право
          отказать Клиенту в предоставлении услуг без компенсации денежных
          средств.
        </dd>
        <dd>
          <div class="line-for-list"></div>
          1.5. ТК имеет право в одностороннем порядке дополнять и изменять
          настоящие Правила. Новые Правила вступают в силу с момента размещения
          для всеобщего ознакомления на информационной доске и на сайте ТК.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GeneralView extends Vue {}
</script>

<style scoped lang="scss">
dd {
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
}
.line-for-list {
  width: 13px;
  height: 2px;
  background-color: #8d86c9;
  margin-top: 7px;
  margin-right: 10px;
}
.general-service {
  padding-left: 100px;
  width: 900px;
}
</style>
