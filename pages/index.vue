<script setup>
const { locale, availableLocales } = useI18n()
const viewport = useViewport()
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})

</script>

<template>
  <aside> Aside </aside>
  <header>
    <h1>Header</h1>
    <select v-model="locale">
      <option
          v-for="locale in availableLocales"
          :key="locale"
          :value="locale"
      > {{ locale }} </option>
    </select>
    <nav> <h2>Navbar</h2> </nav>
  </header>
  <main>
    {{ $t('welcome') }}
    <br>
    {{ _toUpper('Ummm') }}
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