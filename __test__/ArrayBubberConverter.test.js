import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('should return string', () => {
  const string = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = new ArrayBufferConverter();
  result.load(string);

  expect(result.toString()).toBe(string);
});
