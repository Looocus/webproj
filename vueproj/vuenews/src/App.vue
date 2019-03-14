<template>
  <div id="app">
    <div id="nav">
      <h1>备忘录Demo</h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
div[id="app"] {
  text-align: center;
  vertical-align: bottom;
  bottom: 0;
}
#nav {
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  background: #666;
}
</style>
