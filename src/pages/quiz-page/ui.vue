<script setup lang="ts">
import { useRoute } from "vue-router";
import {onMounted, ref} from "vue";
import { getQuizDataAgent } from "./api";

const route = useRoute();

const agent = getQuizDataAgent();

const quizId = route.query.id;

const res = ref({});

onMounted(async () => {
  res.value = await agent.getQuizById(quizId);
})
</script>

<template>
  <h1> Quizzes Page </h1>
  <pre> {{ res.data }} </pre>
</template>
