/// <reference lib="webworker" />
function fibonacci(num) {
  if (num == 1 || num == 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

self.addEventListener('message', (evt: any) => {
  const num = evt.data; 
  postMessage(fibonacci(num));
 
})