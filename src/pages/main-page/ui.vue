<script setup lang="ts">
import { useMainPage } from "./lib";
import { QuizCard } from "@/widgets"


const {
  isLoading,
  quizzesList,
} = useMainPage();
</script>

<template>
  <div class="content">
    <p v-if="isLoading"> Загрузка... </p>
    <div v-else class="quiz-cards">
      <quiz-card v-for="quiz in quizzesList" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
