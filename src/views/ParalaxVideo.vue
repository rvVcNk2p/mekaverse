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
/** ParalaxVideo Component */
export default class ParalaxVideo extends Vue {
  translateY: Number = 0;
  currentTime: Number = 0;
  video: HTMLVideoElement = null;
  bound = null;

  setTranslateY(): void {
    this.translateY = window.scrollY / 2;
  }
  setCurrentTime(time: number): void {
    console.log('setCurrentTime: ', time);
    this.video.currentTime = time;
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
        // this.setCurrentTime(video.duration * percentScrolled);
      }
      // requestAnimationFrame(scrollVideo);
    };
    // requestAnimationFrame(scrollVideo);
    scrollVideo();
  };

  mounted(): void {
    window.addEventListener('scroll', this._onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll(): void {
    this.handleVideoScroll('#paralax-video', '#paralax-video video');
  }
}
</script>

<style lang="scss">
#paralax-video {
  height: 100%;
  // height: 1500px;
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
