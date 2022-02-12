<template>
  <div class="meka-roadmap__step">
    <div class="meka-roadmap__dot">
      <div class="meka-roadmap__shape" />
    </div>
    <div class="meka-roadmap__details">
      <div class="meka-roadmap__details__title">
        <div class="number degrade">{{ step }}</div>
        <p>{{ title }}</p>
      </div>
      <div class="meka-roadmap__details__description">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
/** TimelineStep Component */
export default class TimelineStep extends Vue {
  @Prop({
    type: String,
    default: '.01',
  })
  readonly step;

  @Prop({
    type: String,
    default: 'Launch Roadmap',
  })
  readonly title;
}
</script>

<style lang="scss">
.meka-roadmap__step {
  box-sizing: border-box;
  display: flex;
  background: #04091a;
  width: 100%;
  padding: rem(50) rem(70);
  margin: rem(30) 0;
  margin-top: rem(100);

  .meka-roadmap__dot {
    padding: rem(5);

    .meka-roadmap__shape {
      width: rem(15);
      height: rem(15);
      background: #fff;
      box-shadow: 0 0 0 rem(6) #04091a;
      transform: rotate(45deg);
      background: $global__color--make-pink-dark;
    }
  }

  .meka-roadmap__details {
    margin-left: rem(35);

    .meka-roadmap__details__title {
      display: flex;
      align-items: baseline;

      @media only screen and (max-width: 780px) {
        flex-direction: column;
      }

      .number {
        font-size: 1.5rem;
        line-height: 2.6rem;
        font-weight: 700;
        margin-right: rem(20);
      }

      .degrade {
        background: linear-gradient(90deg, #d02561, #ff79a8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p {
        text-align: left;
        font-size: rem(30);
        color: $global__color--white;
        margin: 0;
        font-weight: 700;
      }
    }

    .meka-roadmap__details__description {
      margin: rem(20) 0 0;
      color: $global__color--make-blue-secondary;
      font-family: inherit;
      line-height: rem(36);
      font-size: rem(18);
      text-align: left;

      .bold {
        font-weight: 700;
      }
    }
  }
}
</style>
