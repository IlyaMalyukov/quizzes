<script setup lang="ts">
import { QuestionCard } from '@/widgets';
import { ResultCard } from '@/entities';
import useQuizPage from './lib';

const {
  quiz,
  currentQuestionIndex,
  points,
  totalQuestions,
  error,
  result,
  toAnswer,
} = useQuizPage();
</script>

<template>
  <h1> {{ quiz.title }} </h1>
  <div class="error"> {{ error }} </div>

  <div v-if="result">
    <result-card :result="result" :points="points" />
  </div>

  <div>
    <div v-for="(question, index) in quiz?.questions" :key="question.id">
      <div v-if="index === currentQuestionIndex">
        <question-card
          :question="question"
          @on-answer="toAnswer"
        />
      </div>
    </div>
  </div>
  <div v-else>
    Тут должен быт результат
  </div>

</template>
