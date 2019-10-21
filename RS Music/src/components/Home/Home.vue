<template>
  <div id="container">
    <carousel></carousel>
    <songsheet></songsheet>
    <newsong></newsong>
    <rank></rank>
    <singers></singers>
  </div>
</template>
<script>
import Carousel from "../Carousel/Carousel.vue";
import Songsheet from "../Songsheet/Songsheet.vue";
import Rank from "../Rank/Rank.vue"
import Newsong from "../Newsong/Newsong.vue"
import Singers from "../Singers/Singers.vue"
export default {
  data() {
    return {};
  },
  components: {
    carousel: Carousel,
    rank: Rank,
    songsheet:Songsheet,
    newsong:Newsong,
    singers:Singers
  }
};
</script>
<style scoped>

</style>