function parse(qs) {
  const queryString = qs.substr(1);
  console.log(queryString)
  const chunks = qs.split('&');
  console.log(chunks)
  const result = chunks.map((chunck) => {
    const [key, value] = chunck.split("=");
    return { key: key, value: value }
  });
  return result;
}


//알고리즘문제 풀때, 이런식으로 사용해도 유용할 것 같다! 

//reduce를 사용하는 이유. map의 경우 새로운 배열을 반환한다. 하지만 reduce는 배열을 객체로 변환할때 유용하다. 

function parse1(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  return chunks.map(chunk => {
    const [key, value] = chunk.split('=');
    return { key, value }
  })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

parse1('MIA=developer&lol=singer&rel=actress');



