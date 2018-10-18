<!-- 豆瓣电影板块 -->
<template>
  <div id="movie">
    {{movieData}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data () {
    return {
      movieData: []
    };
  },
  created(){
  }
}

</script>
<style>
</style>