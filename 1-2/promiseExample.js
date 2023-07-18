const wait = time => new Promise((resolve) =>
setTimeout(resolve, time));

wait(3000).then(() => console.log('World!'));

console.log("Hello!");