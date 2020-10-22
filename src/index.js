module.exports = function check(str, bracketsConfig) {
    const checkArr = [];
    const brackets = Object.fromEntries(bracketsConfig);

    for (const brack of str.split``) {
        if (checkArr[0] === brack) {
          checkArr.shift();
        } else if (brackets[brack]) {
          checkArr.unshift(brackets[brack]);
        } else {
          return false;
        }
    }

    return checkArr.length === 0;
}

// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true