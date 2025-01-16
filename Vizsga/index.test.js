const cancel = require('./index');
//how to export data part into js?

test('removes participant2 from concert', () => {
  expect(cancel(participant2, concert)).toBe(true);
});