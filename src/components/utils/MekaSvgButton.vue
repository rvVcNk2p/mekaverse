<template>
  <div class="mekaverse-button">
    <a :href="href" rel="noopener" target="_blank">
      <img class="mekaverse-button__link row" :src="svgSrc" :alt="svgName" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
/** MekaSvgButton Component */
export default class MekaSvgButton extends Vue {
  @Prop()
  readonly href: string;

  @Prop()
  readonly svgName: string;

  get svgSrc(): string {
    return `./src/assets/images/${this.svgName}.svg`;
  }
}
</script>

<style lang="scss" scoped>
.mekaverse-button {
  border: rem(1) solid #fff;
  width: rem(42);
  height: rem(42);
  margin-right: 15px;
  box-shadow: inset 0 0 0 #fff;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: inset 0 -54px 0 #fff;
  }

  &__link {
    width: rem(18);
    height: rem(18);
    display: block;
    justify-content: center;
    align-items: center;
  }
}
</style>
