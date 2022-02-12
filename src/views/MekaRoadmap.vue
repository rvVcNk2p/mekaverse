<template>
  <section class="meka-roadmap container">
    <h2 class="meka-roadmap__title">Roadmap</h2>
    <p class="meka-roadmap__description">
      This roadmap outlines our goals and where we want to take MekaVerse. We
      have a lot of ideas and concepts that we are working on. It may evolve
      over time and hopefully become even better!
    </p>

    <div class="meka-roadmap__content">
      <div class="meka-roadmap__timeline">
        <div class="meka-roadmap__line">
          <div class="meka-roadmap__progression" />
        </div>
        <!-- Step .01 -->
        <timeline-step step=".01" title="Launch Roadmap">
          <span class="bold">
            Quality comes first. The goal is to make our first drop as cool as
            possible
          </span>
          so we can have freedom to develop the universe. We're still working on
          a number of rarity criteria, as well as a lot of new Lore concepts.
          <span class="bold">
            The drop release date will be announced as soon as the project's
            quality and technical aspects are fully progressed.
          </span>
          We also need to work hard with our community to make Discord and
          Twitter even cooler with new additions throughout time.
        </timeline-step>
        <!-- Step .02 -->
        <timeline-step step=".02" title="Physical Part">
          <span class="bold">
            Mekas have a huge potential as physical creations.
          </span>
          We are passionate about 3D printing and want to bring our concept to
          life with high-quality materials. After several talks with famous art
          toys makers, we are currently working on some concepts but wait, let’s
          keep a little mystery for the moment!
          <span class="bold">
            We also aim to create clothing and merchandise using high-quality
            materials and textiles with eco-friendly fabrics.
          </span>
          Also, Matt. B would love to explore a new and ambitious 3D Art
          Direction about streetwear and fashion in general. By following our
          design principles, we will do everything possible to create something
          amazing before, during, and after the launch of the first Drop!
        </timeline-step>
        <!-- Step .03 -->
        <timeline-step step=".03" title="MekaVerse x Artists">
          We know a lot of artists in the NFT community and beyond!
          <span class="bold">
            We'd like to develop a series in which each Meka is made in
            collaboration with artists we like and under their artistic
            direction.
          </span>
          We would create a small collection of 1/1 unique Mekas by artists,
          with all proceeds going to them! This collection is incredibly
          important to us, and we are excited to see what we can accomplish
          together!
        </timeline-step>
        <!-- Step .04 -->
        <timeline-step step=".04" title="Meka Multiverse">
          After presenting our original Mekas, we want to explore
          <span class="bold">
            more abstract subjects in order to present a second, very distinct
            drop.
          </span>
          Our aim is simply to aesthetically enlarge the universe, and each
          relationship between the Meka Dimensions will be described and
          explained. We truly want to blend artistic disciplines, as well as
          move beyond our graphic style and look outside our comfort zone. We
          also want to see if it would be possible to
          <span class="bold">collaborate with famous mecha licenses</span>
          on future releases. That would be incredible!
        </timeline-step>
        <!-- Step .05 -->
        <timeline-step step=".05" title="Future of Mekas">
          When all of these stages are completed,
          <span class="bold">
            we’ll take care of maintaining the Meka Universe
          </span>
          . We both come from the design industry, and we are truly passionate
          about Art, Short films, Physical and Digital Exploration, and we would
          like to explore even more, with the desire to always make events more
          impressive and ambitious. We are counting on your support! We look
          forward to seeing what happens in the future! Love from Mekas
          <span class="bold">♥</span>
        </timeline-step>
      </div>

      <div class="meka-roadmap___video-container">
        <video
          id="roadmap-video"
          tabindex="0"
          preload
          playsinline
          :style="{ transform: 'translateY(' + translateY + 'px)' }"
        >
          <source src="/helmet.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimelineStep from '../components/roadmap/TimelineStep.vue';

@Component({
  components: {
    TimelineStep,
  },
})
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
    this.handleVideoScroll('.meka-roadmap', '#roadmap-video');
  }
}
</script>

<style lang="scss">
.meka-roadmap {
  font-family: $global__font-family;
  width: 100vw;
  background: $global__color--black;
  padding: 0 !important;
  margin: rem(50) auto 0 auto;

  .meka-roadmap__title,
  .meka-roadmap__description {
    width: 55.55%;
    text-align: center;
    margin-left: 11.11%;
  }

  .meka-roadmap__title {
    font-family: inherit;
    font-size: rem(46);
    font-weight: 700;
    line-height: rem(54);
    color: $global__color--white;
    margin: 0 auto rem(35) auto;
  }

  .meka-roadmap__description {
    margin: 0 auto;
    font-family: inherit;
    font-size: rem(18);
    font-weight: 400;
    line-height: rem(32);
    color: $global__color--make-blue-secondary;

    @media only screen and (max-width: 1200px) {
      width: 85%;
    }
  }

  .meka-roadmap__content {
    display: flex;
    position: relative;

    .meka-roadmap__timeline {
      position: relative;
      align-items: center;
      width: 77.77%;
      margin: rem(80) 0;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 1200px) {
        width: 85%;
        margin: 0 auto;
        margin-top: rem(100);
      }

      .meka-roadmap__line {
        position: absolute;
        width: rem(1);
        height: 100%;
        background: hsla(0, 0%, 100%, 0.4);
        left: rem(82);

        .meka-roadmap__progression {
          background: linear-gradient(
            180deg,
            #ff79a8,
            $global__color--make-pink-dark 49%
          );
          width: rem(3);
          height: rem(180);
          margin-left: -1px;
        }
      }

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
    }

    .meka-roadmap___video-container {
      position: absolute;
      left: 80%;
      top: -250px;
      margin: 0;
      box-sizing: inherit;

      @media only screen and (max-width: 1200px) {
        display: none;
      }

      video {
        width: 700px;
      }
    }
  }
}
</style>
