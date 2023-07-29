<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import type { Result } from './lib/types';

defineProps({
  result: Object as PropType<Result>,
  points: Number,
});
</script>

<template>
  <div class="card">
    <h3> {{ result?.value }} </h3>
    <p> Набрано очков: {{ points }} </p>
  </div>
</template>
