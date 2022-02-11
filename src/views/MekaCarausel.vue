<template>
  <section
    class="meka-carausel js-flickity"
    data-flickity='{ "wrapAround": true, "autoPlay": 2500, "prevNextButtons": false }'
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

  styleObject = (url): any => {
    console.log(url);
    return {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
    };
  };
}
</script>

<style lang="scss">
.meka-carausel {
  color: $global__color--white;
  background: $global__color--black;
  padding: 100px 0;

  @media only screen and (max-width: 780px) {
    padding: 50px 0;
  }

  .meka-carausel__item {
    width: 40vw;
    max-width: 500px;
    margin-right: 35px;

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
    margin-top: 10px;

    .dot {
      width: 30px;
      border-radius: 10px;
      height: 5px;
      opacity: 0.5;
    }
  }
}
</style>
