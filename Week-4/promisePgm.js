let i = 4;
function getnumber() {
  return i++;
}

const obj = {
  getPromise(a) {
    console.log(i);
    if (i % 5 == 0) {
      console.log(i);
    } else {
      throw Error("number is not divisible by 5");
    }
  },
};
getnumber();
obj.getPromise();
