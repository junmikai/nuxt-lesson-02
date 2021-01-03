<template>
  <div>
    <NuxtMountains />
  </div>
</template>
<script>
import NuxtMountains from '@/components/NuxtMountains'
  export default {
    components:{
      NuxtMountains
    },
    layout: 'about',
    mounted() {
    // 描画が完了してから処理を行う
    this.$nextTick(() => {
      // プログレスバーを表示
      this.$nuxt.$loading.start()
      // ローディングが終わってから0.5秒間はプログレスバーを表示させる
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
  }
</script>
