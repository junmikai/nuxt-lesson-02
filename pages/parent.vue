<template>
  <div>
    <h1>parentコンポーネントの文字</h1>
    <NuxtLink to="/parent/child">childへ</NuxtLink>
    <NuxtLink to="/about">aboutへ</NuxtLink>
    <NuxtChild :foobar="123" />
  </div>
</template>
