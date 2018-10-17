<template>
  <div id="db_head">
    <van-row>
      <van-col span="9"><a href="/" class="head_img"></a></van-col>
      <van-col span="3"><router-link to="/movie" style="color: rgb(35, 132, 232);">电影</router-link></van-col>
      <van-col span="3"><router-link to="/book" style="color: rgb(159, 120, 96);">图书</router-link></van-col>
      <van-col span="3"><router-link to="/status" style="color: rgb(228, 168, 19);">广播</router-link></van-col>
      <van-col span="3"><router-link to="/group" style="color: rgb(42, 184, 204);">小组</router-link></van-col>
      <van-col span="3"><div class="search"></div></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'dbHead',
 data() {
   return {
   };
 },
};
</script>

<style scoped>
#db_head{
  padding: 0px 19px;
  border-bottom: 1px solid #f3f3f3;
}
.van-col{
  display: flex;
  align-items: center;
  height: 46px;
}
.van-col--3{
  justify-content: center;
}
.head_img{
  width: 46px;
  height: 22px;
  background: url('~@/assets/images/db_head.png') center no-repeat;
  background-size: cover;
}
.search{
  position: relative;
  top: 2px;
  width: 25px;
  height: 18px;
  background: url('~@/assets/images/search.png') center no-repeat;
  background-size: cover;
}
</style>
