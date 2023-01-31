<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
      rel="stylesheet"
    />
  </head>
  <Nav />
  <div class="container">
    <slot />
  </div>
  <footer>product pages use special layout that includes a footer</footer>
</template>
<style scoped lang="scss">
.container {
  padding: 2rem;
}
footer {
  background-color: $background;
  padding: 1.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  box-shadow: 2px 2px 5px $black;
}
</style>
