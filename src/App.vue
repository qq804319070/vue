<template>
  <div>
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>

  import Tab from "components/Tab.vue"

  export default {
    data() {
      return {}
    },
    components: {
      Tab
    }
  }
</script>

<style lang="less">

</style>
