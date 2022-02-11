<template>
  <section
    class="meka-carausel js-flickity"
    data-flickity='{ "wrapAround": true, "autoPlay": 2500, "prevNextButtons": false, "imagesLoaded": true }'
  >
    <div v-for="id in carauselImages" :key="id" class="meka-carausel__item">
      <img :src="'/meka_' + id + '.jpeg'" class="meka-carausel__item__img" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** MekaCarausel Component */
export default class MekaCarausel extends Vue {
  carauselImages: Array<Number> = [];

  mounted(): void {
    const flickityScript = document.createElement('script');
    flickityScript.setAttribute(
      'src',
      'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'
    );
    document.head.appendChild(flickityScript);

    Vue.set(this, 'carauselImages', [...Array(9).keys()]);
  }
}
</script>

<style lang="scss">
.meka-carausel {
  color: $global__color--white;
  background: $global__color--black;
  padding: rem(100) 0;

  @media only screen and (max-width: 780px) {
    padding: rem(50) 0;
    padding-bottom: rem(150);
  }

  .meka-carausel__item {
    width: 50vw;
    max-width: rem(500);
    margin-right: rem(35);

    .meka-carausel__item__img {
      width: 100%;
      transform: scale(0.9);
      height: auto;
      transition: all 0.5s ease-in-out;
    }

    &.is-selected {
      .meka-carausel__item__img {
        transform: translateX(0px);
      }
    }
  }

  .flickity-page-dots {
    position: relative;
    margin-top: rem(10);

    .dot {
      width: rem(30);
      border-radius: 0;
      height: rem(3);
      opacity: 0.5;
      background: $global__color--make-blue;

      @media only screen and (max-width: 780px) {
        width: rem(20);
      }

      &.is-selected {
        background: $global__color--white;
      }
    }
  }
}
</style>
