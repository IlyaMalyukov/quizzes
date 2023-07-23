<script setup lang="ts">
import { defineProps, Ref, ref } from 'vue';
import type { propType } from 'vue';
// import isNil from 'lodash/isNil'; TO DO разобраться почему не работает такой импорт
import { isNil } from 'lodash';
import { Question } from './types';

const props = defineProps({
  question: Object as propType<Question>,
})

const selectedAnswer: Ref<number | undefined> = ref(undefined);
</script>

<template>
  <v-card class="card mt-10" :title="question.title" theme="dark">
    <img class="card__background" :src="props.question.img" alt="img"/>
    <v-radio-group v-model="selectedAnswer" class="ml-5">
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
    <v-btn class="card__button" :disabled="isNil(selectedAnswer)" color="success"> Ответить </v-btn>
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
