<script setup lang="ts">
import { QuestionCard } from '@/widgets';
import useQuizPage from './lib';

const {
  quiz,
  currentQuestionIndex,
  points,
  totalQuestions,
  toAnswer,
} = useQuizPage();
</script>

<template>
  <div v-if="totalQuestions < currentQuestionIndex">
    <div v-for="(question, index) in quiz?.questions" :key="question.id">
      <div v-if="index === currentQuestionIndex">
        <h1> {{ quiz.title }} </h1>
        <question-card
            :question="question"
            @on-answer="toAnswer"
        />
      </div>
    </div>
  </div>

</template>
