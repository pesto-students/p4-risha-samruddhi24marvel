function createIncrement() {
  let count = 0;
  function increment() {
    console.log("in increment");
    count++;
  }
   let message = count ;
  function log() {
    console.log("in log");
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
