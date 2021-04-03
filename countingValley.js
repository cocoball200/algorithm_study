function countingValleys(steps, path) {
  const arrayedPath = path.split("");
  let result = 0;
  let count = 0;
  arrayedPath.forEach((path) => {
    if (path === "U") {
      result++;
      if (result === 0) count++;
    } else {
      result--;
    }
  });
  return count;
}
