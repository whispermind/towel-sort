
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length == 0) return []
  for(let i = 0;; i++){
    if(!Array.isArray(matrix[0])) break;
    if(i % 2 == 0) matrix.push(...matrix[0]);
    else matrix.push(...(matrix[0].reverse()));
    matrix.shift();
  }
  return matrix;
}
