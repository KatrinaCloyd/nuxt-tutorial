<script setup>
definePageMeta({
  layout: "bookspages",
});
useHead({
  title: "Shopping Tut | Product List",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
<template>
  <h1>Products Page</h1>
  <div class="grid">
    <ProductCard :product="prod" v-for="prod in products" />
  </div>
</template>
<style scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-block-start: 1.5rem;
}
</style>
