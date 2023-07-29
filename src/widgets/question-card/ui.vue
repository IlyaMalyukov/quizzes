<script setup lang="ts">
import {
  computed, ComputedRef, defineEmits, defineProps, Ref, ref,
} from 'vue';
import isNil from 'lodash/isNil';
import type { propType } from 'vue';
import { RadioButtons } from '@/shared';
import type { Question, Answer } from './lib/types';

const props = defineProps({
  question: Object as propType<Question>,
});

const emit = defineEmits(['on-answer']);

const selectedAnswerId: Ref<number | undefined> = ref(undefined);

const selectedAnswer: ComputedRef<Answer> = computed(() => {
  return props.question.answers.find((i: Answer) => i.id === selectedAnswerId.value)
});

const handleAnswer = () => emit('on-answer', selectedAnswer.value);
</script>

<template>
  <v-card class="card mt-10" :title="question.title" theme="dark">
    <img class="card__background" :src="props.question.img" alt="img"/>
    <radio-buttons v-model="selectedAnswerId" :options="question.answers"/>
    <button :disabled="isNil(selectedAnswerId)" @click="handleAnswer">
      Ответить
    </button>
  </v-card>
</template>

<style scoped>
.card {
  min-height: 60vh;
}

.card__background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: .05;
  object-fit: cover;
}
</style>
