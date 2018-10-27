function randomStr(len = 5) {
  const tmplArr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const tmplLen = tmplArr.length;
  const arr = [];
  for (var index = 0; index < len; index++) {
    arr.push(tmplArr[Math.floor(Math.random() * tmplLen)]);
  }
  return arr.join('');
}

export { randomStr };