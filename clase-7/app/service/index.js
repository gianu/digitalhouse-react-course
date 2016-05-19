export function addValueToService(value) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve({
        status: 200,
        body: { value }
      });
    }, 2000);
  });
}
