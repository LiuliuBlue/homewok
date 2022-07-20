<template>
  <div class="home">
    <!-- button 按钮 -->
    <liuButton>默认按钮</liuButton>
    <liuButton type="primary">成功按钮</liuButton>
    <liuButton type="danger">危险按钮</liuButton>
    <liuButton type="warning">警告按钮</liuButton>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      flag: false
    }
  },
  components: {
    liuButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit() {
      this.flag = true
      setTimeout(() => {
        console.log('666')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
