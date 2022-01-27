export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
