<template>
  <v-icon class="icon" icon="fas fa-fan" color="#3CB371" size="x-large"></v-icon>
</template>

<style>
.icon {
  margin: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
}
</style>
