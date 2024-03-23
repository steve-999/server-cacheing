export default defineEventHandler(async () => {
  const url = '/api/slow-route';
  await $fetch(url);

  return true;
});