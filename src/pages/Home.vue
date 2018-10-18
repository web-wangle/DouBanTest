<template>
  <div id="home">
    <div class="home_tag">
      <ul>
        <li><a href="https://m.douban.com/movie/nowintheater?loc_id=108288">影院热映</a></li>
        <li><a href="https://shiji.douban.com/campaign/calendar2018/?utm_campaign=home_market&utm_source=douban&utm_medium=mobile_web">豆瓣日历</a></li>
        <li><a href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a></li>
        <li><a href="https://www.douban.com/doubanapp/frodo?channel=card_home&direct_dl=1&wechat=0&os=Windows">使用豆瓣App</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
 data() {
   return {
   };
 },
};
</script>

<style scoped>
#home{
  padding: 0px 19px;
}
.home_tag ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.home_tag ul li{
  width: 50%;
  padding: 3px;
  height: 2.933333rem;
  box-sizing: border-box;
}
.home_tag ul li a{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: center;
  color: #494949;
}
</style>
