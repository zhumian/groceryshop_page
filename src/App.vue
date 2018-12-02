<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods : {

  },
  created : function () {
    this.$router.push("/index")
  }


}
</script>

<style>
#app {

}
body{
  margin: 0;
}

.el-form-item__label{
  color: white;
}
video{
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: auto;
}
</style>
