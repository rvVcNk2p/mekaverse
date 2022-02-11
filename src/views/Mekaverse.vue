<template>
  <section class="mekaverse-main">
    <section class="mekaverse-main-hero">
      <header class="container row">
        <div class="mekaverse-logo-container row">
          <img
            src="../assets/images/logo.svg"
            class="mekaverse-logo-container__img"
            alt="mekaverse-logo"
          />
          <div class="mekaverse-logo-container__title">MekaVerse</div>
        </div>

        <social-nav />
      </header>

      <a
        class="mekaverse-main-hero__btn"
        href="https://opensea.io/collection/mekaverse"
        target="_blank"
      >
        <div class="mekaverse-main-hero__btn-container">View on Opensea</div>
      </a>

      <meka-paralax-video />
    </section>

    <meka-presentation />

    <meka-carausel />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MekaParalaxVideo from './MekaParalaxVideo.vue';
import MekaPresentation from './MekaPresentation.vue';
import MekaCarausel from './MekaCarausel.vue';

import SocialNav from '../components/SocialNav.vue';
import MekaTextButton from '../components/utils/MekaTextButton.vue';

@Component({
  components: {
    MekaParalaxVideo,
    MekaPresentation,
    MekaCarausel,
    SocialNav,
    MekaTextButton,
  },
})
/** About Component */
export default class About extends Vue {}
</script>

<style lang="scss">
.mekaverse-main {
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
  &-hero {
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%);
    width: 100%;
    height: 90vh;
    padding: 0 0 0 0;

    @media only screen and (max-width: 780px) {
      height: 750px;
      background: url('https://www.themekaverse.com/images/hero.jpg') no-repeat;
      background-size: cover;
      background-position: bottom;
    }

    @media only screen and (max-width: 500px) {
      height: rem(500);
    }

    header {
      position: absolute;
      top: rem(60);
      left: 0;
      right: 0;
      z-index: 2;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }

    &__btn {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      font-size: rem(20);
      line-height: rem(30);
      text-align: center;
      text-decoration: none;
      font-family: $global__font-family;

      @media only screen and (max-width: 960px) {
        min-width: 70%;
      }
      @media only screen and (max-width: 670px) {
        min-width: 90%;
      }
      @media only screen and (max-width: 500px) {
        top: 75%;
        font-size: rem(18);
        line-height: rem(25);
        padding: rem(15) rem(30);
      }

      &-container {
        background: #4753d6;
        padding: rem(25) rem(50);
        transition: all 0.3s ease-in-out;
        color: #fff;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          background: #6c77ea;
          color: #fff;
        }
      }
    }
  }
}

.row {
  display: flex;
  flex-direction: row;
}
.container {
  max-width: $global__max-width;
  padding: 0 rem(60);
}
a {
  color: #4753d6;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}
main {
  position: relative;
  background: black;
}

.mekaverse-logo-container {
  display: flex;
  align-items: center;

  &__img {
    display: block;
    width: rem(50);
    height: rem(30);

    @media only screen and (max-width: 450px) {
      display: none;
    }
  }
  &__title {
    font-family: $global__font-family;
    font-size: rem(30);
    font-weight: 700;
    color: #fff;
    margin-left: rem(20);

    @media only screen and (max-width: 671px) {
      display: none;
    }
  }
}
</style>
