<template>
  <div class="app">
    <button
      v-for="route in routes"
      :key="route"
      type="button"
      class="button"
      @click="handleClick(route)"
    >
      {{ route }}
    </button>
  </div>
</template>

<script setup lang="ts">

const routes: string[] = [
  'no_cacheing',
  'cached_maxAge_10_swr_true',
  'cached_maxAge_10_swr_false',
]

async function handleClick(route: string) {
  const url = `/api/${route}`;
  await fetchAndTimeData(url); 

  setTimeout(async () => {
    await fetchAndTimeData(url);
  }, 2000);
}


async function fetchAndTimeData(url: string) {
  console.log(`\nstarting fetch url`, url);
  const t0 = performance.now();
  const resp = await fetch(url);
  // console.log(`resp`, resp);
  const t1 = performance.now();
  console.log(`time ${Math.round(t1 - t0)} ms`);
  return true;
}

</script>

<style scoped>
.app {
  margin: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.button {
  background: cornflowerblue;
  color: white;
  border: none;
  width: max-content;
  border-radius: 7px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>