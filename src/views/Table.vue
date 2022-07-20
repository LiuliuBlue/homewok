<template>
  <div class="home">
    <!-- checkbox index -->
    <liu-table :column="column" checkbox index></liu-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      column: [
        {
          label: '标题',
          prop: 'title',
          type: 'function',
          callback: (row) => {
            // 自定义渲染文本
            // return `<strong>${row.title}</strong>`
            return `<a href="https://www.baidu.com">${row.title}</a>`
          }
        },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' }
      ]
    }
  },
  components: {
    liuTable: () => import('../components/table/index.vue')
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
