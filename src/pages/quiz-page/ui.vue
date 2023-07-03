<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <h1> Quiz page </h1>
  <pre> {{ route.params }} </pre>
</template>
