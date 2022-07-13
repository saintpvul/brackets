module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  bracketsConfig.forEach((brackets) => {
    openBrackets.push(brackets[0]);
    closeBrackets.push(brackets[1]);
  });

  function closeOpened(char) {
    if (opened[opened.length - 1] === openBrackets[closeBrackets.indexOf(char)])
      opened.pop();
  }

  let opened = [];

  for (let char of str) {
    if (
      closeBrackets.includes(char) &&
      opened.includes(openBrackets[closeBrackets.indexOf(char)])
    ) {
      closeOpened(char);
    } else if (openBrackets.includes(char)) {
      opened.push(char);
    } else return false;
  }

  return opened.length ? false : true;
};
// complete task
