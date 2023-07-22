<script setup lang="ts">
import { PropType } from "vue";
import { useRouter } from 'vue-router';

type QuizCard = { id: Number, title: String };

defineProps({
  quiz: Object as PropType<QuizCard>
});

const router = useRouter();

const openQuiz = (id) => {
  router.push({ name: 'quiz-page', query: { id } });
}
</script>

<template>
  <v-card :title="quiz.title" theme="dark" class="mb-5">
    <template #actions>
      <v-btn @click="openQuiz(quiz.id)" variant="text" color="#3CB371">Пройти квиз</v-btn>
    </template>
  </v-card>
</template>
