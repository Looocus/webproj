<template>
  <div class="TranslateResult">
    <p class="Resulttext">{{result}}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  props: ['result']
}
</script>

<style>
.TranslateResult {
	background-color: rgba(0,0,0,0.5);
  width: 45%;
  min-width: 300px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  font-size: 28px;
  box-sizing: border-box;
  resize: none;
}
</style>
