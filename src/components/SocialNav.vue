<template>
  <div class="socialnav row">
    <MekaSvgButton :href="twitterLink" svg-name="twitter" />
    <MekaSvgButton :href="discordLink" svg-name="discord" />
    <MekaTextButton :text="metamaskAddress" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MekaSvgButton from './utils/MekaSvgButton.vue';
import MekaTextButton from './utils/MekaTextButton.vue';

@Component({
  components: {
    MekaSvgButton,
    MekaTextButton,
  },
})
/** SocialNav Component */
export default class SocialNav extends Vue {
  twitterLink: String = 'https://twitter.com/MekaVerse';
  discordLink: String = 'https://discord.com/invite/mekaverse';
  metamaskAddress: String = '0xa824...e247';
}
</script>
