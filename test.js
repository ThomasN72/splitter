const assert = require('assert');
const splitter = require('./split')

describe('Splitter', function() {
  it('should split an empty string correctly by space delimiter into an array.', function() {
    assert.equal(JSON.stringify(splitter("")), JSON.stringify([""]));
  });
  it('should split a regular string correctly by space delimiter into an array.', function() {
    assert.equal(JSON.stringify(splitter("a bc d", " ")), JSON.stringify(["a", "bc", "d"]));
  });
  it('should split a string with space delimiter at first correctly into an array.', function() {
    assert.equal(JSON.stringify(splitter(" t his is a test", " ")), JSON.stringify(["", "t", "his", "is", "a", "test"]));
  });
  it('should split a string with space delimiter at last correctly into an array.', function() {
    assert.equal(JSON.stringify(splitter(" t his is a test", " ")), JSON.stringify(["", "t", "his", "is", "a", "test"]));
  });
  it('should split a string with space delimiter at first & last correctly into an array.', function() {
    assert.equal(JSON.stringify(splitter(" t his is a test ", " ")), JSON.stringify(["", "t", "his", "is", "a", "test", ""]));
  });
  it('should split a string with comma delimiter at last correctly into an array.', function() {
    assert.equal(JSON.stringify(splitter("this,is,a,test,", ",")), JSON.stringify(["this", "is", "a", "test", ""]));
  });
});

