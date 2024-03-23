
function measureFunctionTime(fn: any): any {
  const t0 = performance.now();
  fn();
  const t1 = performance.now();
  return t1 - t0;
}


async function measureFetchDataTime(url: string) {
  const t0 = performance.now();
  const resp = await $fetch(url);
  const t1 = performance.now();
  return Math.round(t1 - t0);
}

export {
  measureFunctionTime,
  measureFetchDataTime,
}