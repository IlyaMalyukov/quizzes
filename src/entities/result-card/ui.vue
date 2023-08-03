<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import type { Result } from './lib/types';

defineProps({
  result: Object as PropType<Result>,
});
</script>

<template>
  <div class="card">
    <h3> {{ result?.value }} </h3>
    <img :src="result.img" alt="img"/>
    <router-link to="/">
      <button> Назад </button>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  margin: 10px 0;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 15px 18px 5px -5px rgba(34, 34, 34, 0.6);
}
</style>
