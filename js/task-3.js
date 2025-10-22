// `use strict`
// Task 3. Element Width
function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const paddingWidth = Number.parseFloat(padding) * 2;
  const borderWidth = Number.parseFloat(border) * 2;
  const resultWith = contentWidth + paddingWidth + borderWidth;
  return resultWith;
}

console.log(getElementWidth('5px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
