<template>
  <section class="meka-roadmap">
    <!-- style="transform: translateY(1573px)" -->
    <video
      id="roadmap-video"
      tabindex="0"
      preload
      playsinline
      :style="{ transform: 'translateY(' + translateY + 'px)' }"
    >
      <source src="/helmet.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** MekaPresentation Component */
export default class MekaPresentation extends Vue {
  translateY: number = 0;

  setTranslateY(newValue): void {
    this.translateY = newValue;
  }

  handleVideoScroll = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);

    const { height, top } = bound.getBoundingClientRect();
    if (top < 0 && top > -1 * height) {
      const percentage = (-1 * top * 100) / height;

      if (top * -1 < height / 2) {
        this.setTranslateY(-1 * top);

        const videoPercentage = ((percentage * video.duration) / 100) * 2;
        video.currentTime = videoPercentage;
      }
    }
  };

  mounted(): void {
    window.addEventListener('scroll', this._onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll(): void {
    this.handleVideoScroll('.meka-roadmap', '.meka-roadmap #roadmap-video');
  }
}
</script>

<style lang="scss">
.meka-roadmap {
  height: 200vh;
  width: 100vw;

  #roadmap-video {
    max-width: 80%;
  }
}
</style>
