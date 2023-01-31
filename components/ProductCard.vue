<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
  <NuxtLink :to="`/products/${product.id}`" class="card">
    {{ product.title }}
    <img :src="product.image" class="thumbnail" />
    <span class="fauxBtn">View Details</span>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.card {
  border: $primary solid 2px;
  border-radius: 5px;
  padding: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px $black;
  transition: all 0.25s;
  &:hover {
    box-shadow: 1px 1px 2px $black;
    a {
      text-decoration: line-through;
    }
    .fauxBtn {
      background-color: $primary;
      color: white;
    }
  }
}
.thumbnail {
  padding: 10px;
  max-width: 50%;
  flex-grow: 1;
  object-fit: contain;
}
.fauxBtn {
  margin-block-start: 10px;
  width: 100%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: $primary;
  color: $background;
  transition: all 0.25s;
}
</style>
