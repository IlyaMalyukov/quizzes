<script setup lang="ts">
import { PropType } from "vue";

type QuizCard = { id: Number, title: String };

defineProps({
  quiz: Object as PropType<QuizCard>
});
</script>

<template>
  <div class="quiz-card">
    <pre> 111 </pre>
    <span class="quiz-card__title"> {{ quiz.title }} </span>
  </div>
</template>
