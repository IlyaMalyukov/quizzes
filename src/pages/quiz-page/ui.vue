<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { QuestionCard } from '@/widgets';
import { getQuizDataAgent } from './api';

const route = useRoute();

const agent = getQuizDataAgent();

const quizId = route.query.id;

const quiz = ref({});

const currentQuestion = ref(0);

onMounted(async () => {
  quiz.value = await agent.getQuizById(quizId);
})
</script>

<template>
  <div v-for="(question, index) in quiz.questions" :key="question.id">
    <div v-if="index === currentQuestion">
      <h1> {{ quiz.title }} </h1>
      <question-card
        :question="question"
      />
    </div>
  </div>
</template>
