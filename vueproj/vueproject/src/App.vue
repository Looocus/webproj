<template>
  <div id="app">
    <div id="imgdiv">
      <img src="./assets/logo.png"/>
    </div>
    <div id="teach">
      <p><strong>Submit输出TODOlist</strong><br></p>
      <p><strong>左键点击条目消除</strong><br></p>
    </div>
    <input v-model="msgtext" placeholder="message" />
    <button @click="handleMessage">Submit</button>
    <ul>
      <todoitem
      v-for="(item, index) of list"
      :key="index"
      :content="item"
      :index="index"
      @del="DeleteMsg"
      >
      </todoitem>
    </ul>
  </div>
</template>

<script>
import todoitem from './components/todoitem'

export default {
  data () {
    return {
      msgtext: '',
      list: []
    }
  },
  components: {
    todoitem
  },
  methods: {
    handleMessage () {
      this.list.push(this.msgtext)
      this.msgtext = ''
      document.getElementsByTagName('input')[0].focus()
    },
    DeleteMsg (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#imgdiv {
  width: 100%;
}
#teach {
  top: 60px;
  right: 60px;
  position: absolute;
  text-align: left;
}
ul {
  top: 1%;
  width: 50%;
  margin: 0 auto;
  position: relative;
}
</style>
