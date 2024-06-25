function createObj() {
  let obj = {};
  while (true) {
    let key = prompt(`Enter a key`);
    if (key.toLowerCase() === `stop`) {
      break;
    }
    let value = prompt(`Enter a value`);
    obj[key] = value;
  }
  console.log(obj);
}

