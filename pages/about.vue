<script setup>
//using Nuxt built in api route
//GET
// const { data } = await useFetch("/api/blahblah?name=Booger");

//POST
const { data } = await useFetch("/api/blahblah?name=Booger", {
  method: "post",
  body: { age: 30 },
});
</script>
<template>
  <h1>About Page</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ipsam
    ipsa repellat nulla accusantium in quis provident earum magni repudiandae
    dolorem tenetur iste iusto, eveniet minus a dicta, ab beatae.
  </p>
  <p>...</p>
  <p>Api Route data: {{ data.message }}</p>
</template>
<style scoped>
h1 {
}
</style>
