export default defineEventHandler(async (event) => {
  const DELAY = 2000;

  return new Promise((resolve) => setTimeout(resolve, DELAY));
});