const balanced = require('./');

const examples = {
    '()': true,
    '(': false,
    ')(': false,
    '())': false,
    '([])': true,
    '(])': false,
    '(][)': false,
    '([)]': false
};

describe('Check brackets balancing function', () => {
    for (let example in examples) {
        it(`should pass example "${example}"`, () => {
            expect(balanced(example)).toBe(examples[example]);
        });
    }
});
