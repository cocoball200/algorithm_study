function chunck(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];


    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(chunck([1, 3, 5, 7, 24, 2, 1], 3))