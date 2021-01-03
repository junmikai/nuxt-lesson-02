<template>
  <!-- 読み込み中の処理($fetchState.pending) -->
  <p v-if="$fetchState.pending">Fetching mountains...</p>

  <!-- API取得できなかった時のエラー($fetchState.error) -->
  <p v-else-if="$fetchState.error">An error occured :(</p>

  <!-- それ以外(APIを読み込んだ時) -->
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains" :key="mountain">{{ mountain.title }}</li>
    </ul>
    <!-- APIを更新する -->
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/posts'
      ).then(res => res.json());
    },
    fetchOnServer: false
  }
</script>
