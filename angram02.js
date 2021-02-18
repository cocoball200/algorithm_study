function anagrams(stringA, stringB) {
  return shortedString(stringA) === shortedString(stringB);
}

function shortedString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('hello', 'himia');