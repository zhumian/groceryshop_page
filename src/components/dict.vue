<template>
    <div id="dict">

      <el-form :inline="true" :model="queryForm" class="demo-form-inline" size="mini">
        <el-form-item label="编码">
          <el-input  placeholder="编码"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input  placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input  placeholder="类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button type="success" @click="dialogVisible = true;dialogTitle = '新增'">新增</el-button>
        </el-form-item>
      </el-form>
      <data-tables-server :data="data"  :loading="loading" :total="total" @query-change="loadData" :page-size="pageSize" :table-props="tableProps"
                          :pagination-props="{ background: true,  pageSizes: [5, 10, 20] }"
                          @row-dblclick="rowDbClick" >
        <el-table-column  label="编码" prop="code" width="150"/>
        <el-table-column  label="名称" prop="value" />
        <el-table-column  label="类型" prop="type" width="200"/>
        <el-table-column  label="说明" prop="remark"/>
        <el-table-column  label="状态" prop="statusName" width="100"/>
      </data-tables-server>


      <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="300px" @close="form = {}">
        <el-form :model="form"  size="mini">
          <el-form-item >
            <el-input placeholder="类型" v-model="form.type" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="编码" v-model="form.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="名称" v-model="form.value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="说明" v-model="form.remark" autocomplete="off"></el-input>
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
          <el-button type="primary" @click="saveOrUpdate">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { Loading } from 'element-ui';

  export default {
      name: "dict",
      data() {
        return {
          form: {},
          queryForm : {},
          loading : false,
          data : [],
          total : null,
          pageSize : 10,
          dialogTitle : "新增",
          dialogVisible :false,
          tableProps : {
            border: true,
            highlightCurrentRow :true,
            currentChange : this.currentChange,
          },
          queryInfo : {}
        };
      },
      methods : {
        saveOrUpdate : function () {
          let v = this;
          let params = v.form;
          let loading = Loading.service();
          let url = "/system/dict/saveOrUpdate";
          this.$post(url, params).then((response) => {
            loading.close();
            let type = "error";
            if(response.success){
              v.dialogVisible = false;
              v.loadData(v.queryInfo);
              type = "success";
            }
            this.$notify({
              title: '提示',
              message: response.msg,
              type : type
            });
          })
        },
        async loadData(queryInfo) {
          let v = this;
          v.queryInfo = queryInfo;
          let url = "/system/dict/pageList";
          let params = {
            page : queryInfo.page,
            size : queryInfo.pageSize
          };
          v.loading = true;
          this.$get(url, params).then((response) => {
            v.loading = false;
            v.data = response.data;
            v.total = response.total;
          })
        },
        rowDbClick : function (row, event) {
          let v = this;
          v.form = row;
          v.dialogTitle = "编辑";
          v.dialogVisible = true;
        }
      }
    }
</script>

<style scoped>

</style>
