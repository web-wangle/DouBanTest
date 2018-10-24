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
      time: '',
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
   this.getTime();
   this.getMovieData('hotMovie', this.time);
   this.getMovieData('freeMovie', this.time);
   this.getMovieData('newMovie', this.time);
  },
  methods: {
    getTime(){
      this.time = new Date().getTime();
    },
    getMovieData(movieType,time){
      const getFlag = time - localStorage.getItem('getMovieTime') > 10*60*1000 ? false : true;
      if(window.localStorage && getFlag && localStorage.getItem(movieType)){
        this[movieType] = JSON.parse(localStorage.getItem(movieType));
      }else{
        movieUrl.get(movieType)
        .then((res) => {
          if(window.localStorage && res !== undefined){
            this[movieType] = res;
            localStorage.setItem(movieType,JSON.stringify(res));
            localStorage.setItem('getMovieTime',time);
          }
        })
      }
    }
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