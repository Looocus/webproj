<template>
  <div id="TranslateForm">
    <div class="Langoptions">
      <span class="Lang" @click="showlist">{{ Lang }}</span>
      <div class="Optionlist">
        <p v-for="(option, index) in Langlist" @click="chooseLang(index)">{{ option }}</p>
      </div>
      <input type="button" @click="translating" value="翻译">
    </div>
      <!--以下是输入表格-->
    <form class="Form">
      <textarea rows=8 class="Formtextarea" v-model="transtext" placeholder="输入需要翻译的文字" @keydown.enter="translating"></textarea>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      transtext: '',
      Lang: 'cn -> en',
      Langlist: ['cn -> en', 'cn -> jp', 'cn -> fra', 'cn -> ru'],
      language: 'en',
      language_options: ['en', 'jp', 'fra', 'ru']
    }
  },
  methods: {
    translating () {
      this.$emit("submitcontent", this.transtext, this.language)
    },

    //增加下拉动画
    showlist () {
      if ($(".Optionlist").css("display") == 'none') {
        $(".Optionlist").slideDown();
      }
      else {
        $(".Optionlist").slideUp();
      }
    },

    //选择语言
    chooseLang (index) {
      $(".Optionlist").slideUp();
      this.language = this.language_options[index];
      this.Lang = this.Langlist[index];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#TranslateForm {
  width: 45%;
  height: 80%;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.Langoptions {
  width: 100%;
  min-width: 300px;
  height: 40px;
  margin: 0 auto;
}
.Lang {
  width: 30%;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #666;
  font-size: 22px;
  cursor: pointer;
}
.Optionlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: none;
  z-index: 999;
}
.Optionlist p {
  display: inline-block;
  width: 45%;
  height: 30px;
  text-align: center;
  cursor: pointer;
}
input[type='button'] {
  display: inline-block;
  background-color: #e02433;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  box-sizing: border-box;
  cursor: pointer;
}
.Form {
  width: 100%;
  border-radius: 5px;
}
.Formtextarea {
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  min-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 28px;
  box-sizing: border-box;
  resize: none;
}
</style>