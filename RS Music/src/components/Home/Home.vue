<template>
  <div id="container">
    <headers></headers>
    <carousel></carousel>
    <singers></singers>
    <songsheet></songsheet>
    <newsong></newsong>
    <rank></rank>
    <footers></footers>
  </div>
</template>
<script>
import Carousel from "../Carousel/Carousel.vue";
import Songsheet from "../Songsheet/Songsheet.vue";
import Rank from "../Rank/Rank.vue"
import Newsong from "../Newsong/Newsong.vue"
import Singers from "../Singers/Singers.vue"
import Headers from "../Headers/Headers.vue"
import Footers from "../Footers/Footers.vue"
export default {
  data() {
    return {};
  },
  components: {
    carousel: Carousel,
    rank: Rank,
    songsheet:Songsheet,
    newsong:Newsong,
    singers:Singers,
    headers:Headers,
    footers:Footers
  }
};
</script>
<style scoped>

</style>