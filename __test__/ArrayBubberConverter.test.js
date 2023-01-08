import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('should return string', () => {
  const string = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = new ArrayBufferConverter(string);
  expect(result.string).toBe(string);
});
