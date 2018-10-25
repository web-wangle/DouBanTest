<template>
  <div id="cardMain">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in cardMain" :key="index">
        <div class="cardBody">
          <img :src="item.imageUrl" alt="">
          <p>{{item.title}}</p>
          <van-rate v-model="item.score" :count="5" :size="10"></van-rate>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: '',
  props: {
    cardMain: Array
  },
 data() {
   return {
     swiperOption:{
       slidesPerView :'auto',
       spaceBetween : 8,
     },
   };
 },
 components: {
   swiper,
   swiperSlide
 },
};
</script>

<style scoped>
#cardMain{
  margin-top: 15px;
  margin-bottom: 30px;
}
.swiper-slide{
  display: flex;
  width: 100px;
}
.cardBody img{
  display: block;
  width: 100%;
  height: 140px;
}
.cardBody p{
  text-align: center;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
