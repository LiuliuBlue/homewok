<template>
  <div>
    <!-- 表格主体 -->
    <el-table :data="tableData" style="width: 100%">
      <!-- 索引 -->
      <el-table-column v-if="index" label="序号" type="index" width="55">
      </el-table-column>
      <!-- 复选框 -->
      <el-table-column v-if="checkbox" type="selection" width="55">
      </el-table-column>
      <template v-for="(item, index) in column">
        <el-table-column
          v-if="item.type === 'function'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <template v-slot="scope">
            <!-- {{ scope.row }} -->
            <div v-html="item.callback && item.callback(scope.row)"></div>
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :key="index"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data() {
    return {
      tableData: [
        {
          title: 'wxj',
          date: '2016-05-02',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 号 <div>123546</div>',
          sex: '男'
        },
        {
          title: 'wxj',
          date: '2016-05-04',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 号',
          sex: '男'
        },
        {
          title: 'wxj',
          date: '2016-05-01',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 号',
          sex: '男'
        },
        {
          title: 'wxj',
          date: '2016-05-03',
          name: '赵六',
          address: '上海市普陀区金沙江路 1516 号',
          sex: '男'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
