<script setup lang="ts">
import { PropType, ref } from 'vue';

type Option = { id: number, value: string, points?: number };

const props = defineProps({
  options: {
    type: Array as PropType<Option>,
    required: true,
  },
  modelValue: Number,
});

const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(props.modelValue);

const updateModelValue = () => { emit('update:modelValue', selectedOption.value); };
</script>

<template>
<div class="radios" >
  <label
    :class="option.id === modelValue ? 'radio radio_selected' : 'radio'"
    v-for="option in options" :key="option.id"
  >
    <input
      type="radio"
      :value="option.id"
      v-model="selectedOption"
      @change="updateModelValue"
    >
    <span> {{ option.value }} </span>
  </label>
</div>
</template>

<style scoped>
.radios {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 30px auto;
}

.radio {
  background: #000;
  border-radius: 5px;
  padding: 5px 0;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid transparent;
  margin-bottom: 20px;
}

.radio_selected {
  border-color: #fff;
}

.radio input {
  display: none;
}
</style>
