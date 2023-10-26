<script setup lang="ts">
const { locale, availableLocales } = useI18n()
const viewport = useViewport()
</script>

<template>
  <aside>
    <ul>
      <li> <NuxtLink to="/"> Home </NuxtLink> </li>
      <li> <NuxtLink to="/login"> Login </NuxtLink> </li>
    </ul>
  </aside>
  <header>
    <h1>
      Header
      <select v-model="locale">
        <option
            v-for="locale in availableLocales"
            :key="locale"
            :value="locale"
        > {{ locale }} </option>
      </select>
    </h1>
    <nav> <h3>Navbar</h3> </nav>
  </header>
  <main>
    <slot />
    <br>
    <pre class="text-left">{{ viewport }}</pre>
  </main>
  <footer> <h2>Footer</h2> </footer>
</template>

<style scoped lang="scss">
* {
  text-align: center;
}
aside {
  float: left;
  min-height: 100vh;
  width: 100px;
  background-color: #ccc;
}
main {
  border: #000 solid 1px;
}
.text-left {
  text-align: left;
}
</style>