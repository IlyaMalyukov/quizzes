<script setup lang="ts">
import { defineProps, ref } from 'vue';
// import isNil from 'lodash/isNil'; TO DO разобраться почему не работает такой импорт
import { isNil } from 'lodash';

const props = defineProps({
  question: Object,
})

const selectedAnswer = ref(undefined);
</script>

<template>
  <v-card class="mt-10" :title="question.title" theme="dark">
    <img :src="props.question.img" alt="img"/>
    <v-radio-group v-model="selectedAnswer" class="ml-5">
      <v-radio
        v-for="answer in question.answers"
        :key="answer.id"
        :label="answer.value"
        :value="answer.points"
        color="primary"
      />
    </v-radio-group>
    <v-btn :disabled="isNil(selectedAnswer)" class="mb-5"> Ответить </v-btn>
  </v-card>
</template>

<style>
img {
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
