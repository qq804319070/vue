<template>
    <div>
      <router-link to="/home">
        首页
      </router-link>
      <router-link to="/list">
        列表页
      </router-link>

    </div>
</template>

<script>

    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
  div {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 100px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }
</style>
