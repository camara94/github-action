const sum = require('./sun');
test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
})