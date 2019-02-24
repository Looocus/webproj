
<template>
  <div>
    <div id="bgstyle" @click="handelDelete"></div>
    <div id="txstyle">
      <li><strong>{{ content }}</strong></li>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Done'
    }
  },
  props: ['content', 'index'],
  methods: {
    handelDelete () {
      this.$emit('del', this.index)
      // alert(this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bgstyle {
  background-color: white;
  filter: blur(15px);
  filter: opacity(0.2);
  position: absolute;
  width: 50%;
  height: 20px;
  right: 25%;
}
#txstyle {
  font-size: 20px;
  width: 50%;
  margin: 0 auto;
  border-radius: 3px;
  display: block;
  text-align: left;
}
</style>
