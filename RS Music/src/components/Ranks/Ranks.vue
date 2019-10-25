<template>
<div>
<headers></headers>
<ranking></ranking>
<comment></comment>
<footers></footers>
</div>
  
</template>
<script>
import Headers from "../Headers/Headers.vue"
import Footers from "../Footers/Footers.vue"
import Comment from '../Comment/Comment.vue'
import Ranking from '../Ranking/Ranking.vue'
export default { 
  data(){
    return {

    }
  },
  components:{
    ranking:Ranking,
    comment:Comment,
    headers:Headers,
    footers:Footers
  }
}
</script>
<style scoped>

</style>