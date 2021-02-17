function getMaxArea(height) {
  console.log(height)
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let cur = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(cur, max);
    height[left] <= height[right] ? left++ : right--;
  }
  console.log(max)
  return max
}