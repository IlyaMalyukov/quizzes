<script setup lang="ts">
import useMainPage from './lib';
import { QuizCard } from '@/entities';
import { Loader } from '@/shared';


const {
  isLoading,
  quizzesList,
} = useMainPage();
</script>

<template>
  <div class="content">
    <h1> Квизы </h1>
    <br>
    <loader v-if="isLoading"/>
    <div v-else class="quiz-cards">
      <quiz-card v-for="quiz in quizzesList" :key="quiz.id" :quiz="quiz"/>
      <pre> {{ quizzesList }} </pre>
    </div>
  </div>
</template>
