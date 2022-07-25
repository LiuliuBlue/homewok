<template>
  <liuForm :item="formItem" :field="formField" :rules="formRules"></liuForm>
</template>

<script>
// import { type } from 'os'

export default {
  name: 'Form',
  data() {
    return {
      formItem: [
        {
          label: '姓名',
          type: 'input',
          prop: 'name'
        },
        {
          label: '年龄',
          type: 'input',
          prop: 'password'
        }
      ],
      formField: {
        name: 'blue',
        password: '123'
      },
      formRules: {
        name: [
          {
            required: true,
            message: '必填'
          }
        ],
        password: [
          {
            required: true,
            maessae: '必填'
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {},
  components: {
    liuForm: () => import('../components/form/index.vue')
  }
}
</script>

<style lang="scss"></style>
