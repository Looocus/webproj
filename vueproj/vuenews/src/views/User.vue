<template>
  <div id="userBox">
    <router-view />
    <div id="thumbBox">
      <div class="Part left"><div id="thumbNail"><img src="../assets/logo.png" ref="selfieChange"></div><h1>{{ nickName }}</h1></div>
      <div class="Part right">
        <div id="nameNail">
          <el-row>
            <el-col :span="24"><el-button type="info" icon="el-icon-edit" @click="changeInfo()">编辑信息</el-button></el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'user',
  store,
  data () {
    return {
      nickName: JSON.parse(localStorage.getItem('userData')).nick
    }
  },
  mounted () {
    if (store.state.user_page_imgurl === '') {
      this.$refs.selfieChange.src = require('../assets/logo.png')
    } else {
      this.$refs.selfieChange.src = store.state.user_page_imgurl
    }
  },
  methods: {
    changeInfo () {
      this.$router.push('/home/user/info')
    }
  }
}
</script>

<style scoped lang="scss">
  #userBox {
    padding: 5px 10px;
    
    #thumbBox {
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
      height: 100px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;

      .Part {
        flex: 1;

        #thumbNail {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          border: 0.5px solid #CCC;
          position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -75%);
          overflow: hidden;

          img {
            height: 60px;
            width: 60px;
          }
        }

        #nameNail {
          width: 100%;
          position: relative;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }
</style>
