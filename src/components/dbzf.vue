<template>
  <div id="dbzf">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
      <el-form-item label="地区">
        <el-input  placeholder="地区"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input  placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-date-picker
          v-model="value6"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >查询</el-button>
      </el-form-item>
    </el-form>
    <data-tables-server :data="data"  :loading="loading" :total="total" @query-change="loadData" :page-size="pageSize" :pagination-props="{ background: true, pageSizes: [5, 10, 20] }"
      :highlight-current-row="true" >
      <el-table-column  label="标题">
        <template slot-scope="scope">
          <a :href="scope.row.url">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="publishTime" label="发布时间" width="200">
      </el-table-column>
    </data-tables-server>
  </div>
</template>

<script>
    export default {
        name: "dbzf",
      data() {
        return {
          data : [],
          total : null,
          titles : [
            {
              prop : "title",
              label : "标题",
              formatter : this.formatter
            },
            {
              prop : "publishTime",
              label : "发布时间",
              width : "200"
            }
          ],
          loading : false,
          currentPage : null,
          pageSize : 10,
          filters : [
            {
              value : "",
              filterFn: (row, filter) => {
                return Object.keys(row).some(prop => {
                  return "1"
                })
              }
            }
          ]
        }
      },
      methods : {
        loadData : function () {
            let v = this;
            let url = "/business/dbzf/list";
            this.$get(url).then((response) => {
              v.data = response.data;
            })
          },
        async loadData(queryInfo) {
          let v = this;
          let url = "/business/dbzf/list";
          let params = {
            start : queryInfo.page,
            size : queryInfo.pageSize
          };
          v.loading = true;
          this.$get(url, params).then((response) => {
            v.loading = false;
            v.data = response.data;
            v.total = response.total;
          })
        },
        formatter(row, column) {
          return "<a href='" + row.url + "'>" + row.title +"</a>";
        }
      },
      mounted : function () {
      }
    }
</script>

<style scoped>

</style>
