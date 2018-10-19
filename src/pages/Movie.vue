<!-- 豆瓣电影板块 -->
<template>
  <div id="movie">
    {{movieData}}
  </div>
</template>

<script>
import {movieUrl} from '@/severAPI'

export default {
  name: '',
  data () {
    return {
      movieData: []
    };
  },
 created(){
   movieUrl.get('hotmovie')
   .then((res) => {
     this.movieData.push(res);
   })
  }
}

</script>
<style>
</style>