<template>
    <div id="index">
      <el-container class="wrapper">
        <el-header
          height="80px" :style="{ 'background-color': '#409eff' }">
          <img
            src="../assets/element-logo.svg"
            alt="element-logo"
            class="header-logo">

        </el-header>
        <el-container>
          <!--<el-aside class="menu" style="width: 200px">

          </el-aside>-->

          <el-menu
            default-active="1-2"
            class="el-menu-vertical-demo" :collapse="menu" @click="menuClick" style="min-height: 800px">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统配置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">数据字典</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>杂货铺</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">豆瓣租房</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-main class="content">
            <dict></dict>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import dbzf from '../components/dbzf.vue';
import dict from '../components/dict.vue';

export default {
    name: "index",
    components : {dbzf, dict},
    data(){
      return{
        canDownload: false,
        menu : false
      }
    },
    methods : {
      menuClick : function () {
        this.menu = !this.menu;
      }
    }
}
</script>

<style scoped>

</style>
