<template>
  <header>
    <nav>
      <NuxtLink to="/">Book List</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  box-shadow: 2px 2px 5px $black;
  border-radius: 5px;
  padding: 2rem;
}
nav,
ul {
  display: flex;
  justify-content: space-between;
}
li {
  padding-inline-start: 2rem;
}
.router-link-active {
  color: $secondary;
  pointer-events: none;
}
a {
  font-weight: 700;
  &:hover {
    color: $secondary;
  }
}
</style>
