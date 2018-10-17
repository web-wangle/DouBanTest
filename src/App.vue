<template>
  <div id="app">
    <dbHead></dbHead>
    <router-view/>
  </div>
</template>

<script>
import dbHead from '@/components/head'

export default {
  name: 'App',
  data() {
   return {
   };
 },
  components: {
    dbHead: dbHead,
  }
}
</script>

<style>
</style>
