<script setup lang="ts">
  import { useMainPage } from "./lib";
  import { axios } from '../../shared';

  const { count } = useMainPage();

  axios({
    method: 'GET',
    url: '/quizzes',
  })
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
