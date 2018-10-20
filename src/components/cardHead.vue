<template>
  <div id="cardHead">
    <p>{{cardHead.name}}</p>
    <a :href="cardHead.url">更多</a>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    cardHead: Object
  },
 data() {
   return {
   };
 },
};
</script>

<style scoped>
#cardHead{
  display: flex;
  justify-content: space-between;
}
#cardHead p{
  color: #111;
  font-size: 1.06rem;
}
#cardHead a{
  color: #42bd56;
}
</style>
