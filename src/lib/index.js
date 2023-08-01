export function rangeRandomFrom(paramMin, paramMax) {
  let res = -1;
  res = Math.random() * (paramMax - paramMin) + paramMin;
  return parseInt(res);
}

export function randomArray() {
  let maxCount = rangeRandomFrom(1, 100);
  if (maxCount < 10) maxCount = 10;
  let res = [];
  let num = 1;
  let temp_set = new Set();
  for (let i = 0; i < maxCount; i++) {
    num = parseInt(rangeRandomFrom(1, 100));
    temp_set.add(num);
  }
  res = Array.from(temp_set);
  res.sort((a, b) => {
    return a - b;
  });
  return res;
}
