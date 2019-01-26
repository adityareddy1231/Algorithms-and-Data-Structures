function search(matrix, i, j) {
  if (i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0 || matrix[i][j] == 0) {
    return;
  }
  matrix[i][j] = 0;
  search(matrix, i + 1, j);
  search(matrix, i - 1, j);
  search(matrix, i, j + 1);
  search(matrix, i, j - 1);
}


function countIslands(matrix) {
  var count = 0;
  var i, j;

  if(matrix.length == 0 || matrix[0].length == 0){
    return 0;
  }

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        count++;
        search(matrix, i, j);
      }
    }
  }
  return count;
}

function main() {
  var result = countIslands([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
  ]);

  console.log(result);
}

main();
