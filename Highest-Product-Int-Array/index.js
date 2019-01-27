//Given a list of integers, find the highest product you can get from three of the integers.

var intList = [4, 5, 1, 8, 9];

function checkHighest(intList){
  var highest = 0;
  var temp = 0;
  var length = intList.length;
  intList.sort();
  highest = intList[length-1]*intList[length-2]*intList[length-3];
  console.log(highest);
}

checkHighest(intList);
