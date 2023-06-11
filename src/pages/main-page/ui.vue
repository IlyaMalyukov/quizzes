<script setup lang="ts">
  import { useMainPage } from "./lib";

  const { count } = useMainPage();
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
