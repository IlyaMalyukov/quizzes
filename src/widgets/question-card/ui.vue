<script setup lang="ts">
import {
  computed, ComputedRef, defineEmits, defineProps, Ref, ref,
} from 'vue';
import isNil from 'lodash/isNil';
import type { propType } from 'vue';
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
    <v-radio-group v-model="selectedAnswerId" class="ml-5">
      <v-radio
        v-for="answer in question.answers"
        :key="answer.id"
        :label="answer.value"
        :value="answer.points"
        color="success"
        false-icon="far fa-circle-dot"
        true-icon="far fa-circle-dot"
      />
    </v-radio-group>
    <v-btn
        class="card__button"
        :disabled="isNil(selectedAnswerId)"
        color="success"
        @click="handleAnswer"
    >
      Ответить
    </v-btn>
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
