<template>
  <div id="loginBox">
    <div class="icon">
      <div><label for="icon-username">Username  </label></div>
      <div><input type="text" id="icon-username" v-model="userName"></div>
    </div>
    <div class="icon">
      <div><label for="icon-password">Password  </label></div>
      <div><input type="password" id="icon-password" v-model="passWord"></div>
    </div>
    <div class="icon-sign">
      <div><button id="icon-sign-in" @click="signinPush()">Sign in</button></div>
      <div><button id="icon-sign-up" @click="signupPush()">Sign up</button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    signupPush () {
      this.$router.push('/signup')
    },
    signinPush () {
      var userData = JSON.parse(localStorage.getItem('userData'))
      if (userData) {
        if (userData.name === this.userName && userData.pwd === this.passWord) {
          this.$router.push('/home')
          alert('登陆成功！！')
        } else {
          // debugger
          alert('用户名或密码错误！！')
        }
      } else {
        alert('请先注册！！')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  div[id="loginBox"] {
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
  .icon {
    margin-top: 15px;
  }
  .icon-sign {
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
  button[id="icon-sign-up"] {
    @include icon-sign-normal
  }
</style>
