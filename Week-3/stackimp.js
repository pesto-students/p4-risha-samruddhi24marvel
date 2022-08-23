function createStack() {
  const items = [];
  return {
    push(item) {
        console.log("in push")
      items.push(item);
    },
    pop() {
      return items.pop();
    },

  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5stack.items;// => [10]
//stack.items = [14,11,12];// Encapsulationbroken!functioncreateStack() );
console.log(stack.items);
