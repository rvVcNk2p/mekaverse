<template>
  <section class="meka-prezentation">
    <div class="right-section">
      <h2 class="right-section__title">
        <div class="right-section__title--colorized">8,888 unique Mekas</div>
        who need Drivers.
      </h2>
      <p class="paragraph">
        The MekaVerse is a collection of 8,888 generative Mekas with hundreds of
        elements inspired by the Japan Mecha universes.
      </p>
      <p class="paragraph">
        Each artwork is original, with its own color palette and creation. The
        objective was to make each Meka unique in order to prioritize quality
        above quantity.
      </p>
    </div>
    <div class="left-section">
      <video class="various" playsinline autoplay muted loop>
        <source
          src="https://www.themekaverse.com/images/various.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** MekaPresentation Component */
export default class MekaPresentation extends Vue {}
</script>

<style lang="scss">
.meka-prezentation {
  font-family: $global__font-family;
  max-width: $global__max-width;
  background: black;
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  margin-top: rem(100);
  padding: 0 rem(60);
  padding-bottom: rem(100);

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 780px) {
    margin: rem(50) 0 rem(70);
    margin-bottom: 0px;
    padding: 0px rem(30);
    padding-bottom: rem(150);
  }

  .right-section {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(50% - 60px);
    min-width: 370px;

    @media only screen and (max-width: 960px) {
      width: 77.77%;
      margin-top: rem(70);
      margin-bottom: rem(80);
    }

    &__title {
      font-size: rem(46);
      line-height: rem(48);
      color: white;
      margin-bottom: 0;

      @media only screen and (max-width: 1200px) {
        font-size: rem(38);
      }

      &--colorized {
        background: linear-gradient(90deg, #d02561, #ff79a8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .paragraph {
      font-size: rem(18);
      margin: rem(35) 0 0;
      line-height: rem(32);
      color: #848198;

      &:last-child {
        margin-top: rem(30);
      }
    }
  }
  .left-section {
    position: relative;
    width: calc(50% - 30px);

    @media only screen and (max-width: 960px) {
      width: 77.77%;
    }
    @media only screen and (max-width: 670px) {
      width: 100%;
    }

    video {
      width: 100%;
    }

    &::after {
      position: absolute;
      content: '';
      width: rem(145);
      height: rem(145);
      background: url('../assets/images/pyramyd.png') no-repeat;
      right: -60px;
      top: rem(60);

      @media only screen and (max-width: 670px) {
        width: rem(100);
        height: rem(100);
        right: -40px;
        background-size: cover;
      }
    }
  }
}
</style>
