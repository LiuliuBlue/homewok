<template>
  <el-form ref="form" :model="field" :rules="rules" label-width="80px">
    <el-form-item
      v-for="item in item"
      :key="item.label"
      :label="item.label"
      :prop="item.prop"
    >
      <el-input v-model="field[item.prop]"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'liuForm',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss"></style>
