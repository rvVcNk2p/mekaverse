<template>
  <div class="mekaverse-button">
    <a
      :href="href"
      name="twitternav"
      rel="noopener"
      target="_blank"
      class="mekaverse-button__link row"
      :style="{
        'webkit-mask': `url('./src/assets/images/${svgName}.svg') no-repeat center`,
      }"
    />
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

  &:hover {
    box-shadow: inset 0 -54px 0 #fff;
  }

  &__link {
    width: rem(44);
    height: rem(44);
    display: block;
    justify-content: center;
    align-items: center;
    background-color: #01030d;
  }
}
</style>
