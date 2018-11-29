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
          <el-aside class="menu">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>系统配置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">数据字典</el-menu-item>
                  <el-menu-item index="1-2">数据字典</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>杂货铺</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">豆瓣租房</el-menu-item>
                  <el-menu-item index="1-2">数据字典</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>

          <el-main class="content">
            <dbzf></dbzf>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import dbzf from '../components/dbzf.vue';
export default {
    name: "index",
    components : {dbzf},
    data(){
      return{
        canDownload: false,
      }
    }
}
</script>

<style scoped>

</style>
