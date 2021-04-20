function getorder(num, scoreList) {
  const result = []; //순위를 넣을 곧
  let order = 1;
  let count = 0;
  scoreList.sort((a, b) => b - a);

  for (let i = 0; i < scoreList.length; i++) {
    if (scoreList[0] === 0) return 0;

    if (i > 0 && scoreList[i] === scoreList[i - 1]) {
      result.push(result[i - 1]);
      if (result[i - 1] <= num) {
        count++;
      }
    } else {
      result.push(order);
      console.log(result);
      if (order <= num) {
        count++;
      }
    }
    order++;
  }

  return count;
}

getorder(2, [80, 10, 30, 45]);
