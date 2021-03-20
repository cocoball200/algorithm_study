function solution(genres, plays) {
  var answer = [];
  genres = genres.map((genre, index) => {
    return {
      genre,
      index,
      playCount: plays[index],
    };
  });
  let genrePlayCount = [];
  const genreMap = {};
  let max = 0;
  let maxGenre = ""; //가장 많이 들은 장르 이름

  console.log(genres);
  //우선 어떤 장르가 제일 많이 들었는지 알아야 한다.
  genres.map((genre) => {
    genreMap[genre.genre] =
      genreMap[genre.genre] + genre.playCount || genre.playCount;
  });
  //
  // console.log(Object.getOwnPropertyNames(genreMap))
  // console.log(Object.keys(genreMap));

  // console.log(arrayGenreMap.sort())
  // genrePlayCount = [genreMap]
  // console.log(genrePlayCount);
  const arrayGenreMap = Object.entries(genreMap);
  console.log(arrayGenreMap);
  const sortedGenrePlayCount = arrayGenreMap.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(sortedGenrePlayCount);
  for (let i of sortedGenrePlayCount) {
    const a = genres.filter((item) => item.genre !== i[0]);
    genrePlayCount = [a, ...a];
  }
  console.log(genrePlayCount);
  // 가장 많이 들은 장르
  return answer;
}
const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 250];

solution(genres, plays);

//아직 미완 !
