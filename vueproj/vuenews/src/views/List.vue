<template>
  <div id="listBox">
    <div id="inputBox">
      <el-input id="todoItem" v-model="todoItem" placeholder="Something You dont want to delay" clearable></el-input>
    </div>
    <div id="todoBox">
      <el-container v-for="(msg, index) in msgList" :key="index"><el-main @click.native="showChosen(index)" :class="{active: current.indexOf(index) !== -1}">{{ msg }}</el-main></el-container>
    </div>
    <div id="addsubBox">
      <div id="subIcon">
        <el-button type="warning" icon="el-icon-minus" @click="msgListdel()"></el-button>
      </div>
      <div id="addIcon">
        <el-button type="primary" icon="el-icon-plus" @click="msgListpush()"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  mounted () {
    this.calHeight()
    this.addMsglist()
  },
  data () {
    return {
      todoItem: '',
      userData: JSON.parse(localStorage.getItem('userData')),
      msgList: [],
      current: []
    }
  },
  methods: {
    addMsglist () {
      this.msgList = []
      var _this = this
      this.userData.message.forEach(function (value, index) {
        _this.msgList.push(value.text)
      })
    },
    calHeight () {
      document.getElementById('todoBox').style.height = (window.innerHeight - 140) + 'px'
    },
    msgListpush () {
      if (this.todoItem !== '') {
        this.userData.message.push({ text: this.todoItem })
        this.addMsglist()
        localStorage.setItem('userData', JSON.stringify(this.userData))
        this.todoItem = ''
      } else {
        alert('不可添加空内容！！')
      }
      // debugger
    },
    showChosen (index) { // 使用element时，要用@click.native
      var curr = this.current
      if (curr.indexOf(index) !== -1 && curr.length > 1) {
        // debugger
        curr.splice(curr.indexOf(index), 1)
      } else if (curr.indexOf(index) === 0 && curr.length === 1) {
        console.log(curr.indexOf(index) === 0 && curr.length === 1)
        console.log(curr)
        curr.splice(0, 1)
      } else {
        // debugger
        curr.push(index)
      }
    },
    msgListdel () {
      var _this = this
      // 倒序排列index，防止出现index错乱问题
      this.current.sort(function (a, b) { return b - a }).forEach(function (value, index) { _this.userData.message.splice(value, 1) })
      localStorage.setItem('userData', JSON.stringify(this.userData))
      this.addMsglist()
      this.current = []
    }
  }
}
</script>

<style scoped>
  .active {
    background: aquamarine;
    color: #FFF;
  }
  #listBox {
    padding: 5px 10px;
  }
  #addsubBox {
    display: flex;
    position: absolute;
    bottom: 80px;
    right: 0;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  #todoBox::-webkit-scrollbar { width: 0 !important } {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    overflow: scroll;
  }
  .el-container {
    cursor: pointer;
  }
  .el-button {
    margin-top: 15px;
  }
  .el-main {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    margin-top: 15px;
    line-height: 40px;
    text-align: center;
  }
</style>
