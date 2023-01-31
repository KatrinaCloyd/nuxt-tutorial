<script setup>
definePageMeta({
  layout: "bookspages",
});
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({ status: 404, statusMessage: "Product not Found" });
}
const percent = (Number(product.value.rating.rate) / 5) * 100 + "%";
</script>
<template>
  <Head>
    <Title>Shopping Page Tut | {{ product.title }}</Title>
  </Head>
  <h1>Product Detail Page</h1>
  <div class="wrapper">
    <img :src="product.image" class="image" />

    <div>
      <h2>{{ product.title }}</h2>
      <p>Price: ${{ product.price }}</p>
      <p>
        Customer Rating: {{ product.rating.rate }}
        <span class="rating">☆☆☆☆☆</span>
      </p>
      <p class="descHead">Product description:</p>
      <p class="desc">{{ product.description }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  display: flex;
  gap: 4rem;
  padding-block: 2rem;
}
.image {
  max-height: 400px;
  max-width: 400px;
  object-fit: contain;
}
h2 {
  margin-bottom: 1.5rem;
}
.descHead {
  width: 75%;
  margin-top: 1.5rem;
  padding-block: 5px;
  display: block;
  border-bottom: 1px solid grey;
}
.rating {
  position: relative;
  inline-size: fit-content;
  color: $primary;
  &:before {
    position: absolute;
    content: "★★★★★";
    background: linear-gradient(
      90deg,
      $primary v-bind(percent),
      transparent v-bind(percent)
    );
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
.desc {
  padding-block: 5px;
  font-size: small;
  max-width: 75%;
}
</style>
