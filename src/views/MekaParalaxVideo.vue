<template>
  <div
    id="paralax-video"
    class="scroll-bound"
    :style="{ transform: 'translateY(' + translateY + 'px)' }"
  >
    <video id="hero-video" width="100%" preload>
      <source src="../assets/videos/hero_mn.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** MekaParalaxVideo Component */
export default class ParalaxVideo extends Vue {
  translateY: Number = 0;
  currentTime: Number = 0;
  video: HTMLVideoElement = null;
  bound = null;

  setTranslateY(): void {
    this.translateY = window.scrollY / 2;
  }

  handleVideoScroll = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);
    const scrollVideo = () => {
      if (video.duration) {
        const distanceFromTop =
          window.scrollY + bound.getBoundingClientRect().top;
        let rawPercentScrolled =
          (window.scrollY - distanceFromTop) /
          (bound.scrollHeight - window.innerHeight);

        rawPercentScrolled = (rawPercentScrolled * -1) / 15;
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

        this.setTranslateY();

        video.currentTime = video.duration * percentScrolled;
      }
    };
    scrollVideo();
  };

  mounted(): void {
    if (window.innerWidth > 780) {
      window.addEventListener('scroll', this._onScroll);
    }
  }

  beforeDestroy(): void {
    if (window.innerWidth > 780) {
      window.removeEventListener('scroll', this._onScroll);
    }
  }

  _onScroll(): void {
    this.handleVideoScroll('#paralax-video', '#paralax-video video');
  }
}
</script>

<style lang="scss">
#paralax-video {
  height: 100%;
  @media only screen and (max-width: 780px) {
    display: none;
  }
}

#hero-video {
  width: 100%;
  height: 90vh;
  -o-object-fit: cover;
  object-fit: cover;
  bottom: 0;

  @media only screen and (max-width: 780px) {
    height: 100vh;
  }

  @media only screen and (max-width: 500px) {
    height: rem(500);
  }
}
</style>
