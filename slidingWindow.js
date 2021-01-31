const getLengthOfStr = str => {
    let set = new Set();
    let left = 0;
    let right = 0;
    let leng = str.length;
    let count = 0;

    while (right < leng && left < leng) {
        let char = str.charAt(right);
        if (!set.has(char)) {
            set.add(char);
            right++;
            count = Math.max(count, right - left);
        } else {
            set.delete(str.charAt(left));
            left++;
        }
    }
    return count;
}