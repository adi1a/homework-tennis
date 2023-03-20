<template>
  <div class="rule">
    <router-link :to="rule.link">
      {{ numberOfRule }} {{ rule.title }}
    </router-link>
    <AboutRuleComponent
      v-for="(сhildRule, index) in rule.children"
      :key="index"
      :rule="сhildRule"
      :number-of-rule="`${numberOfRule}${index + 1}`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IRule } from "@/types/rule";

@Component({
  props: {
    rule: Object as () => IRule,
    numberOfRule: String,
  },
})
export default class AboutRuleComponent extends Vue {}
</script>

<style scoped lang="scss">
.rule > .rule {
  margin-left: 5px;
}
.rule {
  text-decoration: none;
}
</style>
