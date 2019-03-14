<template>
  <div id="infoBox">
    <el-container>
      <el-main>
        <el-row id="selfie">
          <el-col :span="12"><div id="selfieText">头像</div></el-col>
          <el-col :span="12"><div id="selfieBox" @click="maskShow=true"><img :src="url" alt="" ref="selfieChange"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <el-row id="selfie">
          <el-col :span="12"><div id="nickText">昵称</div></el-col>
          <el-col :span="12"><div id="nickBox"><el-input v-model="nickName"></el-input></div></el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-container id="btnContainer">
      <el-main>
        <el-row>
          <el-col :span="24" id="submitPush"><h1 @click="modifyPush()">保存修改</h1></el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-container v-show="maskShow">
      <el-main>
        <section id="maskOutter" @click="changeMask($event)">
          <div ref="mask" id="maskContent">
            <div v-for="(imgUrl, index) in imgUrls" :key="index">
              <img :src="imgUrl" alt="" @click="chooseImg(imgUrl)">
            </div>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'info',
  store,
  data () {
    return {
      nickName: JSON.parse(localStorage.getItem('userData')).nick,
      imgUrls: [],
      maskShow: false,
      url: require('../assets/logo.png'),
      urlTrans: store.state.user_page_imgurl
    }
  },
  mounted () {
    if (store.state.user_page_imgurl === '') {
      this.$refs.selfieChange.src = require('../assets/logo.png')
    } else {
      this.$refs.selfieChange.src = store.state.user_page_imgurl
    }
    this.copeImg()
    // console.log(typeof this.url)
  },
  methods: {
    modifyPush () {
      var userData = JSON.parse(localStorage.getItem('userData'))
      userData.nick = this.nickName
      localStorage.setItem('userData', JSON.stringify(userData))
      store.commit('recv_imgurl', this.urlTrans)
      this.$router.push('/home/user')
    },
    changeMask (ev) {
      if (!this.$refs.mask.contains(ev.target)) {
        this.maskShow = false
      }
    },
    chooseImg (url) {
      this.$refs.selfieChange.src = url
      this.urlTrans = url
      this.maskShow = false
    },
    copeImg () {
      var img = JSON.parse(localStorage.getItem('userData')).imgUrl
      var _this = this
      img.forEach(function (item, index) {
        _this.imgUrls.push(require('../assets/' + item.img))
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .el-container {
    padding: 5px 10px;
  }
  .el-main {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
  }
  #submitPush {
    cursor: pointer;
  }
  @mixin Box {
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    overflow: hidden;
  }
  #selfieText {
    @include Box;
    line-height: 60px;
    font-size: 30px;
  }
  #selfieBox {
    @include Box;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid #CCC;
    img {
      height: 60px;
      width: 60px;
    }
  }
  #nickText {
    @include Box;
    line-height: 60px;
    font-size: 30px;
  }
  #nickBox {
    .el-input {
      line-height: 60px;
      font-size: 25px;
    }
  }
  #btnContainer {
    height: 40px;
    .el-main {
      padding: 0;
      color: #FFF;
      line-height: 30px;
      background: #E66;
    }
  }
  #maskOutter {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 101;
    #maskContent {
      height: 70%;
      width: 80%;
      border-radius: 10px;
      border: 1px solid #CCC;
      background: aliceblue;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: space-between;
      div {
        height: 60px;
        width: 60px;
        overflow: hidden;
        border-radius: 50%;
        margin: 20px;
        img {
          height: 60px;
          width: 60px;
        }
      }
    }
  }
</style>
