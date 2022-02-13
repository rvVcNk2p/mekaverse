<template>
  <section class="meka-join-the-community">
    <div class="meka-join container">
      <h2 class="meka-join__title">Join The Community</h2>
      <p class="meka-join__description">
        MekaVerse Discord already has over 200,000 members! If you want to join
        the #MEKAGANG it’s here. Join us to get the news as soon as possible and
        follow our latest announcements.
      </p>
      <div class="meka-join__join-btn">
        <a
          href="https://discord.com/invite/mekaverse"
          _target="blank"
          rel="noopener"
        >
          Join our Discord
        </a>
      </div>
    </div>

    <div class="meka-img" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** MekaJoin Component */
export default class MekaJoin extends Vue {}
</script>

<style lang="scss">
.meka-join-the-community {
  position: relative;
  background: url('./sky.jpeg') no-repeat;
  background-size: cover;
  overflow: hidden;

  .meka-join {
    padding: rem(100) rem(60) !important;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: $global__font-family;

    @media only screen and (max-width: 670px) {
      align-items: center;
    }

    .meka-join__title {
      font-family: inherit;
      text-align: left;
      color: $global__color--black-light;
      width: 55.55%;
      margin-bottom: rem(25);
      margin-top: 0;
      font-size: rem(50);
      font-weight: 700;

      @media only screen and (max-width: 780px) {
        width: 100%;
      }

      @media only screen and (max-width: 670px) {
        text-align: center;
      }
    }

    .meka-join__description {
      font-family: inherit;
      text-align: left;
      width: 44.44%;
      margin: 0 0 rem(50);
      color: $global__color--blue-secondary;
      font-size: rem(18);
      font-weight: 400;
      line-height: rem(32);

      @media only screen and (max-width: 670px) {
        width: 100%;
        text-align: center;
      }
    }

    .meka-join__join-btn {
      transition: all 0.3s ease-in-out;

      a {
        padding: rem(16) rem(30);
        background: $global__color--blue-main;
        color: $global__color--white;
        text-decoration: none;
        font-size: rem(18);
        font-weight: 700;

        &:hover {
          background: $global__color--blue-main--light;
        }
      }
    }
  }

  .meka-img {
    width: rem(580);
    height: rem(427);
    position: absolute;
    background: url('/meka_blue.png') no-repeat;
    background-size: cover;
    bottom: 0;
    right: 0;

    @media only screen and (max-width: 1200px) {
      width: rem(440);
      height: rem(370);
    }

    @media only screen and (max-width: 780px) {
      width: rem(280);
      height: rem(290);
    }

    @media only screen and (max-width: 670px) {
      display: none;
    }
  }
}
</style>
