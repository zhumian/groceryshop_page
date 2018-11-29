<template>
  <el-table :data="tableData" stripe style="width: 100%;overflow: auto">
    <el-table-column prop="title" label="标题"  />
    <el-table-column prop="publishTime" label="发布时间"  />
  </el-table>
</template>

<script>
    export default {
        name: "dbzf",
      data() {
        return {
          tableData : null
        }
      },
      methods : {
          loadTable : function () {
            var v = this;
            let url = "/business/dbzf/list";
            this.$get(url).then((response) => {
              v.tableData = response.data;
            })
          }
      },
      mounted : function () {
        this.loadTable();
      }
    }
</script>

<style scoped>

</style>
