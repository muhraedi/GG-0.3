const wait = time => new Promise((resolve) => setTimeout(resolve, time));

async function asyncAwait() {
    console.log("Hello!");
    await wait(3000);
    console.log("World!");
}
asyncAwait();