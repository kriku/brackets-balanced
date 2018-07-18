const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
};

const closing = Object.values(brackets);

module.exports = function(str) {

    const stack = [];

    for (let s of str) {
        if (brackets[s]) {
            stack.push(brackets[s]);
        }
        if (closing.includes(s)) {
            let bracket = stack.pop();
            if (bracket != s) {
                return false;
            }
        }
    }

    return (stack.length == 0);
};
