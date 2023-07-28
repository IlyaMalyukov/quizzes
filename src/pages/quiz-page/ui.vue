<script setup lang="ts">
import { QuestionCard } from '@/widgets';
import useQuizPage from './lib';

const {
  quiz,
  currentQuestion,
  toAnswer,
} = useQuizPage();
</script>

<template>
  <div v-for="(question, index) in quiz.questions" :key="question.id">
    <div v-if="index === currentQuestion">
      <h1> {{ quiz.title }} </h1>
      <question-card
        :question="question"
        @on-answer="toAnswer"
      />
    </div>
  </div>
</template>
