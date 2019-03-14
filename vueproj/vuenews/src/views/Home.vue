<template>
  <div id="home">
    <router-view />
    <ul class="footer">
      <li class="linkCol"><router-link :to="{name: 'list'}">添加事项</router-link></li>
      <li class="linkCol"><router-link :to="{name: 'user'}">个人中心</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  .footer {
    list-style: none;
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .linkCol {
    background: #FFF;
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #666;
    a {
      display: block;
      color: #666;
      text-decoration: none;
      &.active {
        color: #FFF;
        background: #666;
      }
    }
  }
</style>
