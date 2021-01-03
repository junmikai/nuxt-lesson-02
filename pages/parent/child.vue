<template>
  <div>
    <h2>childコンポーネントの文字</h2>
    <h3>parentから受け取った数字:{{foobar}}</h3>
  </div>
</template>

<script>

export default {
  transition: 'home',
  props: {
    foobar: {
      type: Number,
      Default:""
    },
  },
}
</script>

<style>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
