<script setup lang="ts">
  import { useMainPage } from "./lib";

  const {
    isLoading,
    quizzesList,
  } = useMainPage();
</script>

<template>
  <div class="card">
    <p v-if="isLoading"> Загрузка... </p>
    <pre v-else> {{ quizzesList }} </pre>
  </div>
</template>
