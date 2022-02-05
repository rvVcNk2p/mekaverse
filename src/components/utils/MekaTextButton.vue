<template>
  <div class="mekaverse-button">
    <button class="mek">
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
/** MekaTextButton Component */
export default class MekaTextButton extends Vue {
  @Prop()
  readonly text: string;
}
</script>

<style lang="scss" scoped>
.mekaverse-button {
  button {
    height: 100%;
    background: #01030d;
    border: none;
    font-size: rem(14);
    color: #fff;
    padding: rem(6) rem(20);
    transition: all 0.3s ease-in-out;
    font-family: $global__font-family;

    &:hover {
      background-color: #6c77ea;
    }
  }
}
</style>
