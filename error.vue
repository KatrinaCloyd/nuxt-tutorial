<script setup>
defineProps(["error"]);
const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>
<template>
  <div class="error">
    <h1>{{ error.statusCode }} Error</h1>
    <p>Ooops ... {{ error.message }}</p>
    <button @click="handleClearError">Home</button>
  </div>
</template>
<style scoped lang="scss">
h1 {
  color: $primary;
  font-family: "Special Elite", serif;
}
.error {
  max-width: 50%;
  max-height: fit-content;
  border: $primary solid 1px;
  margin: auto;
  margin-block-start: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 40px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px $highlight;
}

button {
  margin-block: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: $secondary;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1em;
  transition: all ease 0.2s;
  &:hover {
    background-color: $primary;
  }
}
</style>
