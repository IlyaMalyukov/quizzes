<script setup lang="ts">
import { PropType } from 'vue';

type QuizCard = { id: Number, title: String };

defineProps({
  quiz: Object as PropType<QuizCard>
});
</script>

<template>
  <v-card :title="quiz.title" theme="dark" class="mb-5">
    <template #actions>
      <router-link :to="{ name: 'quiz-page', query: { id: quiz.id } }">
        <v-btn variant="text" color="#3CB371">Пройти квиз</v-btn>
      </router-link>
    </template>
  </v-card>
</template>
