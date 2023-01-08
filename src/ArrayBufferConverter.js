import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor(data) {
    this.string = this.toString(data);
  }

  load(buffer) {
    const bufferToParse = getBuffer(buffer);
    return bufferToParse;
  }

  toString(data) {
    const arrToString = [];
    const buffer = this.load(data);
    for (let i = 0; i < buffer.length; i += 1) {
      arrToString.push(String.fromCharCode(buffer[i]));
    }
    const string = arrToString.join('');
    return string;
  }
}
