<template>
    <div id="dict">
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
      <el-dialog title="新增" :visible.sync="dialogFormVisible" width="300px">
        <el-form :model="form"  size="mini">
          <el-form-item >
            <el-input placeholder="类型" v-model="form.type" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="编码" v-model="form.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="名称" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  >
            <el-input placeholder="排序" v-model="form.sort" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  >
            <el-select v-model="form.status" placeholder="是否生效">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      name: "dict",
      data() {
        return {
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px'
        };
      }
    }
</script>

<style scoped>

</style>
