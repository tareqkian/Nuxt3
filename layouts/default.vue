<script setup lang="ts">
const { locale, availableLocales } = useI18n()
const viewport = useViewport()

</script>
<template>
  <div class="row">
    <div class="col-3">
      <select class="form-select" v-model="locale">
        <option
            v-for="locale in availableLocales"
            :key="locale"
            :value="locale"
        > {{ locale }} </option>
      </select>
    </div>
  </div>
  <slot />
  <pre>{{ viewport }}</pre>
</template>