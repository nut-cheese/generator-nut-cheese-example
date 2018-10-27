
// requires 所有在 `project/test/src/components/**/index.js` 中的测试
const tests = require.context('./__test__', true, /\.js$/);

tests.keys().forEach(tests);