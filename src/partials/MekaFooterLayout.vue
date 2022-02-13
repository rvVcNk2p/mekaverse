<template>
  <div class="meka-footer-layout">
    <JoinTheCommunity />
    <!-- <MekaFooter /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import JoinTheCommunity from './MekaJoin.vue';
import MekaFooter from './MekaFooter.vue';

@Component({
  components: {
    JoinTheCommunity,
    MekaFooter,
  },
})
/** MekaFooterLayout Component */
export default class MekaFooterLayout extends Vue {}
</script>

<style>
.meka-footer-layout {
}
</style>
