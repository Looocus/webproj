<template>
  <transition name="slide-fade">
    <div id="signupBox" v-if="!show">
      <div class="signup">
        <div><label for="signup-username">Username  </label></div>
        <div><input type="text" id="signup-username" v-model="userName"></div>
      </div>
      <div class="signup">
        <div><label for="icon-password">Password  </label></div>
        <div><input type="password" id="icon-password" v-model="pwdOnce"></div>
      </div>
      <div class="signup">
        <div><label for="icon-password-twice">Confirmed Password  </label></div>
        <div><input type="password" id="icon-password-twice" v-model="pwdTwice"></div>
      </div>
      <div class="signup-check">
        <div><button id="icon-sign-in" @click="signUp()">Sign up</button></div>
      </div>
    </div>
  </transition>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'signup',
  store,
  mounted () {
    this.changeShow()
  },
  data () {
    return {
      pwdOnce: '',
      pwdTwice: '',
      userName: '',
      show: true,
      userData: ''
    }
  },
  methods: {
    signUp () {
      if (this.pwdOnce === this.pwdTwice && this.pwdOnce && this.pwdTwice && this.userName) {
        this.$http.get('/static/userData.json').then((res) => {
          res.data.name = this.userName
          res.data.pwd = this.pwdOnce
          this.userData = res.data
          localStorage.setItem('userData', JSON.stringify(this.userData))
        }).catch((err) => {
          console.log(err)
        })
        // var userData = { nick: 'Ultraman', name: this.userName, pwd: this.pwdOnce, imgUrl: [], message: [] }
        this.$router.push('/')
      } else {
        alert('用户名或密码校验不正确！！')
        this.pwdOnce = ''
        this.pwdTwice = ''
      }
    },
    changeShow () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="scss">
  /**********/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  /**********/
  div[id="signupBox"] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
  input {
    height: 20px;
    border: 1px solid #CCC;
    border-radius: 3px;
  }
  .signup {
    margin-top: 15px;
  }
  .signup-check {
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  @mixin icon-sign-normal {
    flex: 1;
    color: aliceblue;
    font-size: 15px;
    width: 60px;
    height: 30px;
    background: red;
    border-radius: 5px;
  }
  button[id="icon-sign-in"] {
  @include icon-sign-normal
  }
</style>
