<template>
  <div id="app">
    <!--
    <button @click="submittxt"></button>
    -->
    <Forms @submitcontent="getText"></Forms>
    <Result :result="translated"></Result>
  </div>
</template>

<script>
import Forms from './components/Forms'
import Result from './components/Result'
import {MD5} from './js/md5.js'

export default {
  name: 'App',
  components: {
    Forms,
    Result
  },
  data () { 
    return {
      translating: '',
      language: '',
      translated: '',
    }
  },
  methods: {
    getText (text, lang) {
      if(!text){
        return {}
      }
      this.translating = text;
      this.language = lang;
      //API数据; appid/key申请百度翻译APi
      var appid = '20190227000271716'; //百度翻译appid
      var key = 'NW5B16jGIrSbfKscHq1Y'; //百度翻译key
      var salt = (new Date).getTime();
      var query = this.translating;
      var from = 'zh';
      var to = this.language;
      var string = appid + query + salt + key;
      var sign = MD5(string);
      this.$http.jsonp("http://api.fanyi.baidu.com/api/trans/vip/translate?q=" + query + "&from=" + from + "&to=" + to + "&appid=" + appid + "&salt=" + salt + "&sign=" + sign, {}, 
        {headers: {}, emulateJSON: true})
        .then(function(response) {
          this.translated = response.body.trans_result[0].dst;
        });
    },
    //测试接口地址
    // submittxt () {
    //   var appid = '20190227000271716';
    //   var key = 'NW5B16jGIrSbfKscHq1Y';
    //   var salt = (new Date).getTime();
    //   var query = '你是谁';
    //   var from = 'zh';
    //   var to = 'en';
    //   var string = appid + query + salt + key;
    //   var sign = MD5(string);
    //   var https = "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" + query + "&from=" + from + "&to=" + to + "&appid=" + appid + "&salt=" + salt + "&sign=" + sign;
    //   console.log(https);
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
