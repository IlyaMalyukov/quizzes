<script setup lang="ts">
import { QuizCard } from '@/entities';
import { Loader } from '@/shared';
import useMainPage from './lib';


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
    </div>
  </div>
</template>
