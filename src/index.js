
// You should implement your task here.

module.exports =  
function towelSort (matrix=[]) {
    let i;    
    if (matrix.length === 0) {
      return [];

    }
    for (i = 1; i < matrix.length; i+=2) {
      matrix[i].sort((a, b) => b - a);
    }
    let result = [];
    let arr = (matrix.toString()).split(',');
  
    for (i = 0; i < arr.length; i++) {
      result.push(parseInt(arr[i]));
    }
        return result;
  }
