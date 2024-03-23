export default defineCachedEventHandler(async () => {
  const url = '/api/slow-route';
  await $fetch(url);

  return true;
}, { maxAge: 10 });