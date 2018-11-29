<template>
  <div id="login">
    <video autoplay loop muted>
      <source src="../media/star.mp4">
    </video>

    <el-row :gutter="24" style="margin-top: 150px">
      <el-col :span="8" :offset="8">
        <el-card class="box-card" style="background: 10px;border: 1px solid;">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
              <el-button >注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>

      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods : {
      login : function () {
        this.$router.push("/index");
      }
    }



  }
</script>

<style scoped>
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
