<!-- 豆瓣电影板块 -->
<template>
  <div id="movie">
    <div class="card1" v-if="Object.keys(hotMovie).length !== 0">
      <cardHead :cardHead="hotMovie"></cardHead>
      <cardMain :cardMain="hotMovie.main"></cardMain>
    </div>
    <div class="card2" v-if="Object.keys(freeMovie).length !== 0">
      <cardHead :cardHead="freeMovie"></cardHead>
      <cardMain :cardMain="freeMovie.main"></cardMain>
    </div>
    <div class="card3" v-if="Object.keys(newMovie).length !== 0">
      <cardHead :cardHead="newMovie"></cardHead>
      <cardMain :cardMain="newMovie.main"></cardMain>
    </div>
  </div>
</template>

<script>
import {movieUrl} from '@/severAPI'
import cardHead from '@/components/cardHead'
import cardMain from '@/components/cardMain'

export default {
  name: '',
  data () {
    return {
      hotMovie: {},
      freeMovie: {},
      newMovie: {}
    };
  },
  components: {
    cardHead: cardHead,
    cardMain: cardMain
  },
 created(){
   movieUrl.get('hotmovie')
   .then((res) => {
     this.hotMovie = res;
   });
   movieUrl.get('freemovie')
   .then((res) => {
     this.freeMovie = res;;
   });
   movieUrl.get('newmovie')
   .then((res) => {
     this.newMovie = res;;
   });
  }
}

</script>

<style scoped>
#movie{
  padding: 0px 19px;
}
.cardhead{
  display: flex;
  justify-content: space-between;
}
.cardhead a{
  color: #42bd56;
}
</style>