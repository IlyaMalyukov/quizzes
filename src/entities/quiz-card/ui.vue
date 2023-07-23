<script setup lang="ts">
import type { PropType } from 'vue';

type QuizCard = { id: Number, title: String };

defineProps({
  quiz: Object as PropType<QuizCard>
});
</script>

<template>
  <div class="card">
    <h3 class="card__title"> {{ quiz.title }} </h3>
    <router-link :to="{ name: 'quiz-page', query: { id: quiz.id } }">
      <v-btn variant="text" color="#3CB371">Пройти квиз</v-btn>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 15px 18px 5px -5px rgba(34, 34, 34, 0.6);
  border: 2px solid #222;
  border-radius: 5px;
  margin-bottom: 30px;
}

.card__title {
  padding-bottom: 30px;
}
</style>
